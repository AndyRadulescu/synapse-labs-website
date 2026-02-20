import HeroSlider from '@/app/components/hero-slider/hero-slider';
import About from '@/app/components/about';
import Projects from '@/app/components/projects';
import Contact from '@/app/components/contact';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <HeroSlider/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
      </main>
  );
}
