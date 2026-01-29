const facts = [
  {
    title: 'Jedna včela, jeden pol gramu',
    text: 'Za celý život navštívi včela približne 7 000 kvetov a vyprodukuje len asi pol gramu medu.',
  },
  {
    title: 'Kráľovná dožíva 5 rokov',
    text: 'Včelia kráľovná môže žiť až 5 rokov a kladie až 2 000 vajíčok za deň počas sezóny.',
  },
  {
    title: 'Včely sa dorozumievajú tancom',
    text: 'Včely používajú „včací tanec“ – krúžia a vrtia zadečkom, aby ostatným ukázali smer a vzdialenosť k zdroju nektáru.',
  },
  {
    title: 'Med sa nikdy nekazí',
    text: 'V archeológii sa našiel tisíce rokov starý med stále vhodný na konzumáciu – nízka vlhkosť a kyslosť ho konzervujú.',
  },
  {
    title: 'Úl = klimatizovaný dom',
    text: 'Včely udržujú v úle stálu teplotu okolo 34 °C – vetrajú krídlami alebo donášajú vodu na chladenie.',
  },
];

export default function BeeFacts() {
  return (
    <section className="py-16 md:py-24 bg-cream" aria-labelledby="facts-heading">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-ochre uppercase tracking-[0.3em] text-xs font-semibold mb-3">
          Zaujímavosti o včelách
        </h2>
        <h3 id="facts-heading" className="text-3xl md:text-4xl font-serif tracking-tight mb-12">
          Vedeli ste, že…
        </h3>
        <ul className="space-y-8 md:space-y-10">
          {facts.map((fact, index) => (
            <li key={index} className="border-l-2 border-ochre/30 pl-6 md:pl-8">
              <h4 className="text-lg md:text-xl font-serif text-gray-800 mb-2">{fact.title}</h4>
              <p className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
                {fact.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
