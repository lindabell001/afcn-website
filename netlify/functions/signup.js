const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("=== FULL SIGNUP FUNCTION STARTED ===");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("Received full data:", body);

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    console.log("✅ Supabase client created");

    // 1. Create user in Auth
    const { data, error: authError } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: {
          first_name: body.firstName,
          last_name: body.lastName
        }
      }
    });

    if (authError) {
      console.error("Auth error:", authError);
      throw authError;
    }

    console.log("✅ User created in Auth. ID:", data.user.id);

    // 2. Insert full profile with ALL your fields
    const { error: profileError } = await supabase.from('profiles').insert({
      id: data.user.id,
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone,
      address: body.address,
      why_joining: body.whyJoining,
      x_handle: body.xHandle,
      membership_status: 'pending'
    });

    if (profileError) {
      console.error("Profile insert error:", profileError);
      throw profileError;
    }

    console.log("✅ Full profile inserted successfully");

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "Application received! Norine will review it soon." 
      })
    };

  } catch (err) {
    console.error("💥 FULL FUNCTION ERROR:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ 
        error: err.message || "Unknown error",
        details: err 
      })
    };
  }
};
