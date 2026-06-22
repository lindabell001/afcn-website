const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("=== FUNCTION CALLED ===");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("Body received:", body);

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    console.log("Client created - Keys OK");

    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
    });

    if (error) throw error;

    console.log("✅ Auth signup successful");

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };

  } catch (err) {
    console.error("💥 ERROR:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message })
    };
  }
};
