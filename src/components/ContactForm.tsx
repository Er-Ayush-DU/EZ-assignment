'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import Image from 'next/image';

// ──────────────────────────────────────────────────────────────
// Validation schema (exactly as required by the backend)
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^\d{10}$/, 'Phone must be exactly 10 digits')
    .required('Phone is required'),
  message: yup.string().required('Message is required'),
});

type FormData = yup.InferType<typeof schema>;

// ──────────────────────────────────────────────────────────────
export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await axios.post('https://vernanbackend.ezlab.in/api/contact-us/', data);
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    } catch {
      alert('Submission failed – try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ───── SUCCESS UI ─────
  if (submitted) {
    return (
      <section className="relative py-20 overflow-hidden bg-peach-bg">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-orange-600 mb-2">
            Form Submitted!
          </h3>
          <p className="text-orange-600">
            Thank you – we’ll get back to you soon.
          </p>
        </div>
      </section>
    );
  }

  // ───── MAIN FORM ─────
  return (
    <section className="relative py-20 overflow-hidden bg-peach-bg">
      {/* ----- Rangoli decorations ----- */}
      <Image
        src="/rangoli-left.svg"
        alt=""
        width={300}
        height={300}
        className="absolute bottom-0 left-0 w-48 md:w-64 opacity-80"
      />
      <Image
        src="/rangoli-right.svg"
        alt=""
        width={300}
        height={300}
        className="absolute top-0 right-0 w-48 md:w-64 opacity-80"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ----- Left Text ----- */}
          <div className="text-gray-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Story
            </h2>
            <p className="mb-2">
              Ready to bring your vision to life? Let’s talk.
            </p>
            <p className="leading-relaxed">
              Whether you have an idea, a question, or simply want to explore
              how V can work together, we’re just a message away. <br />
              Let’s catch up over coffee. <br />
              Great stories always begin with a good conversation.
            </p>
          </div>

          {/* ----- Right Form ----- */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-white p-8 rounded-xl shadow-lg"
          >
            {/* Name */}
            <div>
              <input
                {...register('name')}
                placeholder="Your name *"
                className="w-full px-4 py-3 border-b-2 border-transparent focus:border-orange-500 outline-none transition"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Your email *"
                className="w-full px-4 py-3 border-b-2 border-transparent focus:border-orange-500 outline-none transition"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <input
                {...register('phone')}
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-3 border-b-2 border-transparent focus:border-orange-500 outline-none transition"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                {...register('message')}
                rows={4}
                placeholder="Your message *"
                className="w-full px-4 py-3 border-b-2 border-transparent focus:border-orange-500 outline-none resize-none transition"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-600 text-white py-3 rounded-full font-medium hover:bg-orange-700 disabled:opacity-60 transition"
            >
              {isSubmitting ? 'Sending…' : 'Submit'}
            </button>
          </form>
        </div>

        {/* ----- Footer contact line ----- */}
        <div className="mt-12 text-center text-orange-600 text-sm">
          vernita@varnafilms.co.in | +91 98736 84567
        </div>
      </div>
    </section>
  );
}