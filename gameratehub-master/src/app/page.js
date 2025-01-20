"use client";
import React from "react";
import Link from "next/link";

// Datos para géneros y videojuegos
const generos = ["RPG", "Fantasy", "Shooter"]; // Obtén esto de la página de géneros
const videojuegos = [
  { id: 1, titulo: "Final Fantasy VII", calificacion: 4.9, imagen: "/rpg1.jpg" },
  { id: 5, titulo: "One Piece Odyssey", calificacion: 4.8, imagen: "/fantasy2.jpg" },
  { id: 8, titulo: "Black Ops 3", calificacion: 4.7, imagen: "/shooter2.jpg" },
  // Puedes agregar más videojuegos aquí con sus calificaciones
];

export default function HomePage() {
  // Seleccionar los 3 mejores valorados
  const mejoresValorados = [...videojuegos]
    .sort((a, b) => b.calificacion - a.calificacion)
    .slice(0, 3);

  return (
    <div>
      <h1>Bienvenido a nuestra página de videojuegos</h1>

      {/* Ranking de géneros */}
      <section>
        <h2>Ranking de géneros</h2>
        <ul>
          {generos.map((genero) => (
            <li key={genero}>
              <Link href={`/generos`}>
                <b>{genero}</b>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Mejores valorados */}
      <section>
        <h2>Mejores valorados</h2>
        <div>
          {mejoresValorados.map((juego) => (
            <Link
              key={juego.id}
              href={`/videojuegos/${juego.id}`}
            >
              <div>
                <img
                  src={juego.imagen}
                  alt={juego.titulo}
                  title={juego.titulo}/>
                <h3>{juego.titulo}</h3>
                <p>Calificación: <b>{juego.calificacion}</b></p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

