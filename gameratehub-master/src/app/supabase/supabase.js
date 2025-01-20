import { createClient } from '@supabase/supabase-js';

// Asegúrate de que las variables de entorno sean correctas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://jhmitdlfkwyudwteerpt.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpobWl0ZGxma3d5dWR3dGVlcnB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY3NTc2NTEsImV4cCI6MjA1MjMzMzY1MX0.8qqUQJZGPsU0FmDDMhRkVJ1QWNkaWOQsG2OleVEY0Lk';

// Verifica si las variables se están cargando correctamente
console.log('supabaseUrl:', supabaseUrl);
console.log('supabaseKey:', supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
