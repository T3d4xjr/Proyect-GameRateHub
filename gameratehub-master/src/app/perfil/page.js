"use client";
import React, { useState } from "react";

const juegosFavoritos = [
  { id: 1, titulo: "Final Fantasy VII", imagen: "/rpg1.jpg" },
  { id: 3, titulo: "Diablo III", imagen: "/rpg3.jpg" },
  { id: 4, titulo: "Elden Ring", imagen: "/fantasy1.jpg" },
];

export default function PerfilPage() {
  const [fotoPerfil, setFotoPerfil] = useState("/default-profile.jpg");
  const [nombre, setNombre] = useState("Nombre Usuario");
  const [pais, setPais] = useState("España");
  const [localidad, setLocalidad] = useState("Madrid");
  const [editandoPerfil, setEditandoPerfil] = useState(false);

  const [informacion, setInformacion] = useState("Información sobre mí.");
  const [telefono, setTelefono] = useState("123-456-789");
  const [idioma, setIdioma] = useState("es");
  const [editandoInfo, setEditandoInfo] = useState(false);

  const cambiarFoto = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const reader = new FileReader();
      reader.onload = () => setFotoPerfil(reader.result);
      reader.readAsDataURL(archivo);
    }
  };

  const cambiarIdioma = (e) => setIdioma(e.target.value);

  return (
    <div>
      <div>
        <div>
          <img src={fotoPerfil} alt="Foto de perfil" />
          <div>
            <input
              type="file"
              accept="image/*"
              id="input-foto"
              onChange={cambiarFoto}
            />
            <label htmlFor="input-foto">
              <button>Cambiar Foto</button>
            </label>
          </div>
          <div>
            <label>
              Nombre:
              {editandoPerfil ? (
                <input
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              ) : (
                <span>{nombre}</span>
              )}
            </label>
          </div>
          <div>
            <label>
              País:
              {editandoPerfil ? (
                <input
                  type="text"
                  value={pais}
                  onChange={(e) => setPais(e.target.value)}
                />
              ) : (
                <span>{pais}</span>
              )}
            </label>
          </div>
          <div>
            <label>
              Localidad:
              {editandoPerfil ? (
                <input
                  type="text"
                  value={localidad}
                  onChange={(e) => setLocalidad(e.target.value)}
                />
              ) : (
                <span>{localidad}</span>
              )}
            </label>
          </div>
          <button onClick={() => setEditandoPerfil(!editandoPerfil)}>
            {editandoPerfil ? "Guardar" : "Editar Perfil"}
          </button>
        </div>
        <div>
          <div>
            <label>
              Información:
              {editandoInfo ? (
                <textarea
                  value={informacion}
                  onChange={(e) => setInformacion(e.target.value)}
                />
              ) : (
                <p>{informacion}</p>
              )}
            </label>
          </div>
          <div>
            <label>
              Teléfono:
              {editandoInfo ? (
                <input
                  type="text"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                />
              ) : (
                <span>{telefono}</span>
              )}
            </label>
          </div>
          <div>
            <label>
              Idioma:
              {editandoInfo ? (
                <select value={idioma} onChange={cambiarIdioma}>
                  <option value="es">Español</option>
                  <option value="en">Inglés</option>
                  <option value="fr">Francés</option>
                </select>
              ) : (
                <span>{idioma === "es" ? "Español" : idioma === "en" ? "Inglés" : "Francés"}</span>
              )}
            </label>
          </div>
          <button onClick={() => setEditandoInfo(!editandoInfo)}>
            {editandoInfo ? "Guardar" : "Editar Información"
          }</button>
          <div>
            <h3>Juegos Favoritos</h3>
            <div>
              {juegosFavoritos.map((juego) => (
                <a key={juego.id} href={`/videojuegos/${juego.id}`} title={juego.titulo}>
                  <img src={juego.imagen} alt={juego.titulo} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
