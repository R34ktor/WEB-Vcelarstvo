import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Story from '@/components/Story';
import BeeFacts from '@/components/BeeFacts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Products />
        <Story />
        <BeeFacts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
