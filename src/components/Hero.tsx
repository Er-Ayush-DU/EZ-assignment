import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-peach-bg">
      {/* Background Mandala (subtle, behind logo) */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] opacity-20 pointer-events-none">
        <Image
          src="/mandala.svg"
          alt=""
          width={600}
          height={600}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* LEFT: V Films Logo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Optional: extra mandala layer behind logo */}
              <div className="absolute inset-0 -m-8 opacity-40">
                <Image
                  src="/mandala.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              {/* YOUR SVG LOGO */}
              <Image
                src="/vfilms-logo.svg"
                alt="V Films Logo"
                width={320}
                height={320}
                className="relative z-10 w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-3xl md:text-5xl font-cursive text-gray-800 leading-tight">
              Varnan is where stories find
              <br />
              <span className="block mt-1">their voice and form</span>
            </h1>

            <p className="text-orange-600 font-medium text-lg">
              Films . Brands . Art
            </p>

            <div className="text-sm md:text-base text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
              <p className="mb-3">
                Since 2009, V’ve been telling stories — stories of people, their journeys, and the places that shape them.
              </p>
              <p className="mb-3">
                Some begin in polished boardrooms, others in humble village squares. But every story starts the same way — by listening with intention.
              </p>
              <p>
                V believes it takes trust, patience, and an eye for the unseen to capture what truly matters.<br />
                <strong>V doesn’t just tell stories — V honors them.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}