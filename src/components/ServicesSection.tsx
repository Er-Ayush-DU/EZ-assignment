'use client';

import { useState } from 'react';
import ServiceDetail from './ServiceDetail';
import Image from 'next/image';

type Service = 'film' | 'branding' | 'art' | null;

const services = [
  { id: 'film', title: 'Film Production', img: '/polaroid-film.svg' },
  { id: 'branding', title: 'Branding', img: '/polaroid-branding.svg' },
  { id: 'art', title: 'Art Curation', img: '/polaroid-art.svg' },
];

export default function ServicesSection() {
  const [selected, setSelected] = useState<Service>(null);

  if (selected) {
    return <ServiceDetail service={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <section className="relative py-16 md:py-24 bg-peach-bg overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-cursive text-gray-800">
          The storyboard reveals the breadth of our craft.
        </h2>
      </div>

      {/* Polaroid Cards */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {services.map((service, i) => (
            <button
              key={service.id}
              onClick={() => setSelected(service.id as Service)}
              className="group focus:outline-none"
            >
              <div
                className={`relative bg-white p-4 rounded-lg shadow-xl transform transition-all duration-300 group-hover:scale-105 ${
                  i === 1 ? '-rotate-3' : i === 2 ? 'rotate-2' : '-rotate-1'
                }`}
              >
                {/* Tape */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-gray-300 opacity-70 rotate-12"></div>

                {/* Image */}
                <div className="overflow-hidden rounded">
                  <Image
                    src={service.img}
                    alt={service.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>

                {/* Caption */}
                <p className="mt-3 text-center text-gray-700 font-medium">
                  {service.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="mt-16">
        <Image
          src="/border-bottom.svg"
          alt=""
          width={1920}
          height={80}
          className="w-full h-12 object-cover"
        />
      </div>
    </section>
  );
}