import React, { useEffect } from 'react';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';

interface AboutProps {
  language: 'en' | 'ar';
}

const About: React.FC<AboutProps> = ({ language }: AboutProps) => {
  const isRtl = language === 'ar';

  const content = {
    en: {
      title: 'About Joospider',
      subtitle: 'The Story Behind the Mask',
      bio: [
        'Emerging from the vibrant streets of Algeria, Joospider represents a fresh wave in the North African hip-hop scene. Inspired by the dual nature of Spider-Man — the balance between power and responsibility — his music explores themes of struggle, identity, and social commentary.',
        'Just as Spider-Man wears a mask, Joospider embraces the duality of artist and person, using his music as a vehicle to express truths that often remain hidden in everyday conversation. His unique sound combines traditional North African rhythms with modern trap beats, creating a musical web that captures audiences across cultures.',
        'Since his debut in 2022, Joospider has quickly risen to prominence with his distinctive visual style and authentic lyrics. His performances are known for their high energy and audience connection, making each show an unforgettable experience.'
      ],
      quote: '"With great beats comes great responsibility."'
    },
    ar: {
      title: 'حول جوسبايدر',
      subtitle: 'القصة وراء القناع',
      bio: [  
        `من قلب شوارع الجزائر النابضة، تُعد Joospider واحدة من أبرز المنصات الرقمية في مشهد الهيب هوب بشمال إفريقيا. مستلهمة من الطبيعة المزدوجة لشخصية سبايدرمان — التوازن بين القوة والمسؤولية — تسلط Joospider الضوء على الأصوات القادمة من الأعماق، وتعرض مواهب خامًا، وقصصًا جريئة، ونظرات واقعية من الشارع.
      
      تمامًا مثل سبايدرمان الذي يرتدي قناعًا، تبقى Joospider خلف الكواليس — ليس للاختباء، بل لتسليط الضوء على الآخرين. من خلال الفيديوهات، والتحديات، والعروض الحية في الشارع، تقدم المنصة مزيجًا فريدًا من الترفيه والتعليق الثقافي، وتربط الفنانين بجمهورهم بطريقة أصيلة.
      
      منذ انطلاقتها عام 2022، أصبحت Joospider مرجعًا ثقافيًا في عالم الراب الجزائري، تدمج بين طاقة الشارع وهوية بصرية لافتة — بالأحمر والأسود — مستوحاة من عالم سبايدرمان.  Joospider هي المكان اللي ينبض فيه قلب الراب الجزائري. `
      ],
      quote: '"مع الإيقاعات العظيمة تأتي مسؤولية عظيمة."'
    }
  };

  const text = language === 'en' ? content.en : content.ar;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={cn("min-h-screen bg-spider-dark pt-24", isRtl ? 'rtl' : 'ltr')}>
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {text.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-xl text-spider-red mb-12">
              {text.subtitle}
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2">
              {text.bio.map((paragraph, index) => (
                <RevealOnScroll key={index} delay={300 + index * 200}>
                  <p className="text-white/80 mb-4">{paragraph}</p>
                </RevealOnScroll>
              ))}
            </div>
            <div className="relative">
              <RevealOnScroll delay={300}>
                <div className="sticky top-32 overflow-hidden rounded-lg">
                  <img 
                    src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png" 
                    alt="Joospider" 
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spider-red/50 to-transparent mix-blend-multiply"></div>
                </div>
              </RevealOnScroll>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default About;
