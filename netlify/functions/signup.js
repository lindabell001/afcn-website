const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("🔥 Function called - Method:", event.httpMethod);
  console.log("Body received:", event.body);

  try {
    const body = JSON.parse(event.body || '{}');

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    console.log("✅ Supabase client created");

    const { data, error } = await supabase.auth.signUp({
      email: body.email,
      password: body.password,
      options: {
        data: {
          first_name: body.firstName,
          last_name: body.lastName
        }
      }
    });

    if (error) {
      console.error("Auth signup error:", error);
      throw error;
    }

    console.log("✅ User created in Auth");

    // Insert profile
    const { error: profileError } = await supabase.from('profiles').insert({
      id: data.user.id,
      first_name: body.firstName,
      last_name: body.lastName,
      phone: body.phone || null,
      address: body.address || null,
      why_joining: body.whyJoining || null,
      x_handle: body.xHandle || null,
      membership_status: 'pending'
    });

    if (profileError) console.error("Profile insert error:", profileError);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Application received!" })
    };

  } catch (err) {
    console.error("💥 Function error:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message || "Unknown error" })
    };
  }
};
