const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event) {
  console.log("=== FUNCTION STARTED ===");

  try {
    const body = JSON.parse(event.body || '{}');
    console.log("Body received:", body);

    const supabaseUrl = process.env.SUPABASE_DATABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    console.log("URL present:", !!supabaseUrl);
    console.log("Key present:", !!supabaseKey);

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Missing Supabase URL or Service Role Key");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

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

    if (error) throw error;

    // Insert full profile with all your fields
    await supabase.from('profiles').insert({
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

    console.log("✅ Full signup successful");

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: "Application received! Norine will review it soon." })
    };

  } catch (err) {
    console.error("💥 FUNCTION ERROR:", err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message })
    };
  }
};
