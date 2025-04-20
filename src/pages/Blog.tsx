
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
      viewMore: 'View More Posts'
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
      viewMore: 'عرض المزيد من المنشورات'
    }
  };
  
  const text = language === 'en' ? content.en : content.ar;
  
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: language === 'en' ? 'New Album "JOOR3A\'RAP " ' : 'الألبوم الجديد " جرعة راب  "',
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
      image: 'https://media.sssinstagram.com/get?__sig=Kgqwen-D_sGBL-yNx1d1-Q&__expires=1745188480&uri=https%3A%2F%2Finstagram.fphl1-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F436452280_1499618347629634_865673058705487535_n.webp%3Fstp%3Ddst-jpg_e35_tt6%26_nc_ht%3Dinstagram.fphl1-1.fna.fbcdn.net%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QFN6GL2zkLmiSpara7EQ_4YyiZdse5VWP_epwP3bTyNaWfRg47Y32N7ZoFVoqfCQJJ0zrxlAhj0rJRaIpz6Novq%26_nc_ohc%3DOLdKLIgeNUIQ7kNvwEiZky5%26_nc_gid%3DO0iyLeVKmRfZLh9N3THJjQ%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfGA7LEjLa3Lc2qKYQJ-zNamt-SEsrjHRqyobSG2IMJlJQ%26oe%3D680B47BB%26_nc_sid%3Dd885a2&filename=436452280_1499618347629634_865673058705487535_n.webp',
      date: '2024-04-10',
      category: 'events'
    },
    {
      id: 3,
      title: language === 'en' ? 'GOLDEN JOOSPIDER ( 2024 ) ' : 'جولدن جوسبايدر (2024) "',
      excerpt: language === 'en'
        ? 'GOLDEN JOOSPIDER AWARD FOR BEST SONG OF 2024.'
        : 'جائزة جولدن جوسبايدر لإختيار احسن اغنية لسنة 2024 ',
      image: 'https://media.sssinstagram.com/get?__sig=zgoEmDWl_6njeKvrOw4wSA&__expires=1745189162&uri=https%3A%2F%2Finstagram.fphl1-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F471952062_1003719631598046_6866075924803228722_n.webp%3Fstp%3Ddst-jpg_e35_p1080x1080_tt6%26_nc_ht%3Dinstagram.fphl1-1.fna.fbcdn.net%26_nc_cat%3D106%26_nc_oc%3DQ6cZ2QFQartgHObDUTjpde3TG5OBl769JE38ixPh_UEBkAaYJwCBgOxNnz-6yQ2mbdy7O_wmNH-AknTE7xj07Iql9o4B%26_nc_ohc%3Dq9xTlf-pY_kQ7kNvwGmGHbJ%26_nc_gid%3D5aVVZKhpGHMpvfxStcL1dg%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfHVdnA3QXMz9n8exrJKRjWaJX7NmTCPTVaD10h0fHrI-A%26oe%3D680B325B%26_nc_sid%3Dd885a2&filename=471952062_1003719631598046_6866075924803228722_n.webp',
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
          
          <div className="text-center mt-16">
            <RevealOnScroll>
              <Button className="web-btn px-8">
                {text.viewMore}
              </Button>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Blog;
