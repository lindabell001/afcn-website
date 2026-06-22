const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event, context) {
  console.log("=== FUNCTION STARTED ===");
  console.log("Method:", event.httpMethod);

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const body = JSON.parse(event.body || '{}');

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    console.log("✅ Supabase client created successfully");

    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password || 'password123',
      options: {
        data: {
          first_name: body.firstName,
          last_name: body.lastName,
          phone: body.phone,
          address: body.address,
          why_joining: body.whyJoining,
          x_handle: body.xHandle,
          membership_status: 'pending'
        }
      }
    });

    if (error) {
      console.error("❌ Auth signup error:", error);
      throw error;
    }

    console.log("✅ User created in Supabase Auth");

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "Application received! Norine will review it." 
      })
    };

  } catch (err) {
    console.error("💥 FUNCTION ERROR:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message || "Unknown error" })
    };
  }
};
