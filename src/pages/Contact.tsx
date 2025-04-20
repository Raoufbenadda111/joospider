
import React, { useEffect } from 'react';
import ContactForm from '@/components/ContactForm';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';
import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from 'lucide-react';

interface ContactProps {
  language: 'en' | 'ar';
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const isRtl = language === 'ar';
  
  const content = {
    en: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      description: 'Have questions, booking inquiries, or just want to say hello? Reach out to Joospider using the form below.',
      contactInfo: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      socialMedia: 'Social Media',
      follow: 'Follow Joospider',
    },
    ar: {
      title: 'التواصل',
      subtitle: 'ابق على تواصل',
      description: 'هل لديك أسئلة، استفسارات عن الحجز، أو تريد فقط أن تقول مرحباً؟ تواصل مع جوسبايدر باستخدام النموذج أدناه.',
      contactInfo: 'معلومات الاتصال',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع',
      socialMedia: 'وسائل التواصل الاجتماعي',
      follow: 'تابع جوسبايدر',
    }
  };
  
  const text = language === 'en' ? content.en : content.ar;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className={cn("min-h-screen bg-spider-dark pt-24", isRtl ? 'rtl' : 'ltr')}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {text.title}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <p className="text-xl text-spider-red mb-6">
              {text.subtitle}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={400}>
            <p className="text-white/80 mb-12 max-w-2xl">
              {text.description}
            </p>
          </RevealOnScroll>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <ContactForm language={language} />
              </RevealOnScroll>
            </div>
            
            <div className="space-y-8">
              <RevealOnScroll>
                <div className="spider-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{text.contactInfo}</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <Mail size={20} className="text-spider-red mr-3" />
                      <div>
                        <p className="text-white/50 text-sm">{text.email}</p>
                        <p className="text-white">joospider1@gmail.com</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <Phone size={20} className="text-spider-red mr-3" />
                      <div>
                        <p className="text-white/50 text-sm">{text.phone}</p>
                        <p className="text-white">+213 798771645</p>
                      </div>
                    </li>
                    <li className="flex items-center">
                      <MapPin size={20} className="text-spider-red mr-3" />
                      <div>
                        <p className="text-white/50 text-sm">{text.location}</p>
                        <p className="text-white">Algiers, Medea </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={200}>
                <div className="spider-card p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{text.socialMedia}</h3>
                  <p className="text-white/70 mb-4">{text.follow}</p>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/joospider/" className="social-icon" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100088511291784" className="social-icon" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="https://www.youtube.com/@joospider" className="social-icon" aria-label="Youtube">
                      <Youtube size={20} />
                    </a>
                  </div>
                </div>
              </RevealOnScroll>
              
              <RevealOnScroll delay={400}>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png" 
                    alt="Joospider" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
