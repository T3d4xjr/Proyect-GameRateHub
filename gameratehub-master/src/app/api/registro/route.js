import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jhmitdlfkwyudwteerpt.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



export async function POST(req) {
  const body = await req.json();
  const { email, password, nombre } = body;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { nombre } },
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ message: "Registro exitoso" }), { status: 200 });
}
