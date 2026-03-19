import Image from "next/image"

export function HowToMake() {
  const steps = [
    {
      number: 1,
      title: "Step 1",
      description: "Empty 1 sachet of Kesar Kehwah into a transparent cup",
    },
    {
      number: 2,
      title: "Step 2",
      description: "Pour 150ml of boiling water.",
    },
    {
      number: 3,
      title: "Step 3",
      description: "Stir and enjoy your cup!",
    },
  ]

  return (
    <section className="bg-[#FAF9F6] py-12 md:py-20 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Top Centered Header */}
        <h2 className="text-center text-gray-400 tracking-[0.4em] font-bold text-[10px] md:text-xs mb-12 md:mb-16 uppercase opacity-80">
          HOW TO MAKE ?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: The Image */}
          <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/lifestyle-1.jpg"
              alt="A luxury cup of Kesar Kehwah"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* RIGHT COLUMN: Instructions */}
          <div className="flex flex-col lg:pl-4">
            {/* Title updated to Deep Burgundy */}
            <h3 className="font-serif text-3xl md:text-5xl text-[#2D0B10] mb-12 font-bold leading-tight">
              Steep It Hot
            </h3>

            <div className="space-y-10">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  {/* Step Number Circle updated to Deep Burgundy */}
                  <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#2D0B10] text-white flex items-center justify-center text-xl font-bold shadow-lg transition-transform hover:scale-110">
                    {step.number}
                  </div>
                  
                  {/* Step Text */}
                  <div className="flex flex-col pt-1 md:pt-2">
                    {/* Step Title updated to Deep Burgundy */}
                    <h4 className="font-bold text-[#2D0B10] text-xl mb-2 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}