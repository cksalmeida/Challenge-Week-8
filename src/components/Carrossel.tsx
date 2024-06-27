import { useState } from 'react'
import 'tailwindcss/tailwind.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: 'https://via.placeholder.com/300x150/00ff00/000000?text=Rainha+Charlotte' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Dexter' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=House' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Peaky+Blinders' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Breaking+Bad' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' },
    { src: 'https://via.placeholder.com/300x150/00ffff/000000?text=Voce' }
  ];

  const itemsPerPage = 4
  const numPages = Math.ceil(images.length / itemsPerPage)

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % numPages)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + numPages) % numPages)
  }

  return (
    <>
      <h2>Séries Dramáticas</h2>
      <div className="flex justify-end mt-4">
        {Array.from({ length: numPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-cyan-500' : 'bg-gray-600'}`}
          ></div>
        ))}
      </div>
      <div className="relative w-full h-20 overflow-hidden content-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-[25%] px-10">
              <img src={image.src} className="w-full"/>
            </div>
          ))}
        </div>
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 text-black font-black px-2 py-1"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-black font-black px-2 py-1"
        >
          &gt;
        </button>
      </div>
    </>
  )
}

export default Carousel