import { Sun, MapPin, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: '100% Prírodný',
    description:
      'Med spracovávame šetrne a za studena, aby sme v nom uchovali všetky vzácne enzýmy, vitamíny a minerály.',
    icon: Sun,
  },
  {
    title: 'Lokálny produkt',
    description: 'Pochádza priamo z nášho kraja. Kúpou podporujete lokálnu biodiverzitu.',
    icon: MapPin,
  },
  {
    title: 'Bez prísad',
    description: 'Náš med neobsahuje žiadne konzervanty, farbivá ani umelé arómy.',
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-cream" aria-labelledby="features-heading">
      <div className="max-w-5xl mx-auto px-6">
        <h2 id="features-heading" className="sr-only">
          Naše prednosti
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-14">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article key={index} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-full bg-[#F9F6ED] flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110">
                  <Icon size={20} className="text-ochre stroke-[1.5px]" aria-hidden />
                </div>
                <h3 className="text-xl font-serif mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-[200px] text-sm">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
