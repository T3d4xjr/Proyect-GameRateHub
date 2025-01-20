'use client'
import React, { useState } from 'react';
import { supabase } from '../supabase/supabase'; // Asegúrate de que la ruta esté correcta.

export default function Login() {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');

  // Cambios en el estado para los campos
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContrasenaChange = (e) => setContrasena(e.target.value);

  // Función de inicio de sesión por email y contraseña
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Realiza el inicio de sesión con correo y contraseña
    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password: contrasena,
    });

    if (error) {
      console.error('Error al iniciar sesión', error);
    } else {
      window.location.href = '/'; // Redirige al usuario a la página principal
    }
  };

  // Función de inicio de sesión con Google
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google', // Google es el proveedor de OAuth
    });

    if (error) {
      console.error('Error al iniciar sesión con Google', error);
    } else {
      window.location.href = '/'; // Redirige al usuario a la página principal
    }
  };

  return (
    <div>
      <h1><b>GameRate Hub</b> </h1>
      <p>La brujula para gamers en busca de su próxima aventura.</p>
      <h2>Formulario de Iniciar Sesión</h2>

      <form onSubmit={handleSubmit}>
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

        <button type="submit">Iniciar sesión</button>
      </form>

      <p>¿No tienes cuenta? <a href="/registro">Regístrate aquí</a></p>

      <div>
        <button onClick={handleGoogleLogin}>Iniciar sesión con Google</button>
      </div>
    </div>
  );
}
