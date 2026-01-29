import Image from 'next/image';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1647427062468-74ff21e8934f?q=80&w=3090&auto=format&fit=crop';

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center pt-32 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl w-full mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-20">
        <div className="flex flex-col h-full justify-center py-12">
          <div className="space-y-10">
            <h2 className="text-ochre uppercase tracking-[0.3em] text-sm font-semibold">Od roku 2011</h2>
            <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1]">
              Tekuté zlato <br />
              <span className="text-ochre">z podhoria Tribeča</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed font-light">
              Ručne zbieraný med z čistého prostredia tribečskych vrchov. Tradícia, ktorá chutí po slnku a
              divokej prírode.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-2xl overflow-hidden aspect-[4/5] depth-shadow">
            <Image
              src={HERO_IMAGE}
              alt="Detail včelích plástov a včiel"
              width={1236}
              height={1545}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-16 -left-12 z-20 bg-white p-8 rounded-lg shadow-2xl hidden lg:block max-w-[340px]">
            <p className="text-lg font-serif text-ochre leading-relaxed">
              &quot;Každý pohár v sebe ukrýva tisíce kvetov z našich hôr.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
