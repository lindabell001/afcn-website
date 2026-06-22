const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("=== FUNCTION STARTED ===");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("Body:", body);

    // Try both possible URL names
    const supabaseUrl = process.env.SUPABASE_URL || process.env.SUPABASE_DATABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    console.log("URL present:", !!supabaseUrl);
    console.log("Key present:", !!supabaseKey);

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase URL or Service Role Key in function environment");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.auth.signUp({
      email: body.email || `test${Date.now()}@example.com`,
      password: body.password || 'password123'
    });

    if (error) throw error;

    console.log("✅ Success - User ID:", data.user.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "User created" })
    };

  } catch (err) {
    console.error("💥 ERROR:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message })
    };
  }
};
