import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';

interface ContactFormProps {
  language: 'en' | 'ar';
}

const ContactForm: React.FC<ContactFormProps> = ({ language }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const isRtl = language === 'ar';
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  const labels = {
    en: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message Sent!',
      placeholder: {
        name: 'Your name',
        email: 'your.email@example.com',
        message: 'Write your message here...',
      },
    },
    ar: {
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      sending: 'جار الإرسال...',
      success: 'تم إرسال الرسالة!',
      placeholder: {
        name: 'اسمك',
        email: 'بريدك@مثال.com',
        message: 'اكتب رسالتك هنا...',
      }
    }
  };
  
  const text = language === 'en' ? labels.en : labels.ar;
  
  return (
    <div className={cn("spider-card p-6", isRtl ? 'rtl' : 'ltr')}>
      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{text.success}</h3>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-white/70">
              {text.name}
            </label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder={text.placeholder.name}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-white/70">
              {text.email}
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder={text.placeholder.email}
              required
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-white/70">
              {text.message}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              placeholder={text.placeholder.message}
              required
              rows={5}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 resize-none"
            />
          </div>
          
          <Button 
            type="submit"
            disabled={isSubmitting}
            className="web-btn w-full justify-center py-6 
              hover:scale-105 active:scale-95 
              transition-transform duration-300"
          >
            {isSubmitting ? text.sending : text.send}
          </Button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
