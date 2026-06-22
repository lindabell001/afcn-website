const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("=== PHASE 1 FUNCTION STARTED ===");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("Received body:", body);

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    console.log("Supabase client created");

    const { data, error } = await supabase.auth.signUp({
      email: body.email || `test${Date.now()}@example.com`,
      password: "password123"
    });

    if (error) {
      console.error("Auth signup error:", error);
      throw error;
    }

    console.log("✅ Auth signup successful - User ID:", data.user.id);

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "User created successfully" 
      })
    };

  } catch (err) {
    console.error("💥 Function error:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message || "Unknown error" })
    };
  }
};
