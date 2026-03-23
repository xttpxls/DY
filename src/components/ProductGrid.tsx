import React from 'react';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Diamond Solitaire Ring',
    price: '$1,250',
    image: 'https://images.unsplash.com/photo-1605100804763-247f66128608?q=80&w=800&auto=format&fit=crop',
    tag: 'Bestseller'
  },
  {
    id: 2,
    name: 'Pearl Drop Earrings',
    price: '$450',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Gold Chain Necklace',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1599643478524-fb5244098775?q=80&w=800&auto=format&fit=crop',
    tag: 'New'
  },
  {
    id: 4,
    name: 'Sapphire Tennis Bracelet',
    price: '$2,100',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Rose Gold Hoop Earrings',
    price: '$320',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Emerald Cut Engagement Ring',
    price: '$3,400',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Vintage Pendant Necklace',
    price: '$650',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Diamond Pave Bangle',
    price: '$1,800',
    image: 'https://images.unsplash.com/photo-1573408301145-b98c46544405?q=80&w=800&auto=format&fit=crop',
  }
];

export default function ProductGrid() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-serif text-stone-900 mb-2">Trending Now</h2>
            <p className="text-stone-500">Our most loved pieces this season</p>
          </div>
          <a href="#all" className="hidden sm:inline-block text-sm font-medium text-teal-600 hover:text-teal-700 uppercase tracking-wider border-b border-teal-200 hover:border-teal-600 pb-1 transition-colors">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-[4/5] bg-white overflow-hidden mb-4">
                {product.tag && (
                  <span className="absolute top-3 left-3 z-10 bg-white/90 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-900">
                    {product.tag}
                  </span>
                )}
                <button className="absolute top-3 right-3 z-10 p-2 text-stone-400 hover:text-red-500 transition-colors bg-white/50 rounded-full opacity-0 group-hover:opacity-100">
                  <Heart size={18} />
                </button>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button className="w-full bg-stone-900 text-white py-3 text-sm font-medium uppercase tracking-wider hover:bg-teal-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-stone-900 mb-1">{product.name}</h3>
                <p className="text-sm text-stone-500">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center sm:hidden">
          <a href="#all" className="inline-block px-8 py-3 border border-stone-300 text-sm font-medium text-stone-900 uppercase tracking-wider">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
