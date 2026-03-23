import React from 'react';

export function GiftCardSection() {
  return (
    <div className="px-2 lg:px-4 py-2">
      <section className="bg-slate-50 rounded-[24px] lg:rounded-[32px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm max-w-[1400px] mx-auto">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">Подарочные<br/>карты</h2>
          <p className="text-slate-600 text-lg mb-10">
            Выберите дизайн и сумму, добавьте тёплые слова —<br/>мы доставим электронную карту получателю<br/>в нужный день и час
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-slate-900 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">Купить карту</button>
            <button className="bg-white border border-slate-200 text-slate-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors">Узнать баланс</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <img src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?q=80&w=800&auto=format&fit=crop" alt="Gift Card" className="w-full rounded-2xl shadow-lg transform rotate-2" />
        </div>
      </section>
    </div>
  );
}

export function AboutSection() {
  return (
    <div className="px-2 lg:px-4 py-2">
      <section className="py-20 bg-[#b5b5b5] relative overflow-hidden rounded-[24px] lg:rounded-[32px]">
        <div className="absolute inset-0 opacity-30 mix-blend-overlay">
           <img src="https://images.unsplash.com/photo-1605100804763-247f66128608?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">ADAMAS</h2>
          <p className="text-white/90 mb-16 max-w-2xl mx-auto">Один из крупнейших российских производителей ювелирных украшений с богатой историей и наследием</p>
          
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            <div className="flex flex-col items-center text-white">
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-4 text-3xl bg-white/5 backdrop-blur-sm">🏭</div>
              <span className="text-sm text-center">Собственное<br/>производство</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="w-28 h-28 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex flex-col items-center justify-center mb-4">
                <span className="text-4xl font-serif">32</span>
                <span className="text-sm">года</span>
              </div>
              <span className="text-sm text-center">Богатая история<br/>бренда</span>
            </div>
            <div className="flex flex-col items-center text-white">
              <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center mb-4 text-3xl bg-white/5 backdrop-blur-sm">💎</div>
              <span className="text-sm text-center">Бриллианты</span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              Фирменные магазины &gt;
            </button>
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors flex items-center gap-2">
              Ювелирный Завод &gt;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
