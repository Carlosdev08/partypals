"use strict";
import React from 'react'
import Image from 'next/image'


const images = [

    {src: "/Parque_bolas.png", alt: "Parque Infantil", width: 800, height:800 },
    {src: "/salon de fiesta.png", alt: "Parque Infantil", width: 800, height: 1800},
    {src: "/salonEvento.png", alt: "Parque Infantil", width: 800, height: 800},
    {src: "/JuegoDardos.png", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/bolas.jpg", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/Go Party Go - Distrito D.jpg", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/tu-mama-horneo-mejor-pastel.jpg", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/xanadu_bar.jpg" , alt: "Parque Infantil", width: 900, height: 900},
    {src: "/Baaam.jpg", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/Pow-boomImage.jpg", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/camaElastica.jpg", alt: "Parque Infantil", width: 900, height: 900},
    {src: "/playticaImage..png", alt: "Parque Infantil", width: 900, height: 900},
]

const ImageGallery = () => {


  return (
    <>
    <div className='grid grid-cols-1 m:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-6'>
        {images.map((image, index) => (
            <div key={ index} className='w-full h-80  border-2 border-gray-200 overflow-hidden'>
                <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className='w-full h-full object-cover transform transition duration-500 hover:scale-110' />
            </div>

        ))}

    </div>
    </>
  )
}

export default ImageGallery