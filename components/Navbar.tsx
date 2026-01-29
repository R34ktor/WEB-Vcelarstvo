export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-cream/90 backdrop-blur-md py-6" aria-label="Hlavná navigácia">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="flex flex-col items-start md:items-center md:col-start-2">
          <span className="text-[10px] tracking-[0.5em] uppercase font-serif mb-1 opacity-60 text-gray-500">
            Včelárstvo
          </span>
          <div className="text-xl md:text-2xl font-serif tracking-widest uppercase whitespace-nowrap">
            Jozef <span className="text-ochre">Goňo</span>
          </div>
        </div>
        <div className="flex justify-end md:col-start-3">
          <a
            href="tel:+421917457290"
            className="text-sm md:text-base font-light tracking-wide text-gray-500 hover:text-ochre transition-colors duration-300 whitespace-nowrap"
            aria-label="Zavolajte nám: +421 917 457 290"
          >
            +421 917 457 290
          </a>
        </div>
      </div>
    </nav>
  );
}
