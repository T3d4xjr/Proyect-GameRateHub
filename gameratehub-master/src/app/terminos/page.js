"use client";
import React, { useState } from "react";

export default function TerminosCondiciones() {
  const terminosPreguntasFrecuentes = [
    {
      pregunta: "1. Aceptación de los Términos",
      respuesta:
        "Al registrarte y utilizar GameRate HUB, aceptas estos Términos y Condiciones y nuestra Política de Privacidad. Nos reservamos el derecho de modificar estos términos en cualquier momento. Te notificaremos sobre cambios significativos y tu uso continuado del sitio después de dichos cambios constituirá tu aceptación.",
    },
    {
      pregunta: "2. Registro de Usuario",
      respuesta:
        "Para acceder a ciertas funciones de GameRate HUB, deberás crear una cuenta y proporcionar información precisa y completa. Eres responsable de mantener la confidencialidad de tu contraseña y de la seguridad de tu cuenta. Debes notificar inmediatamente a GameRate HUB sobre cualquier uso no autorizado de tu cuenta o cualquier otra violación de seguridad.",
    },
    {
      pregunta: "3. Uso del Sitio",
      respuesta:
        "Licencia de uso: Te otorgamos una licencia limitada, no exclusiva e intransferible para acceder y usar GameRate HUB para fines personales y no comerciales. \n\n Conducta del usuario: Al utilizar nuestro sitio, no debes: \n- Publicar contenido que sea ilegal, difamatorio, ofensivo o que infrinja los derechos de terceros. \n- Utilizar el sitio para enviar spam, publicidad no solicitada o mensajes comerciales. \n- Interferir con el funcionamiento del sitio o intentar acceder de manera no autorizada a sistemas, redes o cuentas de otros usuarios.",
    },
    {
      pregunta: "4. Contenido del Usuario",
      respuesta:
        "Al publicar contenido en GameRate HUB, otorgas a nosotros una licencia mundial, no exclusiva y libre de regalías para utilizar, reproducir, modificar y mostrar dicho contenido en el sitio. Eres responsable del contenido que publicas y garantizas que posees todos los derechos necesarios sobre dicho contenido y que no infringe derechos de terceros.",
    },
    {
      pregunta: "5. Propiedad Intelectual",
      respuesta:
        "Todos los contenidos del sitio, incluyendo textos, gráficos, logotipos, imágenes y software, son propiedad de GameRate HUB o de sus licenciantes y están protegidos por leyes de propiedad intelectual. No se permite la reproducción, distribución o modificación de dicho contenido sin nuestro consentimiento previo por escrito.",
    },
    {
      pregunta: "6. Limitación de Responsabilidad",
      respuesta:
        "GameRate HUB no será responsable de ningún daño indirecto, incidental, especial o consecuente que resulte del uso o la incapacidad de uso del sitio, incluso si hemos sido advertidos de la posibilidad de tales daños. No garantizamos la exactitud o integridad del contenido disponible en el sitio y no asumimos ninguna responsabilidad por errores u omisiones.",
    },
    {
      pregunta: "7. Enlaces a Terceros",
      respuesta:
        "Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido ni de las prácticas de privacidad de esos sitios. Te recomendamos que leas los términos y políticas de privacidad de cada sitio que visites.",
    },
    {
      pregunta: "8. Indemnización",
      respuesta:
        "Aceptas indemnizar y mantener indemne a GameRate HUB, sus directores, empleados y agentes de cualquier reclamación, pérdida, responsabilidad, daño, costo o gasto, incluyendo honorarios legales, que surjan de tu uso del sitio o de tu violación de estos Términos y Condiciones.",
    },
    {
      pregunta: "9. Ley Aplicable",
      respuesta:
        "Estos Términos y Condiciones se rigen por las leyes de [tu país o estado]. Cualquier disputa que surja en relación con estos términos será resuelta en los tribunales competentes de [tu jurisdicción].",
    },
    {
      pregunta: "10. Modificaciones de los Términos",
      respuesta:
        "GameRate HUB se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Te notificaremos sobre cambios significativos. Al continuar utilizando el sitio después de cualquier modificación, aceptas los nuevos Términos y Condiciones.",
    },
  ];

  const [isOpen, setIsOpen] = useState({});

  function toggleAnswer(index) {
    setIsOpen((prev) => ({
      ...prev,
      [index]: !prev[index], // Alterna el estado de visibilidad de la respuesta
    }));
  }

  return (
    <div>
      <h2>Términos y Condiciones de GameRate HUB</h2>
      <div className="faq-container">
        {terminosPreguntasFrecuentes.map((item, index) => (
          <div key={index}>
            <div className="question" onClick={() => toggleAnswer(index)}>
              <button>{isOpen[index] ? "-" : "+"}</button>
              <span>{item.pregunta}</span>
            </div>
            {isOpen[index] && (
              <div className="answer">
                <p>{item.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

