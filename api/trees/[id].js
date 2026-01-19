const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { id } = req.query;

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('trees')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error fetching tree:', error);
      return res.status(404).json({ error: 'Tree not found' });
    }

    return res.json(data);
  }

  if (req.method === 'PUT') {
    const { name, description, structure } = req.body;

    const { data, error } = await supabase
      .from('trees')
      .upsert({
        id,
        name: name || id,
        description: description || '',
        structure: structure || {},
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) {
      console.error('Error updating tree:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.json(data);
  }

  if (req.method === 'DELETE') {
    const { error } = await supabase
      .from('trees')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting tree:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
