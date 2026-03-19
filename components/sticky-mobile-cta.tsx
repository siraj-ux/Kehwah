"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => { setVisible(window.scrollY > 600); };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToProduct = () => {
    document.getElementById('product-purchase')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!visible) return null;

  return (
    /* Background updated to the specific Brick Red [#8B1D14] from image */
    <div className="fixed bottom-0 left-0 right-0 z-[100] lg:hidden bg-[#8B1D14] border-t border-white/20 px-6 py-4 flex items-center justify-between shadow-[0_-12px_40px_rgba(139,29,20,0.4)] animate-in slide-in-from-bottom duration-500 overflow-hidden">
      
      {/* Brand Watermarks - DESIGN UNCHANGED */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] brightness-0 invert">
         <Image src="/images/brand-deck/1-21.png" alt="" width={80} height={80} className="absolute -left-4 -top-2 rotate-12" />
      </div>

      <div className="relative z-10 flex flex-col">
        <div className="flex items-center gap-2 mb-0.5">
            <span className="text-white font-serif font-bold text-2xl tracking-tighter">₹1,220</span>
            <span className="text-white/60 line-through text-[11px] font-medium">₹1,298</span>
        </div>
        <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
            <p className="text-[#fad7bb] text-[10px] font-black uppercase tracking-widest">OFFER ENDING SOON</p>
        </div>
      </div>

      {/* Action Button - BRAND ORANGE DESIGN UNCHANGED */}
      <button 
        onClick={handleScrollToProduct} 
        className="bg-[#E87722] text-white font-black px-6 py-3.5 rounded-xl text-xs shadow-2xl animate-pulse active:scale-95 transition-transform"
      >
        BUY NOW 🛒
      </button>
    </div>
  );
}