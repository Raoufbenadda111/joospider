import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface HomeProps {
  language: 'en' | 'ar';
}

const Home: React.FC<HomeProps> = ({ language }) => {
  const text = {
    hero: {
      heading: language === 'en' ? 'Welcome to Joospider webite' : 'مرحبًا بكم في موقع جوسبايدر',
      subheading: language === 'en' ? ' Best Rap Media in Algeria' : ' أفضل صفحة إعلام الراب في الجزائر ',
description: language === 'en' ? 'Stay connected with the heartbeat of Algerian rap — fresh news, hot updates, and exclusive drops all in one place.' : 'ابق على اتصال مع نبض موسيقى الراب الجزائرية - الأخبار الطازجة والتحديثات الساخنة والإصدارات الحصرية، كل ذلك في مكان واحد.',
      cta: language === 'en' ? 'Explore Music' : 'استكشاف الموسيقى',
    },
    about: {
      heading: language === 'en' ? 'About Us' : 'معلومات عنا',
      description: language === 'en' ? 'Your number one source for Algerian rap news, updates, and exclusive content .' : 'مصدرك الأول لأخبار الراب الجزائري والتحديثات والمحتوى الحصري.',
      cta: language === 'en' ? 'Learn More' : 'تعرف أكثر',
    },
    store: {
      heading: language === 'en' ? 'Our Store' : 'متجرنا',
      description: language === 'en' ? 'Shop our exclusive merchandise.' : 'تسوق منتجاتنا الحصرية.',
      cta: language === 'en' ? 'Visit Store' : 'زيارة المتجر',
    }
  };

  const isRtl = language === 'ar';

  const products = [
    {
      id: 1,
      title: language === 'en' ? 'Black Hoodie' : 'هودي أسود',
      image: 'https://i.postimg.cc/1RTPDV14/joospider-HOODIE-AVAILABLE-FOR-SALE-SIZE-S-M-L-XL-PRICE-3500-DADELEVRY-TO-58-WILAYACO.jpg'
    },
    {
      id: 2,
      title: language === 'en' ? 'Keyring ' : 'حلقة مفاتيح',
      image: 'https://i.postimg.cc/X7CWLNnL/joospider-KEYRING-PRICE-200-DACONTACT-artlockdesignspg124-LIVRAISON-58-WILAYA.webp'
    },
    {
      id: 3,
      title: language === 'en' ? 'Black T-Shirt' : 'تيشيرت أسود',
      image: 'https://i.postimg.cc/9X9CwcZr/5.jpg'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={cn("min-h-screen bg-spider-dark", isRtl ? 'rtl' : 'ltr')}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-spider-red/20 via-spider-dark to-spider-dark"></div>
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=2070&auto=format&fit=crop"
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                {text.hero.heading}
              </h1>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                {text.hero.subheading}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <p className="text-lg text-white/70 mb-8">
                {text.hero.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={900}>
              <Button asChild className="web-btn text-lg px-8 py-6">
                <Link to="https://open.spotify.com/album/5ufisdQlWazVQoMWoSrBdT?si=tn79YU_wT9CUNFQY3ON4Rw">
                  {text.hero.cta}
                  <ArrowRight className={cn("ml-2", isRtl && "rotate-180")} size={16} />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="section-container bg-web-pattern">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <RevealOnScroll>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png"
                  alt="Joospider"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-spider-red rounded-lg"></div>
            </div>
          </RevealOnScroll>
          <div>
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {text.about.heading}
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={300}>
              <p className="text-white/70 mb-8">
                {text.about.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={600}>
              <Button asChild className="web-btn">
                <Link to="/about">
                  {text.about.cta}
                  <ArrowRight className={cn("ml-2", isRtl && "rotate-180")} size={16} />
                </Link>
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="section-container bg-web-pattern">
        <div className="text-center mb-12">
          <h2 className="section-title">{text.store.heading}</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {text.store.description}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <RevealOnScroll key={product.id} delay={index * 200}>
              <div className="spider-card overflow-hidden group">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">{product.title}</h3>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <div className="text-center mt-10">
          <RevealOnScroll>
            <Button asChild className="web-btn">
              <Link to="/store">
                {text.store.cta}
                <ArrowRight className={cn("ml-2", isRtl && "rotate-180")} size={16} />
              </Link>
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </main>
  );
};

export default Home;
