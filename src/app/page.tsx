import HeroSlider from '@/app/components/hero-slider/hero-slider';
import About from '@/app/components/about/about';
import Projects from '@/app/components/projects/projects';
import Contact from '@/app/components/contact/contact';
import Footer from '@/app/components/footer';

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Synapse LABS S.R.L.',
    url: 'https://synapselabs.org',
    logo: 'https://synapselabs.org/logo-1.png',
    description: 'Premier software development company specializing in robust solutions and IT consulting.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Brașov',
      addressCountry: 'RO',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+40 735747637',
      contactType: 'customer service',
      email: 'andyradulescu@synapselabs.org',
    },
    sameAs: [
      'https://github.com/AndyRadulescu/',
      'https://www.linkedin.com/in/eduard-andrei-andy-radulescu-980b9b13a/',
      'https://www.instagram.com/andyradulescu/',
    ],
  };

  return (
      <main className="flex min-h-screen flex-col items-center justify-between">
          <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <HeroSlider/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
      </main>
  );
}
