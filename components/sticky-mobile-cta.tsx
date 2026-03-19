"use client"

import { useEffect, useState } from "react";
import Image from "next/image";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Bar becomes visible after scrolling down 600px
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToProduct = () => {
    const heroSection = document.getElementById('product-purchase');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden bg-[#1B3B36] border-t border-white/10 px-6 py-4 flex items-center justify-between shadow-[0_-12px_40px_rgba(0,0,0,0.5)] animate-in slide-in-from-bottom duration-500 overflow-hidden">
      
      {/* --- DECORATIVE BRAND MOTIFS (Watermarks) --- */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
         <Image 
            src="/images/brand-deck/1-21.png" 
            alt="" 
            width={80} 
            height={80} 
            className="absolute -left-4 -top-2 rotate-12"
         />
         <Image 
            src="/images/brand-deck/1-20.png" 
            alt="" 
            width={60} 
            height={60} 
            className="absolute right-1/2 bottom-0 translate-x-1/2 opacity-20"
         />
      </div>

      {/* --- PRICE & DETAILS --- */}
      <div className="relative z-10 flex flex-col">
        <div className="flex items-center gap-2 mb-0.5">
            <span className="text-white font-serif font-bold text-2xl tracking-tighter">₹1,220</span>
            <span className="text-white/40 line-through text-[11px] font-medium">₹1,298</span>
        </div>
        
        {/* Added a "Selling Fast" mini-tag for urgency */}
        <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            <p className="text-[#E87722] text-[10px] font-black uppercase tracking-wider">
                Selling Fast — COD Available
            </p>
        </div>
      </div>

      {/* --- ACTION BUTTON --- */}
      <button
        onClick={handleScrollToProduct}
        className="relative z-10 bg-[#E87722] hover:bg-[#d46a1e] text-white font-black px-6 py-3.5 rounded-xl text-xs shadow-[0_4px_15px_rgba(232,119,34,0.4)] active:scale-90 transition-all flex items-center gap-2 border border-white/10 animate-pulse"
        style={{ animationDuration: '3s' }}
      >
        ORDER NOW 🛒
      </button>
      
    </div>
  );
}