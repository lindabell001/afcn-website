<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Request New Tavern - AFCN</title>
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <style>
    body { font-family: Arial; max-width: 600px; margin: 40px auto; padding: 20px; }
    input, textarea, select { width: 100%; padding: 10px; margin: 10px 0; }
    button { padding: 12px 24px; background: #0066cc; color: white; border: none; cursor: pointer; }
    .success { color: green; }
  </style>
</head>
<body>
  <h1>Request a New Tavern</h1>
  
  <form id="requestForm">
    <label>Group Type</label>
    <select id="group_type" required>
      <option value="tavern">Tavern (Location)</option>
      <option value="committee">Committee (Issue)</option>
    </select>

    <label>Name</label>
    <input type="text" id="name" required placeholder="e.g. Texas Freedom Tavern">

    <label>Location or Issue</label>
    <input type="text" id="location_or_issue" required placeholder="e.g. Austin, TX or Border Security">

    <label>Description</label>
    <textarea id="description" rows="5" required placeholder="Tell us about your group..."></textarea>

    <button type="submit">Submit Request</button>
  </form>

  <div id="message"></div>

  <script>
    // Replace with your Supabase URL and Anon Key
    const supabaseUrl = 'https://your-project-ref.supabase.co';
    const supabaseAnonKey = 'your-anon-key-here';
    
    const supabase = Supabase.createClient(supabaseUrl, supabaseAnonKey);

    document.getElementById('requestForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const messageDiv = document.getElementById('message');
      messageDiv.innerHTML = 'Submitting...';

      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        messageDiv.innerHTML = '<span style="color:red">Please log in first.</span>';
        return;
      }

      const formData = {
        requester_id: user.id,
        group_type: document.getElementById('group_type').value,
        name: document.getElementById('name').value,
        location_or_issue: document.getElementById('location_or_issue').value,
        description: document.getElementById('description').value
      };

      const { error } = await supabase
        .from('group_requests')
        .insert(formData);

      if (error) {
        messageDiv.innerHTML = `<span style="color:red">Error: ${error.message}</span>`;
      } else {
        messageDiv.innerHTML = '<span class="success">✅ Request submitted successfully! An admin will review it.</span>';
        document.getElementById('requestForm').reset();
      }
    });
  </script>
</body>
</html>
