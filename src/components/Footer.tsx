import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  language: 'en' | 'ar';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const isRtl = language === 'ar';
  
  const footerText = {
    en: {
      rights: '© 2025 Joospider. All rights reserved.',
      description: 'Algeria\'s Premier Rap Media Platform',
      links: 'Quick Links',
      social: 'Follow Us',
    },
    ar: {
      rights: '© 2025 جوسبايدر. جميع الحقوق محفوظة.',
      description: 'المنصة الإعلامية الرائدة للراب في الجزائر',
      links: 'روابط سريعة',
      social: 'تابعنا',
    }
  };

  const text = language === 'en' ? footerText.en : footerText.ar;
  
  const links = {
    en: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Store', path: '/store' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    ar: [
      { name: 'الرئيسية', path: '/' },
      { name: 'حول', path: '/about' },
      { name: 'المنتجات', path: '/store' },
      { name: 'المدونة', path: '/blog' },
      { name: 'التواصل', path: '/contact' },
    ]
  };
  
  const currentLinks = language === 'en' ? links.en : links.ar;
  
  return (
    <footer className="bg-black py-12 mt-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and Description */}
          <div>
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png" 
                alt="Joospider Logo" 
                className="h-12 w-12 rounded-full" 
              />
              <span className="text-xl font-bold ml-2 text-white">JOOSPIDER</span>
            </div>
            <p className="mt-4 text-white/70">{text.description}</p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{text.links}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{text.social}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/joospider/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100088511291784" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://x.com/joospider" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon" 
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-white/50">
          <p>{text.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
