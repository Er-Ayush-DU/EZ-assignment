import Image from 'next/image';

export default function TeamPortfolio() {
  return (
    <section className="py-16 md:py-24 bg-peach-bg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Sticky Note + Team */}
          <div className="space-y-8">
            {/* Sticky Note */}
            <div className="relative bg-yellow-100 p-6 rounded-lg shadow-lg rotate-3 max-w-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-6 bg-gray-300 opacity-70"></div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Some craft films. Some build brands. Some curate art. We bring all together — a
                collective of storytellers driven by one belief: every project deserves to be more
                than just a message, it should become a <strong>masterpiece</strong>.
                <br /><br />
                From first spark to final frame, from raw idea to timeless visual — we shape stories
                that stay with you.
              </p>
            </div>

            {/* Team Silhouettes */}
            <div className="flex justify-center gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-24 bg-gray-800 rounded-t-full"
                  style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)' }}
                ></div>
              ))}
            </div>

            {/* Labels */}
            <div className="flex justify-between text-sm text-gray-600">
              <p className="font-cursive">Branding Experts</p>
              <p className="font-cursive">Film Makers</p>
              <p className="font-cursive">Art Curators</p>
            </div>
          </div>

          {/* Right: Text + CTA */}
          <div className="text-center md:text-left">
            <p className="text-xl md:text-2xl font-cursive text-gray-800 mb-6">
              Take a closer look at the stories V bring to life.
            </p>
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full font-medium hover:bg-orange-700 transition">
              View Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Decorative India Gate */}
      <div className="absolute left-10 bottom-10 opacity-30">
        <Image src="/india-gate.svg" alt="" width={100} height={100} />
      </div>
    </section>
  );
}