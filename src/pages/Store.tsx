import React, { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ShoppingBag, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface StoreProps {
  language: 'en' | 'ar';
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

const Store: React.FC<StoreProps> = ({ language }) => {
  const isRtl = language === 'ar';
  const { toast } = useToast();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const products: Product[] = [
    {
      id: 3,
      name: language === 'en' ? "JOOSPIDER'S T-SHIRT BLACK" : 'تي شيرت بشعار سبايدر',
      price: 1900  ,
      image: 'https://i.postimg.cc/pXtxD3Jk/3.jpg',
      category: 't-shirt',
    },
    {
      id: 5,
      name: language === 'en' ? 'JOOSPIDER\'S T-SHIRT BLACK' : 'قناع سبايدر',
      price: 1900,
      image: 'https://i.postimg.cc/9X9CwcZr/5.jpg',
      category: 't-shirt',
    },
    {
      id: 6,
      name: language === 'en' ? 'JOOSPIDER\'S HOODIE BLACK' : 'هودي جوسبايدر في اللون الاسود ',
      price: 1900 ,
      image: 'https://media.sssinstagram.com/get?__sig=g-mMNHEkc3k-1WiTUT_yiw&__expires=1745229484&uri=https%3A%2F%2Finstagram.fphl1-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F467821566_1189785268790013_7684984247942496105_n.webp%3Fstp%3Ddst-jpg_e35_s1080x1080_tt6%26_nc_ht%3Dinstagram.fphl1-1.fna.fbcdn.net%26_nc_cat%3D109%26_nc_oc%3DQ6cZ2QGmfclEWxsDV1fQywe7Wva_yvqnCMziFSeVbBOouL2Ipv3FjqGkgdZ39VuCZxBgCG1NGgARFLg75Z62BBy3NWMr%26_nc_ohc%3DLNcN1dHTQtQQ7kNvwHif9-g%26_nc_gid%3DJw_QW3MMM7k5n_RpEJ0m7Q%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfFwe4rVUlC6u0Mhi_kOqSdnf8A4zufkBYsUIL5AP0GMrw%26oe%3D680BF5B2%26_nc_sid%3Dd885a2&filename=467821566_1189785268790013_7684984247942496105_n.webp',
      category: 'hoodie',
    },
    {
      id: 7,
      name: language === 'en' ? 'JOOSPIDER\'S T-SHIRT WHITE ' : 'هودي جوسبايدر في اللون الأبيض ',
      price: 1900 ,
      image: 'https://media.sssinstagram.com/get?__sig=Uw83415uGl6iKbE5UFnUkQ&__expires=1745229727&uri=https%3A%2F%2Finstagram.fphl1-1.fna.fbcdn.net%2Fv%2Ft51.29350-15%2F436277153_2117605701941314_5345157013789415089_n.webp%3Fstp%3Ddst-jpg_e35_p1080x1080_tt6%26_nc_ht%3Dinstagram.fphl1-1.fna.fbcdn.net%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QEliAxW01HyP0i79PU_SEqxLnxKNwCSeYn9fqrm_svoYSWCbcup9Rxp_t6-HLiKjWq-Z2BZaVGdR9YEmTQ2InmP%26_nc_ohc%3DSpPgqFR5ZOwQ7kNvwFOoNId%26_nc_gid%3DHNmBK8rA7b9U-DtI373XaQ%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfFlqabEJKHZKFJkg8OuqS0jm8gMyi3uR3soVsIY3r-VPw%26oe%3D680BD4DD%26_nc_sid%3Dd885a2&filename=436277153_2117605701941314_5345157013789415089_n.webp',
      category: 't-shirt',
    },
    {
      id: 8,
      name: language === 'en' ? 'KEYRING   ' : 'حلقة مفاتيح  ',
      price: 200  ,
      image: 'https://media.sssinstagram.com/get?__sig=wDH2A6uVS9LgnufY4owW_g&__expires=1745229352&uri=https%3A%2F%2Finstagram.fphl1-1.fna.fbcdn.net%2Fv%2Ft51.2885-15%2F484459987_17997140534770138_2108847406195683862_n.webp%3Fstp%3Ddst-jpg_e35_s1080x1080_sh0.08_tt6%26_nc_ht%3Dinstagram.fphl1-1.fna.fbcdn.net%26_nc_cat%3D110%26_nc_oc%3DQ6cZ2QHa1gxPmnH9kYFp0KeNJkio73w7OH0oQbdwXCrhsdjdyEJZDXQlMRxts8DWXHBDaih1wEPLY4F-KT7xvMMZvRLL%26_nc_ohc%3Daq37H560o6MQ7kNvwEZfM9A%26_nc_gid%3DF3koWsg_Ak1UWuUxLKRzqQ%26edm%3DANTKIIoBAAAA%26ccb%3D7-5%26oh%3D00_AfFAyyKHcPdkXLmXtj-Z4GJuqxZDqzliz5ylEhyswpQQrw%26oe%3D680BCBF5%26_nc_sid%3Dd885a2&filename=484459987_17997140534770138_2108847406195683862_n.webp',
      category: 'accessories',
    },
  ];

  const content = {
    en: {
      title: 'Merchandise Store',
      subtitle: 'Official Joospider Products',
      description:
        'Get your hands on official Joospider merchandise. From clothing to music, find exclusive items that match your style.',
      categories: {
        all: 'All Products', 
        hoodie: 'Hoodie ',
        "t-shirt": 'T-Shirt',
        accessories: 'others',

      },
      cart: {
        title: 'Shopping Cart',
        empty: 'Your cart is empty',
        checkout: 'Checkout',
        total: 'Total:',
        viewCart: 'View Cart',
        itemAdded: 'Item added to cart!',
      },
    },
    ar: {
      title: 'متجر المنتجات',
      subtitle: 'منتجات جوسبايدر الرسمية',
      description:
        'احصل على منتجات جوسبايدر الرسمية. من الملابس إلى الموسيقى، اعثر على العناصر الحصرية التي تناسب أسلوبك.',
      categories: {
        all: 'جميع المنتجات',
        clothing: 'ملابس',
        accessories: 'إكسسوارات',
        music: 'موسيقى',
      },
      cart: {
        title: 'سلة التسوق',
        empty: 'سلة التسوق فارغة',
        checkout: 'الدفع',
        total: 'المجموع:',
        viewCart: 'عرض السلة',
        itemAdded: 'تمت إضافة المنتج إلى السلة!',
      },
    },
  };

  const text = language === 'en' ? content.en : content.ar;

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const formatCurrency = (amount: number) => {
    return language === 'en'
      ? `${amount.toFixed(2)} DZD`
      : `${amount.toFixed(2)} دج`;
  };

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    toast({
      title: text.cart.itemAdded,
      description: product.name,
    });
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className={cn('min-h-screen bg-spider-dark pt-24', isRtl ? 'rtl' : 'ltr')}>
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <RevealOnScroll>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                  {text.title}
                </h1>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <p className="text-xl text-spider-red mb-6">{text.subtitle}</p>
              </RevealOnScroll>
              <RevealOnScroll delay={400}>
                <p className="text-white/80 mb-8 max-w-2xl">{text.description}</p>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={300}>
              <Button
                onClick={() => setCartOpen(true)}
                className="web-btn flex items-center gap-2 mt-4 md:mt-0"
              >
                <ShoppingBag size={18} />
                <span>{text.cart.viewCart}</span>
                {cartItems.length > 0 && (
                  <span className="ml-2 bg-white text-spider-red w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </RevealOnScroll>
          </div>

          <RevealOnScroll>
            <div className="flex flex-wrap gap-2 mb-8">
              {Object.entries(text.categories).map(([key, value]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={cn(
                    'px-4 py-2 rounded-full transition-all duration-300',
                    activeCategory === key
                      ? 'bg-spider-red text-white'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  )}
                >
                  {value}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <RevealOnScroll key={product.id} delay={100 * index}>
                <ProductCard
                  product={product}
                  language={language}
                  onAddToCart={handleAddToCart}
                />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <div
        className={cn(
          'fixed top-0 right-0 h-full w-full sm:w-96 bg-black/95 z-50 transform transition-all duration-300 shadow-xl',
          cartOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">{text.cart.title}</h2>
            <button
              onClick={() => setCartOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-white/50">
                <ShoppingBag size={64} strokeWidth={1} />
                <p className="mt-4">{text.cart.empty}</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex bg-white/5 rounded-lg overflow-hidden">
                    <div className="w-20 h-20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 p-3 flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-white">{item.name}</h3>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/50 hover:text-white/80"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="text-white/70 text-sm">
                          {item.quantity} × {formatCurrency(item.price)}
                        </div>
                        <div className="font-medium text-white">
                          {formatCurrency(item.quantity * item.price)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="flex justify-between items-center mb-4">
              <span className="text-white/70">{text.cart.total}</span>
              <span className="text-xl font-bold text-white">
                {formatCurrency(getCartTotal())}
              </span>
            </div>
            <Button disabled={cartItems.length === 0} className="web-btn w-full justify-center">
              {text.cart.checkout}
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Store;
