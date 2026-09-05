import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function MemberLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) {
        window.location.replace('/inside');
      }
    });
  }, []);

  async function signIn() {
    setMsg('');
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setMsg('Login failed: ' + error.message);
      return;
    }
    window.location.replace('/inside');
  }

  async function forgot() {
    if (!email) {
      setMsg('Enter your email first.');
      return;
    }
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'https://americafirstcitizensnetwork.org/member-login',
    });
    if (error) setMsg(error.message);
    else setMsg('Check your email for the reset link.');
  }

  return (
    <main style={{ maxWidth: 420, margin: '80px auto', padding: 24, textAlign: 'center' }}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="username"
        style={{ width: '100%', padding: 12, marginBottom: 12, borderRadius: 20 }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="current-password"
        style={{ width: '100%', padding: 12, marginBottom: 12, borderRadius: 20 }}
      />
      <button
        type="button"
        onClick={signIn}
        style={{
          width: '100%',
          padding: 14,
          background: '#c4122e',
          color: '#fff',
          border: 0,
          borderRadius: 20,
        }}
      >
        Sign In
      </button>
      <p>
        <button
          type="button"
          onClick={forgot}
          style={{ background: 'none', border: 0, color: '#c4122e' }}
        >
          Forgot Password?
        </button>
      </p>
      {msg && <p>{msg}</p>}
    </main>
  );
}
