import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import ProductCarousel from './components/ProductCarousel';
import { GiftCardSection, AboutSection } from './components/Banners';
import Footer from './components/Footer';
import FavoritesPage from './components/FavoritesPage';
import ProfilePage from './components/ProfilePage';
import BottomNav from './components/BottomNav';
import { MessageCircle } from 'lucide-react';

const mockProducts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66128608?q=80&w=800&auto=format&fit=crop',
    price: '64 990 ₽',
    label: 'Новинка',
    title: 'Кольцо из белого золота с топазом и бриллиантами',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
    price: '149 990 ₽',
    label: 'Новинка',
    title: 'Кольцо из красного золота с бриллиантами',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1599643478514-4a4e06d554c3?q=80&w=800&auto=format&fit=crop',
    price: '119 997 ₽',
    oldPrice: '399 990 ₽',
    label: 'Распродажа 70%',
    title: 'Кольцо из белого золота с сапфирами и бриллиантами',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
    price: '54 690 ₽',
    label: 'Новинка',
    title: 'Кольцо из красного золота',
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop',
    price: '99 990 ₽',
    label: 'Новинка',
    title: 'Серьги из белого золота с топазами и бриллиантами',
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'favorites' | 'profile'>('home');

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans text-stone-900 relative pb-20 lg:pb-0">
      <Header onNavigate={setCurrentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <div className="w-full pb-2 pt-0">
              <div className="relative lg:rounded-none rounded-[24px] overflow-hidden bg-[#d1a677]">
                <Hero />
                <CategoryNav />
              </div>
            </div>
            <ProductCarousel 
              title="Самые актуальные украшения" 
              products={mockProducts} 
              bgColor="bg-[#e2e8ec]"
              bottomLinkText="Смотреть НОВИНКИ"
            />
            <GiftCardSection />
            <ProductCarousel 
              title="Новинки" 
              products={mockProducts.slice().reverse()} 
              bgColor="bg-white"
            />
            <AboutSection />
          </>
        )}
        
        {currentPage === 'favorites' && (
          <FavoritesPage onGoToCatalog={() => setCurrentPage('home')} />
        )}

        {currentPage === 'profile' && (
          <ProfilePage onNavigate={setCurrentPage} />
        )}
      </main>

      <Footer />
      
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Floating Chat Icon */}
      <button className="fixed bottom-24 lg:bottom-8 right-4 lg:right-8 bg-[#2dd4bf] hover:bg-[#14b8a6] text-white p-3 lg:p-4 rounded-full shadow-lg transition-colors z-50">
        <MessageCircle size={24} className="lg:w-7 lg:h-7" />
      </button>
    </div>
  );
}
