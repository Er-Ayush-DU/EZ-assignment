import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-16 md:py-24 bg-peach-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: Text + Stats */}
          <div className="space-y-8">
            <p className="text-lg text-gray-700">
              A montage of familiar faces and names.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Some stories come from the biggest names. Others begin with bold, rising voices. We’ve been fortunate to walk alongside both — listening, creating, and building stories that <strong>matter</strong>.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center transform -rotate-3">
                <p className="text-3xl font-bold text-orange-600">85+</p>
                <p className="text-sm text-gray-700">Projects</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center">
                <p className="text-3xl font-bold text-orange-600">50+</p>
                <p className="text-sm text-gray-700">Happy Clients</p>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg shadow-md text-center transform rotate-2">
                <p className="text-3xl font-bold text-orange-600">10+</p>
                <p className="text-sm text-gray-700">Experts Team</p>
              </div>
            </div>
          </div>

          {/* Right: Big Text + Logos */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-cursive text-gray-800 mb-6 leading-tight">
              Every project is more than just a brief —<br />
              <span className="block mt-2">it’s a new chapter waiting to be written.</span>
            </h2>
            <p className="text-lg font-cursive text-gray-700 mb-8">
              Together, we’ve crafted tales that inspire, connect, and endure.
            </p>

            {/* Client Logos */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 opacity-60">
              {['Coca-Cola', 'TED', 'Arvon', 'Durex', 'Serve'].map((brand) => (
                <p key={brand} className="text-2xl font-cursive text-orange-600">{brand}</p>
              ))}
            </div>

            {/* Mountain Illustration */}
            <div className="mt-8 flex justify-center md:justify-end">
              <Image src="/mountain-sun.svg" alt="" width={200} height={120} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}