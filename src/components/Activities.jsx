"use client";

import Image from "next/image";
import React, { useState } from "react";
import  Modal from '@/components/ModalImages';
import '../app/globals.css'

const images = [
  {
    src: "/Parque_bolas.png",
    alt: "Parque Infantil",
    width: 800,
    height: 800,
    description:
      "En este vibrante espacio de juegos, los niños se lo pasarán en grande. Podrán deslizarse por el gran tobogán azul y aterrizar en un foso de bolas, crear con las réplicas de crayones de gran tamaño y construir con la torre de bloques de madera tipo Jenga. Cada elemento está diseñado para estimular su imaginación y proporcionar un ambiente interactivo y divertido.",
  },

  {
    src: "/salon de fiesta.png",
    alt: "Parque Infantil",
    width: 800,
    height: 800,
    description:
      "En este espacioso comedor de eventos infantiles, los niños se deleitarán con un festín de colores y juegos. Entre comidas bajo sombrillas rojas y risas compartidas en mesas acogedoras, se escaparán a un área de juegos cercana repleta de aventuras. El ambiente se transforma en un jardín mágico, prometiendo una jornada de diversión y creatividad inigualable para los pequeños asistentes.",
  },
  {
    src: "/salonEvento.png",
    alt: "Parque Infantil",
    width: 600,
    height: 600,
    description:
      "En este alegre y espacioso comedor para fiestas infantiles, los niños se deleitarán con un ambiente lúdico bajo sombrillas rojas y entre decoraciones que simulan un jardín encantado. Los colores vivos y el diseño temático crean una atmósfera festiva ideal para comer, jugar y celebrar. La proximidad de la zona de juegos promete diversión sin límites, mientras las mesas dispuestas garantizan comodidad y espacio para la interacción social y el entretenimiento.",
  },
  {
    src: "/JuegoDardos.png",
    alt: "Parque Infantil",
    width: 900,
    height: 900,
    description:
      "El rincón de juegos se ilumina con una guirnalda de luces, invitando a los niños a participar en actividades como dardos y juegos de mesa gigantes. El suelo imita un césped verde, sumando a la sensación de un parque al aire libre. Mesas con bancos de dados coloridos ofrecen espacio para juegos creativos o un descanso entre actividades. La decoración es alegre y segura, prometiendo horas de diversión y juego en un entorno estimulante y acogedor.",
  },
  {
    src: "/bolas.jpg",
    alt: "Parque Infantil",
    width: 900,
    height: 900,
    description:
      "Area de juego lleno de pelotas de plástico, donde los niños pueden sumergirse en un mar de colores y disfrutar de horas de diversión. Con toboganes que se adentran en la piscina de pelotas y estructuras de juego para escalar, el espacio está diseñado para el juego activo y la estimulación sensorial. Este parque de bolas es un lugar seguro y emocionante para que los niños se deslicen, trepen y jueguen al escondite, fomentando tanto la actividad física como la imaginación.",
  },
  {
    src: "/Go Party Go - Distrito D.jpg",
    alt: "Parque Infantil",
    width: 600,
    height: 600,
    description:
      "La sala de cine para niños, con su iluminación tenue y asientos únicos en forma de conos, ofrece una acogedora experiencia cinematográfica. Las puertas azules y las luces decorativas establecen un ambiente de diversión y magia, mientras en la pantalla se proyectan películas que capturan la imaginación de los pequeños. Es un espacio perfecto para el entretenimiento y la relajación, diseñado para encantar a los jóvenes amantes del cine.",
  },
  {
    src: "/tu-mama-horneo-mejor-pastel.jpg",
    alt: "Parque Infantil",
    width: 900,
    height: 900,
    description:
      "Celebramos el cumpleaños de tu hijo con tartas deliciosas y personalizadas, asegurando sonrisas y alegría en su día especial. Cada pastel es una obra de arte, diseñada para encantar tanto a la vista como al paladar de los pequeños festejados y sus amigos. Con ingredientes de la más alta calidad y decoraciones que capturan la imaginación, prometemos un momento dulce e inolvidable. ¡Prepárate para capturar el momento cuando sople las velas en su tarta soñada!",
  },
  {
    src: "/xanadu_bar.jpg",
    alt: "Parque Infantil",
    width: 900,
    height: 900,

    description:
      "El bar y la cafetería ofrecen un espacio acogedor y relajante para los padres y cuidadores, con una selección de bebidas y aperitivos para disfrutar. La decoración es moderna y elegante, con una paleta de colores cálidos y una iluminación suave. Las mesas y sillas están dispuestas para la comodidad y la conversación, mientras que el mostrador de la cafetería ofrece una variedad de opciones para satisfacer los antojos. Es un lugar ideal para relajarse y recargar energías mientras los niños juegan y se divierten.",
  },

  {
    src: "/Baaam.jpg",
    alt: "Parque Infantil",
    width: 900,
    height: 900,

    description:
      "El área de juegos para niños es un espacio vibrante y colorido, diseñado para fomentar la imaginación y la creatividad. Con toboganes, estructuras de escalada y un foso de bolas, los niños pueden disfrutar de horas de diversión activa y socialización. La decoración es alegre y segura, con una variedad de elementos temáticos que invitan a la exploración y el juego. Es un lugar ideal para que los niños se deslicen, trepen y jueguen al escondite, fomentando tanto la actividad física como la imaginación.",
  },
  {
    src: "/Pow-boomImage.jpg",
    alt: "Parque Infantil",
    width: 900,
    height: 900,
    description:
      " El área de juegos para niños es un espacio vibrante y colorido, diseñado para fomentar la imaginación y la creatividad. Con toboganes, estructuras de escalada y un foso de bolas, los niños pueden disfrutar de horas de diversión activa y socialización. La decoración es alegre y segura, con una variedad de elementos temáticos que invitan a la exploración y el juego. Es un lugar ideal para que los niños se deslicen, trepen y jueguen al escondite, fomentando tanto la actividad física como la imaginación.",
  },
  {
    src: "/camaElastica.jpg",
    alt: "Parque Infantil",
    width: 900,
    height: 900,

    description:
      "La cama elástica es un lugar emocionante y seguro para que los niños disfruten de la actividad física y la diversión. Con su diseño colorido y su estructura resistente, es un lugar ideal para saltar, rebotar y disfrutar de la sensación de volar. La cama elástica es un lugar de juego activo y socialización, diseñado para fomentar la actividad física y la diversión. Es un lugar ideal para que los niños se deslicen, trepen y jueguen al escondite, fomentando tanto la actividad física como la imaginación.",
  },
  {
    src: "/playticaImage..png",
    alt: "Parque Infantil",
    width: 900,
    height: 900,
    description:
      " un amplio salon para fiestas infantiles, los niños se deleitarán con un ambiente lúdico bajo sombrillas rojas y entre decoraciones que simulan un jardín encantado. Los colores vivos y el diseño temático crean una atmósfera festiva ideal para comer, jugar y celebrar. La proximidad de la zona de juegos promete diversión sin límites, mientras las mesas dispuestas garantizan comodidad y espacio para la interacción social y el entretenimiento.",
  },
];

const Activities = () => {
  const [hoverIndex, setHoverIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

const closeModal = () => {
  setIsModalOpen(false)
}

return (
  <div className="mb-40">
    <h1 className="text-center text-6xl font-bold mt-40">¡Nuestro Evento diseñado para tus hijos!</h1>

    <div className='grid grid-cols-1 m:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-8'>
      {images.map((image, index) => (
        <div 
          key={index} 
          className='card relative w-full h-64 transform transition duration-500 hover:scale-110' 
        >
          <div className='card-inner'>
            <div className='card-front'>
              <Image
                src={image.src}
                alt={image.alt}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <div className='card-back bg-orange-900 text-center flex justify-center'>
              <p className="text-xs ">{image.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)
}

export default Activities
