import React from 'react'
import Image from 'next/image'
import { ImageGallery } from './ImageGallery'
const Activities = () => {
  return (
    <div className="bg-blue-600 text-blue-900">
      <h1 className="text-center text-6xl font-bold mb-20 ">¡Eventos Increíbles para Ti!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {/* Ejemplo de tarjeta de evento */}
        <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
          <Image className="w-full" src="/SuperHeroes.png" alt="Evento de niños"  width={800} height={800}/>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Fiesta de Superhéroes</div>
            <p className="text-base">
              Únete a nuestra aventura de superhéroes y disfruta de juegos, disfraces y más.
            </p>
          </div>
        </div>
        {/* Puedes repetir la tarjeta de eventos según sea necesario */}
      </div>
      {/* Más contenido y secciones según sea necesario */}
    </div>
  );
}

export default Activities