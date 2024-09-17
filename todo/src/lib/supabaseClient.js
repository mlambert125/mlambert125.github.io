import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://jdwdftztgdahfwgnpdiz.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impkd2RmdHp0Z2RhaGZ3Z25wZGl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5Mjc4MjksImV4cCI6MjA0MTUwMzgyOX0.AzlzhiYYureJn0ge8io1kptPUlQvGU_FYbOJo4sqT-o')