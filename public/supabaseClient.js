// public/supabaseClient.js
// Simple client for the static signup.html page

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://iskownhurcvjrcsgtbe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlza293bmh1cmN2Z2pyY3NndGJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA4MjY0MzYsImV4cCI6MjA5NjQwMjQzNn0.FQd5HUAN1iOvZEZVouudktuOwKsohxFl6QiFthc4Byg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
