import { Check, X } from "lucide-react"

export function ComparisonSection() {
  const features = [
    { name: "No Sugar", kehwah: true, regular: false },
    { name: "Helps Digestion", kehwah: true, regular: false },
    { name: "Premium Ingredients", kehwah: true, regular: false },
    { name: "No Chemicals", kehwah: true, regular: false },
    { name: "Relaxing Effect", kehwah: true, regular: false },
  ]

  return (
    <section className="py-20 px-4 bg-[#F9F3E9]">
      <div className="max-w-4xl mx-auto">
        {/* Changed text color to Deep Burgundy */}
        <h2 className="text-4xl md:text-5xl font-serif text-[#2D0B10] text-center mb-12 font-bold">
          Why Kehwah Beats Regular Tea
        </h2>

        <div className="overflow-hidden rounded-2xl shadow-xl bg-white border border-[#2D0B10]/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                {/* Changed background color to Deep Burgundy */}
                <tr className="bg-[#2D0B10] text-white">
                  <th className="py-6 px-8 text-xl font-medium">Feature</th>
                  <th className="py-6 px-4 text-center text-xl font-medium">Kesar Kehwah</th>
                  <th className="py-6 px-4 text-center text-xl font-medium">Regular Tea</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, index) => (
                  <tr key={index} className="bg-[#FFFCF9] hover:bg-white transition-colors">
                    {/* Changed text color to Deep Burgundy */}
                    <td className="py-6 px-8 text-lg text-[#2D0B10] font-medium">
                      {feature.name}
                    </td>
                    <td className="py-6 px-4 text-center">
                      {/* Changed checkmark box to Brand Orange to complement the Burgundy */}
                      <div className="inline-flex items-center justify-center w-8 h-8 bg-[#E87722] rounded-md shadow-sm">
                        <Check className="text-white" size={20} strokeWidth={3} />
                      </div>
                    </td>
                    <td className="py-6 px-4 text-center">
                      <X className="inline-block text-[#F26B8A]" size={32} strokeWidth={2.5} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}