const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("🚀 Function started");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("📦 Received data:", body);

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    console.log("✅ Supabase client created");

    // Simple auth signup only (no profile insert yet)
    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password || 'password123',
      options: {
        data: {
          first_name: body.firstName || 'Test',
          last_name: body.lastName || 'User'
        }
      }
    });

    if (error) {
      console.error("❌ Auth signup failed:", error);
      throw error;
    }

    console.log("✅ User created successfully!");

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "Application received! Norine will review it." 
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
