export default function Footer() {
  return (
    <footer className="py-16 bg-cream border-t border-ochre/10 mt-auto" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-6">
        <div className="space-y-4">
          <p className="text-xs tracking-[0.3em] text-gray-400 uppercase font-light">
            Velčice &bull; Slovensko
          </p>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 opacity-50">
          &copy; {new Date().getFullYear()} Všetky práva vyhradené
        </div>
      </div>
    </footer>
  );
}
