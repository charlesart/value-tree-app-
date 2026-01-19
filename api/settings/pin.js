const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

module.exports = async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const { data, error } = await supabase
      .from('settings')
      .select('value')
      .eq('key', 'pin')
      .single();

    if (error) {
      // Default PIN if not set
      return res.json({ pin: '1234' });
    }

    return res.json({ pin: data.value });
  }

  if (req.method === 'PUT') {
    const { pin } = req.body;

    if (!pin || pin.length !== 4 || !/^\d{4}$/.test(pin)) {
      return res.status(400).json({ error: 'PIN must be exactly 4 digits' });
    }

    const { error } = await supabase
      .from('settings')
      .upsert({ key: 'pin', value: pin });

    if (error) {
      console.error('Error updating PIN:', error);
      return res.status(500).json({ error: error.message });
    }

    return res.json({ success: true });
  }

  res.status(405).json({ error: 'Method not allowed' });
};
