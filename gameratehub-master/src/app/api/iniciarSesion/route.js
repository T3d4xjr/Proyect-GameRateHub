import { createClient } from '@supabase/supabase-js';

// Inicializamos el cliente de Supabase
const supabaseUrl = 'https://jhmitdlfkwyudwteerpt.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET(req, { params }) {
  const { id } = params; // Obtenemos el id de los videojuegos desde la URL

  // Consultamos el videojuego por su id
  const { data: videojuego, error } = await supabase
    .from('videojuegos') // Suponiendo que tu tabla de videojuegos se llama 'videojuegos'
    .select('*')
    .eq('id', id) // Filtramos por el id
    .single(); // Solo tomamos un videojuego, ya que el id es único

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  if (!videojuego) {
    return new Response(JSON.stringify({ message: "Videojuego no encontrado" }), { status: 404 });
  }

  return new Response(JSON.stringify(videojuego), { status: 200 });
}
