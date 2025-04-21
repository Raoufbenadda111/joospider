import React, { useState, useEffect } from 'react';
import { Menu, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NavbarProps {
  language: 'en' | 'ar';
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isRtl = language === 'ar';

  const navItems = {
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

  const currentNavItems = language === 'en' ? navItems.en : navItems.ar;
  
  return (
    <>
      <header 
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300',
          isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        )}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png" 
              alt="Joospider Logo" 
              className="h-12 w-12 rounded-full animate-pulse-red" 
            />
           <span className="text-xl font-bold ml-2 text-white">
  {language === 'ar' ? 'جوسبايدر' : 'JOOSPIDER'}
</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={cn(
  "hidden md:flex items-center",
  isRtl ? "flex-row-reverse gap-x-8" : "gap-x-8"
)}>
            {currentNavItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className="nav-link"
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={toggleLanguage}
              className="web-btn py-1 px-3 text-sm"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-spider-red transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          'fixed inset-0 z-[60] bg-black/90 backdrop-blur-lg transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div className="h-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-white/10">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png"
                alt="Joospider Logo" 
                className="h-10 w-10 rounded-full"
              />
              <span className="text-xl font-bold ml-2">JOOSPIDER</span>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="text-white"
              aria-label="Close Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex-1 overflow-y-auto py-4">
            {currentNavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="burger-menu-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="p-4 border-t border-white/10">
            <button 
              onClick={toggleLanguage}
              className="web-btn w-full justify-center"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            
            <div className="flex justify-center mt-6 gap-4">
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
      </div>
    </>
  );
};

export default Navbar;
