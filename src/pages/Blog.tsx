
import React, { useEffect } from 'react';
import BlogCard from '@/components/BlogCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BlogProps {
  language: 'en' | 'ar';
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

const Blog: React.FC<BlogProps> = ({ language }) => {
  const isRtl = language === 'ar';
  
  const content = {
    en: {
      title: 'Blog',
      subtitle: 'Latest News & Updates',
      description: 'Stay updated with the latest news, releases, and behind-the-scenes content from Joospider.',
      categories: {
        all: 'All',
        news: 'News',
        releases: 'Releases',
        events: 'Events',
        features: 'Features'
      },
    },
    ar: {
      title: 'المدونة',
      subtitle: 'آخر الأخبار والتحديثات',
      description: 'ابق على اطلاع بآخر الأخبار والإصدارات والمحتوى من خلف الكواليس من جوسبايدر.',
      categories: {
        all: 'الكل',
        news: 'أخبار',
        releases: 'إصدارات',
        events: 'فعاليات',
        features: 'مميزات'
      },
    }
  };
  
  const text = language === 'en' ? content.en : content.ar;
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: language === 'en' ? 'New EP "JOOR3A\'RAP " ' : 'الألبوم الجديد " جرعة راب  "',
      excerpt: language === 'en' 
        ? 'A new album from Joospider, which contains 7 songs.'
        : ' ألبوم جديد من فريق Joospider، والذي يحمل 7 اغنيات . ',
      image: 'https://i.postimg.cc/DwXqtJX7/Screenshot-3.png',
      date: '2024-04-15',
      category: 'releases'
    },
    {
      id: 2,
      title: language === 'en' ? 'Joo X Studio ' : 'جو فالستوديو ',
      excerpt: language === 'en'
        ? 'Direct contact with rappers increases a lot of things in you that you, as a page owner or as a rap listener, may not be aware of.'
        : 'الإحتكاك المباشر مع الرابر يزيد فيك بزاف حاجات نتا كمالك لصفحة او كمستمع للراب ما تكونش على دراية بيهم',
      image: 'https://i.postimg.cc/gjgCFt1L/436452280-1499618347629634-865673058705487535-n.jpg',
      date: '2024-04-10',
      category: 'events'
    },
    {
      id: 3,
      title: language === 'en' ? 'GOLDEN JOOSPIDER ( 2024 ) ' : 'جولدن جوسبايدر (2024) "',
      excerpt: language === 'en'
        ? 'GOLDEN JOOSPIDER AWARD IN  2024.'
        : 'جائزة جولدن جوسبايدر لإختيار احسن اغنية لسنة 2024 ',
      image: 'https://i.postimg.cc/ncwy35v6/GOLDEN-JOOSPIDER-2024-which-best-TRACK-in-2024-1-SMAUGER-by-skorpvision-lmad-c2-OR.jpg',
      date: '2024-04-05',
      category: 'features'
    },
    
  ];
  
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <RevealOnScroll key={post.id} delay={100 * index}>
                <BlogCard post={post} language={language} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
