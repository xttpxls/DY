import React from 'react';

const categories = [
  {
    name: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66128608?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478524-fb5244098775?q=80&w=1000&auto=format&fit=crop',
  },
  {
    name: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Shop by Category</h2>
          <div className="w-16 h-0.5 bg-teal-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a key={category.name} href={`#${category.name.toLowerCase()}`} className="group relative block h-80 overflow-hidden bg-stone-100">
              <img 
                src={category.image} 
                alt={category.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                <h3 className="text-xl font-serif text-white tracking-wide">{category.name}</h3>
                <span className="inline-block mt-2 text-xs font-medium text-white/80 uppercase tracking-widest border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Discover
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
