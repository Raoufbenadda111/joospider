
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface NotFoundProps {
  language: 'en' | 'ar';
}

const NotFound: React.FC<NotFoundProps> = ({ language }) => {
  const isRtl = language === 'ar';
  
  const content = {
    en: {
      title: '404',
      subtitle: 'Page Not Found',
      description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
      button: 'Back to Home'
    },
    ar: {
      title: '404',
      subtitle: 'الصفحة غير موجودة',
      description: 'قد تكون الصفحة التي تبحث عنها قد تمت إزالتها أو تغيير اسمها أو أنها غير متاحة مؤقتًا.',
      button: 'العودة للرئيسية'
    }
  };
  
  const text = language === 'en' ? content.en : content.ar;
  
  return (
    <main className="min-h-screen flex items-center justify-center bg-spider-dark" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container mx-auto px-4 text-center">
        <div className="relative inline-block animate-float mb-8">
          <img 
            src="/lovable-uploads/1dc77e45-085a-4aee-bafe-e9d8ef11df78.png" 
            alt="Joospider Logo" 
            className="h-32 w-32 rounded-full animate-pulse-red"
          />
        </div>
        <h1 className="text-8xl font-bold text-spider-red mb-4">{text.title}</h1>
        <h2 className="text-3xl font-bold text-white mb-6">{text.subtitle}</h2>
        <p className="text-white/70 mb-12 max-w-md mx-auto">{text.description}</p>
        <Button asChild className="web-btn">
          <Link to="/">
            <ArrowLeft size={16} className={isRtl ? 'ml-2 rotate-180' : 'mr-2'} />
            {text.button}
          </Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
