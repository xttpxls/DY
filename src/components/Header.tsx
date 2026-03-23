import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, User, Navigation, Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'favorites' | 'profile') => void;
}

export default function Header({ onNavigate }: HeaderProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isCityModalOpen, setIsCityModalOpen] = useState(false);

  const popularCities = [
    'Москва', 'Санкт-Петербург', 'Краснодар', 'Самара', 
    'Екатеринбург', 'Ростов-на-Дону', 'Волгоград', 
    'Новосибирск', 'Воронеж', 'Саратов', 'Кемерово', 
    'Челябинск', 'Иркутск', 'Ставрополь', 'Тюмень', 'Уфа'
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white lg:bg-transparent pt-4 lg:pt-6 pb-4 lg:pb-0 px-4 lg:px-8 w-full flex flex-col items-center gap-3 shadow-sm lg:shadow-none rounded-b-[24px] lg:rounded-none">
        {/* Mobile Header (Matches Screenshot) */}
        <div className="flex lg:hidden flex-col w-full gap-3">
          <div className="flex items-center justify-between w-full">
            <button 
              onClick={() => setIsCityModalOpen(true)}
              className="flex items-center gap-1.5 text-slate-900"
            >
              <Navigation size={18} className="fill-current" strokeWidth={1.5} />
              <span className="text-[14px] font-medium">Чита</span>
            </button>
            
            <div className="flex items-center gap-4 text-slate-900">
              <button onClick={() => onNavigate?.('favorites')} className="hover:text-pink-600 transition-colors">
                <Heart size={22} strokeWidth={1.5} />
              </button>
              <button className="hover:text-pink-600 transition-colors relative">
                <ShoppingBag size={22} strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">1</span>
              </button>
              <button onClick={() => onNavigate?.('profile')} className="hover:text-pink-600 transition-colors">
                <User size={22} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-[#f0f0f0] rounded-xl px-4 h-11 w-full text-slate-500">
            <Search size={18} className="mr-3 shrink-0 text-slate-400" />
            <input 
              type="text" 
              placeholder="Найти украшение" 
              className="bg-transparent border-none outline-none w-full text-[14px] placeholder:text-slate-400 text-slate-900"
            />
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-center gap-3 w-full max-w-[1600px]">
          
          {/* Logo */}
          <button 
            onClick={() => onNavigate?.('home')}
            className="flex items-center justify-center w-12 h-12 bg-white/95 backdrop-blur-md rounded-full hover:bg-white transition-colors shrink-0 shadow-sm"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 7L5 21H7.5L9.5 17H14.5L16.5 21H19L12 7Z" fill="#0f172a"/>
              <circle cx="12" cy="4" r="2" fill="#0f172a"/>
            </svg>
          </button>

          {/* Main Nav (Desktop Only) */}
          <nav className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 h-12 gap-6 text-[12px] font-semibold text-slate-900 shrink-0 shadow-sm">
            <div 
              className="h-full flex items-center relative"
              onMouseEnter={() => setIsCatalogOpen(true)}
              onMouseLeave={() => setIsCatalogOpen(false)}
            >
              <button className="flex items-center gap-2 hover:text-pink-600 transition-colors h-full uppercase tracking-wide">
                <Menu size={16} strokeWidth={2.5} />
                Каталог
              </button>

              {/* Mega Menu Dropdown */}
              <div className={`absolute top-full left-0 pt-4 transition-all duration-300 origin-top w-[800px] ${isCatalogOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 flex gap-8 shadow-2xl border border-white/40">
                  {/* Left: Filters */}
                  <div className="flex-1 flex flex-col gap-6">
                    {/* Категория */}
                    <div>
                      <div className="text-[13px] text-slate-500 mb-3">Категория</div>
                      <div className="flex flex-wrap gap-2">
                        {['Все украшения', 'Новинки', 'Кольца', 'Серьги', 'Подвески', 'Цепи', 'Колье', 'Браслеты', 'Броши', 'Пирсинг'].map(item => (
                          <button key={item} className="bg-slate-50 px-4 py-2 rounded-full text-[13px] font-medium text-slate-900 hover:bg-slate-100 transition-colors shadow-sm border border-slate-100">
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="hover:text-pink-600 transition-colors uppercase tracking-wide">Именные колье</button>
            <button className="hover:text-pink-600 transition-colors uppercase tracking-wide">Коллекции</button>
            <button className="hover:text-pink-600 transition-colors uppercase tracking-wide">Распродажа -70%</button>
          </nav>

          {/* Search */}
          <div className="flex items-center bg-white/95 backdrop-blur-md rounded-full px-5 h-12 flex-1 min-w-[200px] max-w-[500px] text-slate-500 shadow-sm">
            <Search size={16} className="mr-3 shrink-0 text-slate-400" />
            <input 
              type="text" 
              placeholder="Найти ваше новое украшение" 
              className="bg-transparent border-none outline-none w-full text-[13px] placeholder:text-slate-400 text-slate-900"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center bg-white/95 backdrop-blur-md rounded-full px-6 h-12 gap-5 text-slate-900 shrink-0 shadow-sm">
            <button 
              onClick={() => setIsCityModalOpen(true)}
              className="hidden xl:flex items-center gap-2 text-[12px] font-semibold hover:text-pink-600 transition-colors mr-2"
            >
              <Navigation size={14} className="fill-slate-900" />
              Чита
            </button>
            <button onClick={() => onNavigate?.('favorites')} className="hover:text-pink-600 transition-colors">
              <Heart size={18} strokeWidth={2} />
            </button>
            <button className="hover:text-pink-600 transition-colors">
              <ShoppingBag size={18} strokeWidth={2} />
            </button>
            <button onClick={() => onNavigate?.('profile')} className="hover:text-pink-600 transition-colors">
              <User size={18} strokeWidth={2} />
            </button>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="hidden lg:flex items-center justify-center w-full max-w-[1600px]">
           <nav className="flex items-center bg-white/90 backdrop-blur-md rounded-full px-6 h-9 gap-6 text-[11px] font-medium text-slate-900 shadow-sm">
            <button className="hover:text-pink-600 transition-colors">Магазины</button>
            <button className="hover:text-pink-600 transition-colors">Вакансии</button>
            <button className="hover:text-pink-600 transition-colors">Подарочные карты</button>
            <button className="hover:text-pink-600 transition-colors">Трейд-ин</button>
            <a href="tel:88002503344" className="flex items-center gap-2 hover:text-pink-600 transition-colors font-bold ml-2">
              <Phone size={12} className="fill-slate-900" />
              8 800 250-33-44
            </a>
          </nav>
        </div>
      </header>

      {/* City Selection Modal */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isCityModalOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsCityModalOpen(false)} />
        
        {/* Side Panel */}
        <div className={`absolute top-0 right-0 h-full w-full max-w-[480px] bg-[#f5e6ed]/95 backdrop-blur-2xl shadow-2xl p-10 flex flex-col transition-transform duration-500 ease-out ${isCityModalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          <button 
            onClick={() => setIsCityModalOpen(false)}
            className="absolute top-8 right-8 w-11 h-11 bg-white rounded-full flex items-center justify-center text-slate-900 hover:bg-slate-50 transition-colors shadow-sm"
          >
            <X size={22} strokeWidth={1.5} />
          </button>

          <div className="mt-2 mb-10 text-center">
            <div className="text-[13px] text-slate-600 mb-1">выбран сейчас</div>
            <div className="text-2xl font-bold text-slate-900">Чита</div>
          </div>

          <div className="bg-white rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm mb-8">
            <Search size={20} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Найти город" 
              className="bg-transparent border-none outline-none w-full text-[15px] placeholder:text-slate-400 text-slate-900"
            />
          </div>

          <div className="flex flex-wrap gap-2.5 mb-8">
            {popularCities.map(city => (
              <button 
                key={city}
                className="bg-white px-5 py-2.5 rounded-xl text-[13px] font-medium text-slate-700 hover:bg-slate-50 hover:text-pink-600 transition-colors shadow-sm"
              >
                {city}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-[14px] font-bold text-slate-900 mb-1">Не нашли город в списке?</div>
            <div className="text-[14px] text-slate-800">Найдите населенный пункт через поиск</div>
          </div>

        </div>
      </div>
    </>
  );
}
