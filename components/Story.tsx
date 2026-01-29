import Image from 'next/image';

const instaxPhotos = [
  {
    src: 'https://image2url.com/r2/default/images/1769606568257-58f88c0b-53fa-4287-bbd6-2493af974972.blob',
    alt: 'Včely na pláste',
    caption: 'Naše včielky na Zlatne',
    position: 'md:left-[0%] md:top-0',
    rotate: 'rotate-[-4deg]',
  },
  {
    src: 'https://image2url.com/r2/default/images/1769606570641-88c5e586-8853-4700-b5c7-02017b162a45.blob',
    alt: 'Včelie úle',
    caption: 'Naše včelíny na Jedlinách',
    position: 'md:left-[30%] md:top-[-10%]',
    rotate: 'rotate-[3deg]',
  },
  {
    src: 'https://image2url.com/r2/default/images/1769606573424-6553e286-ac23-45bf-9e59-d78af20b6a49.blob',
    alt: 'Verný spoločník v prírode',
    caption: 'Verný pomocník Lacko',
    position: 'md:right-[0%] md:top-[12%]',
    rotate: 'rotate-[-2deg]',
  },
];

export default function Story() {
  return (
    <section className="py-16 md:py-24 bg-cream overflow-hidden" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col space-y-12 md:space-y-24">
          <div className="max-w-3xl space-y-8">
            <h2 className="text-ochre uppercase tracking-[0.3em] text-xs font-semibold mb-4">
              Náš Príbeh
            </h2>
            <h3 id="story-heading" className="text-4xl md:text-5xl font-serif leading-tight">
              Tradícia zrodená <br />
              <span className="text-ochre">z úcty k prírode</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                Moja cesta so včelami začala už v roku 2011. Bolo to hľadanie súladu s prírodou, ktoré ma po
                rokoch skúseností priviedlo až pod úpätie pohoria Tribeč. Práve tu, vo Velčiciach, som našiel
                krajinu, ktorá sa stále riadi vlastnými pravidlami a ponúka včelám ideálne podmienky pre život.
              </p>
              <p>
                Verím v poctivý prístup – každá kvapka medu, ktorú u nás ochutnáte, prešla mojimi rukami s
                úctou k tradícii a k sile včelieho spoločenstva.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0 h-auto md:h-[600px] pt-12 mb-12">
            {instaxPhotos.map((photo, index) => (
              <figure
                key={index}
                className={`relative md:absolute ${photo.position} w-[300px] md:w-[420px] bg-white p-5 pb-20 shadow-2xl border border-gray-100 ${photo.rotate} transition-transform hover:rotate-0 hover:scale-105 duration-500 z-10 group`}
              >
                <div className="aspect-square overflow-hidden mb-4">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={420}
                    height={420}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <figcaption className="font-handwriting text-2xl md:text-3xl text-gray-700 text-center -mt-2">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
