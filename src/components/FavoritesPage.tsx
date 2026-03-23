import React from 'react';

interface FavoritesPageProps {
  onGoToCatalog: () => void;
}

export default function FavoritesPage({ onGoToCatalog }: FavoritesPageProps) {
  return (
    <div className="bg-white min-h-screen pt-40 pb-20 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Left Sidebar */}
        <div className="w-full lg:w-[320px] flex flex-col gap-4 shrink-0">
          {/* Auth Card */}
          <div className="bg-[#fceef5] rounded-2xl p-6 flex flex-col gap-5">
            <div className="text-[15px] font-medium text-slate-900 leading-snug">
              Авторизуйтесь, чтобы<br/>сохранить ваше избранное
            </div>
            <button className="bg-[#0f172a] hover:bg-slate-800 text-white rounded-xl py-3.5 px-4 text-[14px] font-medium transition-colors w-full">
              Авторизоваться
            </button>
          </div>

          {/* Menu */}
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-100">
            <button className="w-full text-left px-5 py-3.5 rounded-xl bg-slate-50 text-[15px] font-medium text-slate-900">
              Избранное
            </button>
          </div>
        </div>

        {/* Main Content - Empty State */}
        <div className="flex-1 bg-[#f8f7f5] rounded-3xl p-12 flex flex-col items-center justify-center text-center min-h-[500px]">
          
          {/* Sad Heart Icon */}
          <div className="mb-6 text-slate-400">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M8 10c.5.5 1.5.5 2 0" />
              <path d="M14 10c.5.5 1.5.5 2 0" />
              <path d="M10 15c.5-1 1.5-1 2 0" />
            </svg>
          </div>

          <h2 className="text-[22px] font-bold text-slate-900 mb-3">
            В избранном пока пусто
          </h2>
          
          <p className="text-slate-600 text-[15px] mb-8 max-w-[280px] leading-relaxed">
            Выбирайте и сохраняйте стильные украшения от ADAMAS
          </p>

          <button 
            onClick={onGoToCatalog}
            className="bg-[#0f172a] hover:bg-slate-800 text-white rounded-xl py-3.5 px-8 text-[14px] font-medium transition-colors"
          >
            Перейти в каталог
          </button>

        </div>

      </div>
    </div>
  );
}
