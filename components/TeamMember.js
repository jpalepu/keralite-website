import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamMember({ name, role, linkedin, image, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="aspect-square bg-gradient-to-br from-primary-50 to-secondary-50 flex items-center justify-center relative overflow-hidden rounded-full mx-auto mt-6 w-40 h-40">
          {image ? (
            <Image
              src={`/${image}`}
              alt={name}
              fill
              className="object-cover rounded-full"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <span className="text-4xl">👤</span>
          )}
        </div>
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold text-secondary-900">{name}</h3>
          {role && (
            <p className="text-sm text-secondary-600 mt-1 font-medium">{role}</p>
          )}
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-3 text-secondary-500 hover:text-secondary-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
} 