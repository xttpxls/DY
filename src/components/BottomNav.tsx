import React from 'react';
import { Home, ShoppingCart, Heart, User } from 'lucide-react';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'favorites' | 'profile') => void;
}

export default function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-4 flex justify-between items-center z-50 pb-safe">
      {/* Home */}
      <button 
        onClick={() => onNavigate('home')}
        className={`flex items-center justify-center transition-colors ${currentPage === 'home' ? 'text-[#a855f7]' : 'text-[#cbd5e1]'}`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.4 2.6a2.5 2.5 0 0 1 3.2 0l7.5 6.2a2.5 2.5 0 0 1 .9 1.9V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9.3a2.5 2.5 0 0 1 .9-1.9l7.5-6.2Z" />
          <path d="M15 22v-6a3 3 0 0 0-6 0v6" fill="white" />
        </svg>
      </button>

      {/* Catalog / Search */}
      <button className="flex items-center justify-center text-[#cbd5e1] transition-colors">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h8" />
          <path d="M4 12h8" />
          <path d="M4 17h10" />
          <circle cx="17" cy="9" r="4" />
          <path d="m20 12 2 2" />
        </svg>
      </button>

      {/* Cart */}
      <button className="flex items-center justify-center text-[#cbd5e1] transition-colors relative">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        {/* Badge */}
        <div className="absolute -top-1.5 -right-2 bg-[#ff5722] text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full border-2 border-white box-content">
          1
        </div>
      </button>

      {/* Favorites */}
      <button 
        onClick={() => onNavigate('favorites')}
        className={`flex items-center justify-center transition-colors ${currentPage === 'favorites' ? 'text-[#a855f7]' : 'text-[#cbd5e1]'}`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      {/* Profile */}
      <button 
        onClick={() => onNavigate('profile')}
        className={`flex items-center justify-center transition-colors ${currentPage === 'profile' ? 'text-[#a855f7]' : 'text-[#cbd5e1]'}`}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      </button>
    </div>
  );
}
