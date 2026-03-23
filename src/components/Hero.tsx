import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    desktopBg: 'https://images.unsplash.com/photo-1599643478514-4a820cbf311e?q=80&w=2070&auto=format&fit=crop', // Golden/warm vibe
    mobileBg: 'https://images.unsplash.com/photo-1599643478514-4a820cbf311e?q=80&w=1000&auto=format&fit=crop',
    title: 'СОГРЕВАЕМ ЛЮБОВЬЮ',
    subtitle: '–10% НА ВСЁ ПО КОДУ',
    code: 'СОЛНЦЕ'
  },
  {
    id: 2,
    desktopBg: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop',
    mobileBg: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop',
    title: 'ВЕСЕННЕЕ НАСТРОЕНИЕ',
    subtitle: 'СКИДКИ ДО 30% ПО КОДУ',
    code: 'ВЕСНА'
  },
  {
    id: 3,
    desktopBg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=2070&auto=format&fit=crop',
    mobileBg: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
    title: 'ИДЕАЛЬНЫЙ ПОДАРОК',
    subtitle: 'СКИДКИ ДО 50% ПО КОДУ',
    code: 'ПОДАРОК'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Меняем слайд каждые 4 секунды
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative bg-[#d1a677] lg:h-screen h-screen min-h-[600px] lg:min-h-[800px] flex flex-col justify-center">
      
      {/* Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
          }`}
        >
          {/* Desktop */}
          <div
            className="hidden lg:block absolute inset-0"
            style={{
              backgroundImage: `url("${slide.desktopBg}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          />
          {/* Mobile */}
          <div
            className="lg:hidden absolute inset-0"
            style={{
              backgroundImage: `url("${slide.mobileBg}")`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      ))}

      {/* Desktop Navigation Arrows */}
      <div className="hidden lg:flex absolute inset-0 z-20 px-8 md:px-16 max-w-[1600px] mx-auto w-full items-center justify-between pointer-events-none">
        <button onClick={prevSlide} className="text-slate-900 hover:text-white transition-colors absolute left-4 md:left-8 pointer-events-auto">
          <ChevronLeft size={32} strokeWidth={1.5} />
        </button>
        <button onClick={nextSlide} className="text-slate-900 hover:text-white transition-colors absolute right-4 md:right-8 pointer-events-auto">
          <ChevronRight size={32} strokeWidth={1.5} />
        </button>
      </div>

      {/* Content */}
      {slides.map((slide, index) => (
        <div
          key={`content-${slide.id}`}
          className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
          }`}
        >
          {/* Desktop Text */}
          <div className="hidden lg:block pl-20 md:pl-36 max-w-[1600px] mx-auto w-full pt-16">
            <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold text-white mb-6 leading-[1.1] tracking-tight uppercase drop-shadow-sm">
              {slide.title}
            </h1>
            
            <div className="flex items-center gap-4 mb-12">
              <span className="text-3xl md:text-4xl lg:text-[2.5rem] text-white font-normal uppercase drop-shadow-sm">
                {slide.subtitle}
              </span>
              <div className="bg-[#d91e76] text-white px-6 py-2 flex items-center shadow-md -rotate-2">
                <span className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold uppercase tracking-wider">{slide.code}</span>
              </div>
            </div>

            <button className="px-16 py-4 bg-[#00283a] hover:bg-[#001a26] text-white font-medium rounded-2xl transition-colors text-lg w-fit pointer-events-auto shadow-md">
              Купить
            </button>
          </div>

          {/* Mobile Text */}
          <div className="lg:hidden relative px-4 flex flex-col items-center text-center mt-12 w-full">
            <h1 className="text-[38px] font-extrabold text-white mb-4 leading-[1.1] tracking-wide uppercase drop-shadow-md whitespace-pre-line">
              {slide.title}
            </h1>
            
            <div className="flex items-center justify-center gap-2 text-[18px] text-white font-medium w-full drop-shadow-sm mb-8">
              <span>{slide.subtitle}</span>
              <span className="bg-[#d91e76] px-3 py-1 rounded-sm text-white font-bold uppercase tracking-wider shadow-sm">{slide.code}</span>
            </div>
            
            <button className="px-12 py-3.5 bg-[#00283a] hover:bg-[#001a26] text-white font-medium rounded-xl transition-colors text-base w-fit pointer-events-auto shadow-md">
              Купить
            </button>
          </div>
        </div>
      ))}

      {/* Pagination dots */}
      <div className="absolute bottom-32 lg:bottom-40 left-1/2 -translate-x-1/2 flex items-center gap-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-500 ease-in-out ${
              currentSlide === index ? 'w-8 bg-white' : 'w-4 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
