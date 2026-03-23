import React from 'react';
import { MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <div className="px-2 lg:px-4 py-2 pb-24 lg:pb-4">
      <footer className="bg-white rounded-[24px] lg:rounded-[32px] overflow-hidden pt-0 pb-8">
        {/* Newsletter Block */}
      <div className="bg-[#6b7280] py-12 px-4 mb-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-white max-w-xl">
            <h3 className="text-2xl font-serif mb-2">Наши подписчики в курсе новинок и лимитированных предложений</h3>
          </div>
          <div className="flex-1 w-full max-w-md">
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Эл. почта" 
                className="flex-1 bg-white/20 border border-white/30 text-white placeholder:text-white/70 px-4 py-3 rounded-md focus:outline-none focus:border-white transition-colors"
              />
              <button 
                type="submit" 
                className="bg-slate-800 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-900 transition-colors"
              >
                Подписаться
              </button>
            </form>
            <p className="text-white/60 text-[10px] mt-3">
              Нажимая на кнопку «Подписаться», вы соглашаетесь с политикой конфиденциальности.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Columns */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">О нас</h4>
            <ul className="space-y-3 text-[13px] text-slate-600">
              <li><a href="#" className="hover:text-pink-600">Наше производство</a></li>
              <li><a href="#" className="hover:text-pink-600">Вакансии</a></li>
              <li><a href="#" className="hover:text-pink-600">Обратная связь</a></li>
              <li><a href="#" className="hover:text-pink-600">Контакты</a></li>
              <li><a href="#" className="hover:text-pink-600">Пробная палата</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Сервисы</h4>
            <ul className="space-y-3 text-[13px] text-slate-600">
              <li><a href="#" className="hover:text-pink-600">Программа лояльности</a></li>
              <li><a href="#" className="hover:text-pink-600">Электронные подарочные карты</a></li>
              <li><a href="#" className="hover:text-pink-600">Подарочные карты</a></li>
              <li><a href="#" className="hover:text-pink-600">Скупка</a></li>
              <li><a href="#" className="hover:text-pink-600">Обмен украшений на новые</a></li>
              <li><a href="#" className="hover:text-pink-600">Гарантийное обслуживание</a></li>
              <li><a href="#" className="hover:text-pink-600">Проверка подлинности</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Каталог украшений</h4>
            <ul className="space-y-3 text-[13px] text-slate-600">
              <li><a href="#" className="hover:text-pink-600">Именные колье</a></li>
              <li><a href="#" className="hover:text-pink-600">Кольца</a></li>
              <li><a href="#" className="hover:text-pink-600">Серьги</a></li>
              <li><a href="#" className="hover:text-pink-600">Подвески</a></li>
              <li><a href="#" className="hover:text-pink-600">Колье и цепи</a></li>
              <li><a href="#" className="hover:text-pink-600">Браслеты</a></li>
              <li><a href="#" className="hover:text-pink-600">Пирсинг</a></li>
              <li><a href="#" className="hover:text-pink-600">Еще категории</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-sm">Полезное</h4>
            <ul className="space-y-3 text-[13px] text-slate-600">
              <li><a href="#" className="hover:text-pink-600">Адреса магазинов</a></li>
              <li><a href="#" className="hover:text-pink-600">Интернет-магазин</a></li>
              <li><a href="#" className="hover:text-pink-600">Условия доставки</a></li>
              <li><a href="#" className="hover:text-pink-600">Наши реквизиты</a></li>
              <li><a href="#" className="hover:text-pink-600">Правовая информация</a></li>
            </ul>
          </div>
          
          {/* App & Contacts */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 bg-slate-50 p-6 rounded-2xl flex flex-col items-center text-center">
            <h4 className="font-bold text-slate-900 mb-2 text-sm">Наше приложение</h4>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://adamas.ru" alt="QR Code" className="w-24 h-24 mb-4 rounded-lg" />
            <div className="flex gap-2 mb-6">
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs">🍎</div>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs">▶️</div>
              <div className="w-8 h-8 bg-slate-200 rounded-full flex items-center justify-center text-xs">🛍️</div>
            </div>
            <a href="tel:88002503344" className="text-lg font-bold text-slate-900 mb-2 hover:text-pink-600">8 800 250-33-44</a>
            <div className="flex gap-3 text-slate-400">
              <a href="#" className="hover:text-pink-600"><Send size={20} /></a>
              <a href="#" className="hover:text-pink-600"><MessageCircle size={20} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400">
          <p>© 1993–2026 АО «ЮВЕЛИРНАЯ СЕТЬ». Все права защищены</p>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-slate-600">Написать в WhatsApp</a>
            <a href="#" className="hover:text-slate-600">Трейд-ин</a>
            <a href="#" className="hover:text-slate-600">Акции</a>
            <a href="#" className="hover:text-slate-600">Оплата и доставка</a>
            <a href="#" className="hover:text-slate-600">Программа лояльности</a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
