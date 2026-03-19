"use client"

import { Button } from "@/components/ui/button"

export function BatchUrgency() {
  const scrollToProduct = () => {
    const element = document.getElementById('product-purchase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-[#F9F3E9] text-center overflow-hidden">
      <div className="max-w-3xl mx-auto space-y-6 px-2">
        {/* Title updated to Deep Burgundy */}
        <h2 className="text-3xl md:text-5xl font-serif text-[#2D0B10] font-bold leading-tight">
          Don't Miss This Batch
        </h2>
        
        <p className="text-gray-700 text-lg md:text-xl max-w-2xl mx-auto">
          This is a limited saffron batch — once sold out, restock may take weeks.
        </p>

        <div className="pt-4 flex justify-center px-2">
          {/* Button updated to Deep Burgundy with Mobile-Safe Width */}
          <Button 
            onClick={scrollToProduct}
            className="bg-[#2D0B10] hover:bg-[#1a0709] text-white h-auto py-4 px-6 md:px-12 text-lg md:text-xl font-bold rounded-xl shadow-2xl transition-all hover:scale-105 active:scale-95 w-full md:w-auto flex items-center justify-center gap-2 whitespace-normal text-center"
          >
            <span>👉</span> Get Your Kesar Kehwah Now
          </Button>
        </div>

        {/* Professional tracking and sizing for footer text */}
        <p className="text-gray-500 font-bold pt-6 tracking-[0.2em] uppercase text-[10px] md:text-xs opacity-80">
          Free Shipping | COD Available | Easy Returns
        </p>
      </div>
    </section>
  )
}