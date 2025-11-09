import Image from 'next/image';

export default function HighlightReel() {
  return (
    <section className="relative py-16 md:py-24 bg-peach-bg overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-cursive text-gray-800">
          The Highlight Reel
        </h2>
        <p className="text-gray-600 mt-2">Watch the magic we’ve captured.</p>
      </div>

      {/* Video Frame */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative bg-white p-6 rounded-lg shadow-xl">
          {/* Film Strip Top */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-white border-b-4 border-dashed border-gray-300 flex justify-between px-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-300 rounded-sm"></div>
            ))}
          </div>

          {/* Video Content */}
          <div className="relative mt-8 aspect-video bg-black rounded overflow-hidden">
            {/* Replace with real YouTube/Vimeo embed in production */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center cursor-pointer hover:scale-110 transition">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Placeholder Image */}
            <Image
              src="/highlight-video.jpg"
              alt="Highlight Reel"
              fill
              className="object-cover"
            />
          </div>

          {/* Film Strip Bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-white border-t-4 border-dashed border-gray-300 flex justify-between px-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="w-8 h-8 bg-gray-300 rounded-sm"></div>
            ))}
          </div>

          {/* Left/Right Arrows */}
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-gray-700 hover:text-orange-600">
            Less than
          </button>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-gray-700 hover:text-orange-600">
            Greater than
          </button>
        </div>
      </div>

      {/* Decorative Icons */}
      <div className="absolute left-10 top-20 text-6xl opacity-20 text-orange-600">Camera</div>
      <div className="absolute right-10 bottom-20 opacity-20">
        <Image src="/rangoli-right.svg" alt="" width={120} height={120} />
      </div>
    </section>
  );
}