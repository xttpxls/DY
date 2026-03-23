import React from 'react';
import { ChevronRight, MapPin } from 'lucide-react';

interface ProfilePageProps {
  onNavigate: (page: 'home' | 'favorites' | 'profile') => void;
}

export default function ProfilePage({ onNavigate }: ProfilePageProps) {
  return (
    <div className="bg-[#f8f7f5] min-h-screen pt-32 pb-20 px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-6 mt-8">
        
        {/* Top Banner */}
        <div className="bg-[#fceef5] rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[400px] shadow-sm">
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
            {/* Happy Heart Icon */}
            <div className="mb-4 text-pink-400">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                <path d="M8 10c.5.5 1.5.5 2 0" />
                <path d="M14 10c.5.5 1.5.5 2 0" />
                <path d="M9 15c1 1.5 3 1.5 4 0" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Войдите</h1>
            <p className="text-slate-600 text-[15px] mb-8 leading-snug">
              или зарегистрируйтесь<br/>для покупок и списания бонусов ADAMAS
            </p>
            
            <div className="bg-white rounded-2xl p-3 w-full max-w-[320px] text-left shadow-sm cursor-text">
              <div className="text-[11px] text-slate-400 mb-0.5 px-2">Номер телефона</div>
              <div className="text-[15px] text-slate-900 px-2 font-medium">+7</div>
            </div>
          </div>
          
          <div className="w-full md:w-[55%] relative">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1200&auto=format&fit=crop" 
              alt="Model" 
              className="absolute inset-0 w-full h-full object-cover object-top"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {/* Favorites Card */}
            <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                Избранное
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  <path d="M8 10c.5.5 1.5.5 2 0" />
                  <path d="M14 10c.5.5 1.5.5 2 0" />
                  <path d="M9 15c1 1.5 3 1.5 4 0" />
                </svg>
              </h3>
              <p className="text-slate-600 text-[14px] mb-6 leading-relaxed">
                В избранном пока пусто...<br/>Выбирайте и сохраняйте стильные<br/>украшения от ADAMAS
              </p>
              <button 
                onClick={() => onNavigate('home')}
                className="bg-slate-50 hover:bg-slate-100 text-slate-900 rounded-xl py-3 px-6 text-[13px] font-medium transition-colors flex items-center gap-2"
              >
                Выбрать из каталога <ChevronRight size={16} />
              </button>
            </div>

            {/* Stores Button */}
            <button className="bg-white rounded-2xl p-5 flex items-center justify-between shadow-sm hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-3 font-medium text-slate-900 text-[14px]">
                <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-700">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                Фирменные магазины ADAMAS
              </div>
              <ChevronRight size={20} className="text-slate-400" />
            </button>

            {/* Services */}
            <div className="mt-2">
              <h4 className="text-[17px] font-bold text-slate-900 mb-4">Сервисы</h4>
              <div className="flex flex-wrap gap-2">
                {['Трейд-ин', 'Скупка', 'Вакансии', 'Правовая информация', 'Проверка подлинности', 'Гарантийное обслуживание', 'Настройки куки'].map(service => (
                  <button key={service} className="bg-white px-4 py-2.5 rounded-xl text-[13px] font-medium text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                    {service}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="bg-[#e8f0f3] rounded-3xl p-8 flex flex-col shadow-sm relative overflow-hidden">
            <div className="relative z-10 text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Подарочные карты</h3>
              <p className="text-slate-600 text-[14px] leading-relaxed">
                Выберите дизайн и сумму, добавьте тёплые слова —<br/>мы доставим электронную карту получателю<br/>в нужный день и час
              </p>
            </div>
            
            <div className="flex-1 relative min-h-[200px] mb-8">
               {/* Decorative Gift Cards */}
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[85%] h-40 bg-[#4fd1c5] rounded-2xl transform -rotate-6 shadow-lg opacity-80 absolute left-0"></div>
                 <div className="w-[85%] h-40 bg-[#38bdf8] rounded-2xl transform rotate-6 shadow-lg opacity-80 absolute right-0"></div>
                 <div className="w-[90%] h-44 bg-white rounded-2xl absolute shadow-xl flex items-center justify-center overflow-hidden">
                    <div className="absolute top-4 left-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 7L5 21H7.5L9.5 17H14.5L16.5 21H19L12 7Z" fill="#0f172a"/>
                        <circle cx="12" cy="4" r="2" fill="#0f172a"/>
                      </svg>
                    </div>
                    <img src="https://images.unsplash.com/photo-1605100804763-247f66128608?q=80&w=400&auto=format&fit=crop" alt="Ring" className="w-24 h-24 object-cover rounded-full shadow-md" />
                 </div>
               </div>
            </div>

            <div className="flex gap-3 relative z-10 mt-auto">
              <button className="flex-1 bg-white hover:bg-slate-50 text-slate-900 rounded-xl py-3.5 text-[14px] font-medium transition-colors shadow-sm">
                Узнать баланс
              </button>
              <button className="flex-1 bg-[#0f172a] hover:bg-slate-800 text-white rounded-xl py-3.5 text-[14px] font-medium transition-colors shadow-sm">
                Купить карту
              </button>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-6">
            {/* Subscribe Card */}
            <div className="bg-slate-600 rounded-3xl p-8 shadow-sm relative overflow-hidden text-white" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=800&auto=format&fit=crop")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
              <div className="absolute inset-0 bg-slate-800/70 backdrop-blur-[2px]"></div>
              <div className="relative z-10">
                <h3 className="text-[20px] font-bold mb-6 leading-snug text-center">
                  Наши подписчики в курсе новинок<br/>и лимитированных предложений
                </h3>
                
                <div className="flex gap-2 mb-4">
                  <input 
                    type="email" 
                    placeholder="Эл. почта" 
                    className="flex-1 bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-[14px] text-white placeholder:text-white/70 outline-none focus:bg-white/30 transition-colors"
                  />
                  <button className="bg-[#475569] hover:bg-slate-600 text-white rounded-xl px-6 py-3 text-[14px] font-medium transition-colors">
                    Подписаться
                  </button>
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <div className="mt-1 shrink-0 w-4 h-4 rounded bg-white flex items-center justify-center">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="text-[10px] text-white/80 leading-tight">
                    Я соглашаюсь на получение рекламных рассылок.<br/>
                    <span className="opacity-60 mt-1 block">Нажимая «Подписаться» я предоставляю свое согласие на обработку и передачу своих персональных данных в соответствии с положением об обработке и защите персональных данных покупателей.</span>
                  </span>
                </label>
              </div>
            </div>

            {/* App Banner */}
            <div className="bg-gradient-to-br from-[#fef3c7] to-[#e0f2fe] rounded-3xl p-8 shadow-sm flex items-center justify-between relative overflow-hidden">
              {/* Decorative phone mockup background */}
              <div className="absolute right-0 bottom-0 w-40 h-40 opacity-40 mix-blend-multiply">
                <img src="https://images.unsplash.com/photo-1601784551446-20c9e07cd5d3?q=80&w=400&auto=format&fit=crop" alt="Phone" className="w-full h-full object-cover rounded-tl-3xl" />
              </div>
              
              <div className="flex-1 relative z-10">
                <h3 className="text-[20px] font-bold text-slate-900 mb-4 leading-snug">
                  Еще выгоднее<br/>в приложении<br/>ADAMAS
                </h3>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.15 2.95.92 3.78 2.12-3.17 1.89-2.61 5.98.51 7.17-.71 1.53-1.49 3.07-2.94 3.72zm-5.23-14.2c-.28-1.58 1.05-3.14 2.65-3.39.3 1.64-1.24 3.24-2.65 3.39z"/></svg>
                  </div>
                  <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white text-xs">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15l13.69 8.97c.43.28.43.92 0 1.2l-13.69 8.97c-.5.24-.84-.28-.84-.87z"/></svg>
                  </div>
                  <div className="w-8 h-8 bg-[#ff0000] rounded-lg flex items-center justify-center text-white text-xs font-bold">H</div>
                  <div className="w-8 h-8 bg-[#005bff] rounded-lg flex items-center justify-center text-white text-[10px] font-bold">Ru</div>
                </div>
              </div>
              <div className="w-[100px] h-[100px] bg-white rounded-2xl p-2 shadow-sm flex flex-col items-center justify-center text-center relative z-10 shrink-0">
                <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://adamas.ru" alt="QR Code" className="w-full h-full object-contain mb-1" />
                <span className="text-[7px] font-medium text-slate-500 leading-tight mt-1">Наведите камеру,<br/>чтобы скачать</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
