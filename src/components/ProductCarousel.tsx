import React from 'react';
import { Heart, ChevronLeft, ChevronRight, ShoppingBag, ChevronRight as ChevronRightSmall } from 'lucide-react';

interface Product {
  id: string;
  image: string;
  price: string;
  oldPrice?: string;
  title: string;
  discount?: string;
  label?: string;
}

interface Props {
  title: string;
  subtitle?: string;
  buttonText?: string;
  bottomLinkText?: string;
  products: Product[];
  bgImage?: string;
  bgColor?: string;
  darkText?: boolean;
}

export default function ProductCarousel({ title, subtitle, buttonText, bottomLinkText, products, bgImage, bgColor = 'bg-transparent', darkText = true }: Props) {
  return (
    <div className="px-2 lg:px-4 py-2">
      <section className={`relative py-16 ${bgColor} rounded-[24px] lg:rounded-[32px] overflow-hidden`}>
        {bgImage && (
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[24px] lg:rounded-[32px]">
            <img src={bgImage} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
          </div>
        )}
      
      <div className="relative z-10 max-w-[1400px] mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className={`text-3xl md:text-[32px] font-sans font-medium mb-4 ${darkText ? 'text-[#0f172a]' : 'text-white'}`}>{title}</h2>
          {subtitle && <p className={`text-lg ${darkText ? 'text-slate-700' : 'text-white/90'} mb-6`}>{subtitle}</p>}
          {buttonText && (
            <button className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${darkText ? 'bg-white/50 hover:bg-white text-slate-900 border border-slate-300/50' : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30'}`}>
              {buttonText}
            </button>
          )}
        </div>

        <div className="relative group flex items-center justify-center">
          <button className="hidden md:flex absolute left-0 lg:-left-12 z-20 w-10 h-10 bg-white/50 hover:bg-white rounded-full items-center justify-center shadow-sm transition-colors">
            <ChevronLeft size={20} className="text-slate-600" strokeWidth={1.5} />
          </button>
          
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4 w-full -mx-4 px-4 lg:mx-0 lg:px-0">
            {products.map(product => (
              <div key={product.id} className="snap-start shrink-0 w-[220px] bg-white rounded-lg p-4 relative group/card shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col">
                <button className="absolute top-3 right-3 z-10 text-slate-300 hover:text-pink-500 transition-colors">
                  <Heart size={20} strokeWidth={1.5} />
                </button>
                
                <div className="aspect-square mb-4 overflow-hidden rounded-md flex items-center justify-center">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500" />
                </div>
                
                <div className="flex flex-col flex-grow justify-end">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-0.5">
                        {product.oldPrice && <span className="text-[10px] text-slate-400 line-through">{product.oldPrice}</span>}
                        {(product.label || product.discount) && (
                          <span className="text-[10px] text-slate-500">
                            {product.label || product.discount}
                          </span>
                        )}
                      </div>
                      <span className="text-sm font-bold text-slate-900">{product.price}</span>
                    </div>
                    <button className="text-slate-400 hover:text-slate-900 transition-colors mb-0.5">
                      <ShoppingBag size={18} strokeWidth={1.5} />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight line-clamp-2">{product.title}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden md:flex absolute right-0 lg:-right-12 z-20 w-10 h-10 bg-white/50 hover:bg-white rounded-full items-center justify-center shadow-sm transition-colors">
            <ChevronRight size={20} className="text-slate-600" strokeWidth={1.5} />
          </button>
        </div>

        {bottomLinkText && (
          <div className="mt-10 text-center">
            <button className="inline-flex items-center gap-1 text-sm text-slate-800 hover:text-black transition-colors">
              Смотреть <span className="font-bold uppercase">{bottomLinkText.replace('Смотреть ', '')}</span>
              <ChevronRightSmall size={16} className="text-slate-500" />
            </button>
          </div>
        )}
      </div>
    </section>
    </div>
  );
}
