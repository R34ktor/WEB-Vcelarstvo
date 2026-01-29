export default function Contact() {
  return (
    <section
      className="pt-12 md:pt-16 pb-24 md:pb-32 bg-cream relative overflow-hidden border-t border-ochre/5"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-ochre uppercase tracking-[0.3em] text-sm font-semibold">
              Kde nás nájdete
            </h2>
            <h3 id="contact-heading" className="text-4xl md:text-6xl font-serif leading-tight">
              Máte chuť na <br />
              <span className="text-ochre">pravý med?</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-md leading-relaxed font-light">
              Zastavte sa u nás osobne vo Velčiciach alebo nás kontaktujte telefonicky. Radi vám poradíme s
              výberom.
            </p>
          </div>
          <address className="mt-8 md:mt-16 border-l border-ochre/30 pl-8 md:pl-12 not-italic">
            <div className="flex flex-col mb-6">
              <span className="text-[10px] tracking-[0.5em] uppercase font-serif mb-1 text-gray-400">
                Včelárstvo
              </span>
              <div className="text-2xl md:text-3xl font-serif tracking-widest uppercase mb-6 leading-none">
                Jozef <span className="text-ochre">Goňo</span>
              </div>
            </div>
            <div className="space-y-3 text-gray-500 font-light tracking-wide text-base md:text-lg">
              <p>Velčice 442, 951 71</p>
              <p>
                <a
                  href="mailto:abbex@abbex.sk"
                  className="hover:text-ochre transition-colors duration-300"
                >
                  abbex@abbex.sk
                </a>
              </p>
              <p>
                <a
                  href="tel:+421917457290"
                  className="hover:text-ochre transition-colors duration-300"
                >
                  +421 917 457 290
                </a>
              </p>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
