const { createClient } = require('@supabase/supabase-js');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  try {
    const body = JSON.parse(event.body);
    const { email, password, firstName, lastName, phone, address, whyJoining, xHandle } = body;

    const supabase = createClient(
      process.env.SUPABASE_DATABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    // Create user in Supabase Auth
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName
        }
      }
    });

    if (error) throw error;

    // Add extra profile info
    await supabase.from('profiles').insert({
      id: data.user.id,
      first_name: firstName,
      last_name: lastName,
      phone: phone || null,
      address: address || null,
      why_joining: whyJoining || null,
      x_handle: xHandle || null,
      membership_status: 'pending'
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ 
        success: true, 
        message: "Account created! Norine will review your application soon." 
      })
    };

  } catch (err) {
    console.error(err);
    return {
      statusCode: 400,
      body: JSON.stringify({ error: err.message })
    };
  }
};
