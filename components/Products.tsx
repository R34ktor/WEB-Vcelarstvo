import Image from 'next/image';

const products = [
  {
    title: 'Kvetový Med',
    price: '8.50 €',
    badge: 'JEMNÝ',
    description:
      'Svetlý, jemný a voňavý. Obsahuje peľ z lúčnych kvetov a ovocných stromov.',
    image:
      'https://images.unsplash.com/photo-1679941051961-601daabbc508?q=80&w=2942&auto=format&fit=crop',
  },
  {
    title: 'Lesný Med',
    price: '10.50 €',
    badge: 'VÝRAZNÝ',
    description: 'Tmavý a plný minerálov. Má výraznejšiu chuť a pomalšie kryštalizuje.',
    image:
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=3000&auto=format&fit=crop',
  },
  {
    title: 'Agátový Med',
    price: '9.00 €',
    badge: 'LIMITOVANÝ',
    description:
      'Najjemnejší druh medu s typickou vôňou agátových kvetov. Ostáva dlho tekutý.',
    image: 'https://images.unsplash.com/photo-1587049352851-8d4e89133924?q=80&w=2667&auto=crop',
  },
];

export default function Products() {
  return (
    <section className="py-12 md:py-16 bg-cream" aria-labelledby="products-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-ochre uppercase tracking-[0.3em] text-xs font-semibold mb-3">
            Naša ponuka
          </h2>
          <h3 id="products-heading" className="text-3xl md:text-4xl font-serif tracking-tight">
            Pravý domáci med
          </h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {products.map((product, index) => (
            <article key={index} className="group cursor-default flex flex-col">
              <div className="relative mb-6 rounded-2xl overflow-hidden aspect-[4/5] depth-shadow">
                <div className="absolute top-4 left-4 z-20 bg-white/95 px-2.5 py-1 rounded-sm shadow-sm backdrop-blur-sm">
                  <span className="text-[9px] tracking-[0.2em] font-bold text-gray-800 uppercase">
                    {product.badge}
                  </span>
                </div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={980}
                  height={1225}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex justify-between items-baseline mb-3">
                <h4 className="text-xl font-serif">{product.title}</h4>
                <span className="text-lg font-medium text-ochre tracking-tight whitespace-nowrap">
                  {product.price}
                </span>
              </div>
              <p className="text-gray-500 font-light leading-relaxed tracking-wide text-sm max-w-none">
                {product.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
