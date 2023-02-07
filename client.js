
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://hjqfjwfrprdgikuqcfux.supabase.co";
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqcWZqd2ZycHJkZ2lrdXFjZnV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzQ4NzI0MjcsImV4cCI6MTk5MDQ0ODQyN30.f_NL83suF_ZtlPgA2-lrFp2KPAOjH-AQ9I9WJ2HNfkY";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;