import React from 'react';
import { User } from 'lucide-react';

export default function CategoryNav() {
  const categoriesRow1 = ['Кольца', 'Свадьба и помолвка', 'Серьги', 'Именные колье', 'Браслеты', 'Цепи'];
  const categoriesRow2 = ['Броши', 'Подвески', 'Колье', 'Детям'];
  const allCategories = [...categoriesRow1, ...categoriesRow2];
  
  return (
    <div className="relative lg:absolute lg:bottom-8 lg:left-0 lg:right-0 z-20 max-w-[1600px] mx-auto lg:px-8 px-0 lg:-mt-0 -mt-6">
      <div className="lg:bg-white/30 bg-white lg:backdrop-blur-xl lg:rounded-[2rem] rounded-t-[24px] lg:p-6 p-4 pt-6 pb-6 flex flex-col lg:flex-row gap-6 lg:shadow-lg lg:border border-white/40">
        
        {/* Left: Category Pills */}
        <div className="flex-1 flex flex-col gap-3 justify-center">
          {/* Desktop Rows */}
          <div className="hidden lg:flex flex-wrap gap-3">
            {categoriesRow1.map(cat => (
              <a key={cat} href="#" className="bg-white/90 hover:bg-white text-slate-900 px-6 py-3 rounded-full text-[14px] font-medium transition-colors shadow-sm">
                {cat}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex flex-wrap gap-3">
            {categoriesRow2.map(cat => (
              <a key={cat} href="#" className="bg-white/90 hover:bg-white text-slate-900 px-6 py-3 rounded-full text-[14px] font-medium transition-colors shadow-sm">
                {cat}
              </a>
            ))}
          </div>

          {/* Mobile Wrap */}
          <div className="flex lg:hidden flex-wrap gap-2 justify-center">
            {allCategories.map(cat => (
              <a key={cat} href="#" className="bg-[#f0f0f0] text-slate-900 px-4 py-2.5 rounded-full text-[14px] font-medium transition-colors">
                {cat}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Action Cards */}
        <div className="flex flex-col gap-3 lg:shrink-0 lg:w-[380px] w-full mt-2 lg:mt-0">
          
          {/* Auth Card */}
          <div className="bg-[#ffeef0] lg:bg-[#fdf6f0]/90 lg:backdrop-blur-md rounded-2xl p-4 flex justify-between items-center shadow-sm hover:bg-white cursor-pointer transition-colors lg:border border-white/50">
            <div>
              <div className="text-[16px] lg:text-[14px] font-bold leading-tight text-slate-900">
                Авторизуйтесь
              </div>
              <div className="text-slate-600 font-normal text-[12px] lg:text-[11px] mt-0.5 leading-snug">
                для покупок и списания бонусов
              </div>
            </div>
            <div className="bg-white rounded-xl lg:rounded-full p-3 lg:p-2 shadow-sm shrink-0">
              <User size={20} className="text-slate-900" />
            </div>
          </div>

          {/* Promos - Desktop Only */}
          <div className="hidden lg:flex gap-3 h-full">
             <div className="bg-[#e8ece9]/90 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between flex-1 shadow-sm text-[12px] font-bold leading-tight hover:bg-white cursor-pointer transition-colors border border-white/50 text-slate-900">
                Именная<br/>гравировка<br/>на колье &gt;
             </div>
             <div className="bg-[#e6e2d6]/90 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between flex-1 shadow-sm text-[12px] font-bold leading-tight hover:bg-white cursor-pointer transition-colors border border-white/50 text-slate-900">
                Электронные<br/>подарочные<br/>карты &gt;
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}
