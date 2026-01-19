const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('trees')
      .select('*');

    if (error) {
      console.error('Error fetching trees:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.json(data);
  }

  if (req.method === 'POST') {
    const { id, name, description, structure } = req.body;

    const { data, error } = await supabase
      .from('trees')
      .insert({ id, name, description, structure })
      .select()
      .single();

    if (error) {
      console.error('Error creating tree:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(201).json(data);
  }

  res.status(405).json({ error: 'Method not allowed' });
};
