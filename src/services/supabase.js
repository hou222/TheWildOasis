import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://psllteojpckjdkmwrlsd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzbGx0ZW9qcGNramRrbXdybHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY0Nzc1MTksImV4cCI6MjAyMjA1MzUxOX0.xNBpD2dC71lYTjHbQ5WbYm-yPrhcplD1o4lTT8eeDv4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
