'use client';

import Image from 'next/image';

interface Props {
  service: 'film' | 'branding' | 'art';
  onBack: () => void;
}

const data = {
  film: {
    quote: "Filmmaking is a chance to live many lifetimes.",
    author: "Robert Altman",
    img: '/film.jpg',
    caption: 'Film Production',
    desc: "Who says films are just an escape? We see them as a way to live many lives — to feel, to explore, and to tell stories that stay. And with each film, we carry new memories and new reasons to keep creating.",
    list: ['Documentaries', 'Corporate Videos', '2D Animation Videos', '3D Animation Videos'],
    cta: 'Explore Now',
  },
  branding: {
    quote: "A brand is a voice, and a product is a souvenir.",
    author: "Lisa Gansky",
    img: '/branding.jpg',
    caption: 'Branding',
    desc: "A brand isn’t just what you see — it’s what you remember, what you carry home, and what you trust. We shape brands that people remember, return to, and fall in love with.",
    list: ['Branding & Communication', 'Market Mapping', 'Content Management', 'Social Media Management', 'Rebranding'],
    cta: 'Explore Now',
  },
  art: {
    quote: "V take art where it belongs, to the people.",
    author: "Vernita Verma",
    img: '/art.jpg',
    caption: 'Art Curation',
    desc: "Art isn’t meant to sit on distant walls — it’s meant to breathe, to travel, to belong. Through every festival, every performance, and every gathering, we help stories find their stage and their people.",
    list: ['Art Festivals', 'Live Performances', 'Community Events', 'Cultural Storytelling'],
    cta: 'Explore Now',
  },
};

const icons = {
  film: ['🎥', '📽️', '🎬'],
  branding: ['💡', '📊', '📱'],
  art: ['🎨', '🎭', '🎪'],
};

export default function ServiceDetail({ service, onBack }: Props) {
  const item = data[service];
  const iconSet = icons[service];

  return (
    <section className="relative min-h-screen py-16 bg-peach-bg">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Quote */}
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl font-cursive text-gray-800 italic">
            “{item.quote}” — <span className="text-orange-600">{item.author}</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Polaroid */}
          <div className="flex justify-center">
            <div className="relative bg-white p-4 rounded-lg shadow-xl -rotate-2">
              <div className="overflow-hidden rounded">
                <Image
                  src={item.img}
                  alt={item.caption}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
              <p className="mt-3 text-center text-gray-700 font-medium">{item.caption}</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">{item.desc}</p>

            <div>
              <p className="font-semibold text-gray-800 mb-2">V creates:</p>
              <ul className="space-y-1">
                {item.list.map((li) => (
                  <li key={li} className="flex items-center gap-2 text-gray-700">
                    <span className="text-orange-600">•</span> {li}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700"
            >
              {item.cta}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 right-10 text-4xl opacity-30 animate-pulse">
          {iconSet[0]}
        </div>
        <div className="absolute bottom-20 left-10 text-4xl opacity-30 animate-bounce">
          {iconSet[1]}
        </div>
        <div className="absolute top-1/2 right-20 text-4xl opacity-30 animate-spin slow">
          {iconSet[2]}
        </div>
      </div>
    </section>
  );
}