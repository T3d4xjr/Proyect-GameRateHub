'use client'
import React, { useState } from 'react';
import { supabase } from '../supabase/supabase'; // Asegúrate de que la ruta esté correcta

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [email, setEmail] = useState('');
  const [terminos, setTerminos] = useState(false);
  const [politica, setPolitica] = useState(false);

  // Funciones para el manejo de cambios en los inputs
  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleContrasenaChange = (e) => setContrasena(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleTerminosChange = (e) => setTerminos(e.target.checked);
  const handlePoliticaChange = (e) => setPolitica(e.target.checked);

  // Función para manejar el registro tradicional (con email y contraseña)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Intentamos registrar al usuario con email y contraseña
    const { error } = await supabase.auth.signUp({
      email,
      password: contrasena,
    });

    if (error) {
      console.error('Error al registrar usuario', error);
    } else {
      alert('Registro exitoso');
      window.location.href = '/'; // Redirigir al usuario después del registro
    }
  };

  // Función para iniciar sesión con Google (usando OAuth)
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google', // Proveedor Google
    });

    if (error) {
      console.error('Error con el login de Google', error);
    } else {
      window.location.href = '/'; // Redirigir a la página principal después de la autenticación con Google
    }
  };

  return (
    <div>
      <h1><b>GameRate Hub</b></h1>
      <p>La brújula para gamers en busca de su próxima aventura.</p>
      <h2>Formulario de Registro</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          value={nombre}
          onChange={handleNombreChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />

        <label htmlFor="contrasena">Contraseña:</label>
        <input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={handleContrasenaChange}
          required
        />

        <label>
          <input
            type="checkbox"
            id="terminos"
            checked={terminos}
            onChange={handleTerminosChange}
            required
          />
          Acepto los <a href="/terminos">Términos y Condiciones</a>
        </label>

        <label>
          <input
            type="checkbox"
            id="politica"
            checked={politica}
            onChange={handlePoliticaChange}
            required
          />
          Acepto la <a href="/politica">Política de Privacidad</a>
        </label>

        <button type="submit">Registrar</button>
      </form>

      <p>¿Ya tienes cuenta? <a href="/iniciarSesion">Inicia sesión</a></p>

      {/* Botón para inicio de sesión con Google */}
      <div>
        <button onClick={handleGoogleLogin}>Registrarse/Iniciar sesión con Google</button>
      </div>
    </div>
  );
}
