const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("=== FUNCTION STARTED ===");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("Body received:", body);

    // Try all possible URL names
    const supabaseUrl = process.env.SUPABASE_URL || 
                       process.env.SUPABASE_DATABASE_URL || 
                       process.env.VITE_SUPABASE_URL;

    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    console.log("URL found:", !!supabaseUrl);
    console.log("Key found:", !!supabaseKey);

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase URL or Service Role Key");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase.auth.signUp({
      email: body.email || `test${Date.now()}@example.com`,
      password: body.password || 'password123'
    });

    if (error) throw error;

    console.log("✅ SUCCESS - User created");

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "User created" })
    };

  } catch (err) {
    console.error("💥 FUNCTION FAILED:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message })
    };
  }
};
