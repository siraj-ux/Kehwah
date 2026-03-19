"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Floating Animation Helper
const float = {
  animate: { y: [0, -8, 0], rotate: [0, 2, 0] },
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const }
}

export function Footer() {
  return (
    // Background updated to the Deep Burgundy from your image: #2D0B10
    <footer className="relative bg-[#2D0B10] text-white py-12 md:py-16 overflow-hidden border-t border-white/5">
      
      {/* --- DECORATIVE BRANDING IMAGES (Watermarks) --- */}
      
      {/* Left Motif */}
      <motion.div 
        {...float}
        className="absolute top-0 -left-6 opacity-[0.08] md:opacity-[0.12] pointer-events-none brightness-0 invert"
      >
        <Image src="/images/brand-deck/1-21.png" alt="" width={150} height={150} className="w-24 md:w-32" />
      </motion.div>

      {/* Right Motif */}
      <motion.div 
        {...float}
        transition={{ ...float.transition, delay: 1 }}
        className="absolute top-4 -right-6 opacity-[0.08] md:opacity-[0.12] pointer-events-none brightness-0 invert"
      >
        <Image src="/images/brand-deck/1-20.png" alt="" width={140} height={140} className="w-20 md:w-28" />
      </motion.div>

      {/* --- CENTRAL CONTENT --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center">
        
        {/* LOGO IMAGE (Huge size maintained) */}
        <Link href="/" className="inline-block mb-6 transition-transform hover:scale-105">
          <Image 
            src="/images/1-30.png" 
            alt="Kehwah Logo"
            width={500} 
            height={150}
            className="h-24 md:h-36 w-auto object-contain" 
            priority 
          />
        </Link>

        {/* Subtitle - Using Cream-Gold (#fad7bb) for premium luxury feel */}
        <p className="text-[#fad7bb] text-[11px] md:text-xs font-bold tracking-[0.4em] uppercase mb-8 opacity-90">
          The Authentic Kashmiri Tea Company
        </p>

        {/* Copyright Bar - Clean white border on burgundy */}
        <div className="pt-6 border-t border-white/10 w-full max-w-[250px] mx-auto">
          <p className="text-white/40 text-[9px] md:text-[11px] tracking-widest uppercase font-medium">
            © 2026 Kehwah. Crafted in Kashmir.
          </p>
        </div>
        
      </div>
    </footer>
  )
}