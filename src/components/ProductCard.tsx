
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  language: 'en' | 'ar';
  onAddToCart: (product: any) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, language, onAddToCart }) => {
  const [isAdding, setIsAdding] = useState(false);
  const isRtl = language === 'ar';
  
  const handleAddToCart = () => {
    setIsAdding(true);
    onAddToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 1500);
  };
  
  const buttonText = {
    en: {
      add: 'Add to Cart',
      adding: 'Added!',
    },
    ar: {
      add: 'أضف إلى السلة',
      adding: 'تمت الإضافة!',
    }
  };
  
  const text = language === 'en' ? buttonText.en : buttonText.ar;
  
  return (
    <div className={cn(
      "product-card group",
      isRtl && "font-arabic",
    )} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex-1">
        <h3 className={cn(
          "font-bold text-white mb-1",
          isRtl && "text-xl leading-relaxed"
        )}>{product.name}</h3>
        <p className={cn(
          "text-white/70 mb-4",
          isRtl && "text-lg"
        )}>${product.price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        disabled={isAdding}
        className={cn(
          "web-btn w-full justify-center transition-all duration-500",
          "hover:scale-105 active:scale-95",
          isAdding && "bg-green-600",
          isRtl && "text-lg"
        )}
      >
        {isAdding ? text.adding : text.add}
      </button>
    </div>
  );
};

export default ProductCard;
