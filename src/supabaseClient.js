// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dhmveclwvoofnbgzpqvc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRobXZlY2x3dm9vZm5iZ3pwcXZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NjA2MTEsImV4cCI6MjA3NjEzNjYxMX0.b7TyxqkVmU-KF5raxESsb4DQLNy9YkxSXff7g0dpS0o';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);