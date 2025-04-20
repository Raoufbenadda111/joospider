import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Store from './Store';
import Blog from './Blog';
import Contact from './Contact';
import NotFound from './NotFound';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const location = useLocation();
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Initialize IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const revealItems = document.querySelectorAll('.reveal-item');
    revealItems.forEach(item => {
      observer.observe(item);
    });
    
    return () => {
      revealItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, [location.pathname]);
  
  return (
    <div 
      className="min-h-screen flex flex-col" 
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      
      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/about" element={<About language={language} />} />
        <Route path="/store" element={<Store language={language} />} />
        <Route path="/blog" element={<Blog language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />
        <Route path="*" element={<NotFound language={language} />} />
      </Routes>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
