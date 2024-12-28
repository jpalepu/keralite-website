import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import DNAAnimation from '../components/DNAAnimation';
import CircularEconomyAnimation from '../components/CircularEconomyAnimation';
import TeamMember from '../components/TeamMember';

const KeratingHelix = () => {
  const particles = Array.from({ length: 60 });
  
  return (
    <div className="relative w-[800px] h-[800px]">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          initial={{ 
            x: Math.cos(i / 3) * 200,
            y: i * 15 - 400,
            scale: 1,
            opacity: 0.8
          }}
          animate={{
            x: [
              Math.cos(i / 3) * 200,
              Math.cos((i / 3) + Math.PI) * 200,
              Math.cos(i / 3) * 200
            ],
            y: [
              i * 15 - 400,
              i * 15 - 400,
              i * 15 - 400
            ],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 8,
            ease: "linear",
            delay: i * 0.02,
          }}
        >
          <motion.div 
            className="w-4 h-4 rounded-full"
            style={{
              background: i % 2 === 0 
                ? 'linear-gradient(to right, #22c55e, #0ea5e9)'
                : 'linear-gradient(to right, #0ea5e9, #22c55e)',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.3)'
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              delay: i * 0.02,
            }}
          />
        </motion.div>
      ))}
      
      {/* DNA connecting lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(34, 197, 94, 0.1) 0%,
            rgba(14, 165, 233, 0.1) 50%,
            transparent 70%)`
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear"
        }}
      />
    </div>
  );
};

const HeroText = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8,
      delay,
      ease: [0.2, 0.65, 0.3, 0.9]
    }}
    className="block"
  >
    {children}
  </motion.span>
);

export default function Home() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen">
      <Head>
        <title>Keralight - Sustainable Keratin Technology</title>
        <meta name="description" content="Pioneering sustainable hydrogel solutions from human hair keratin" />
      </Head>

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-white pt-20">
        {/* Central Animation */}
        <div className="absolute inset-0 opacity-60">
          <DNAAnimation />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative z-20">
              <div className="space-y-6 mb-16">
                <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                  <HeroText>
                    <span className="text-black">Transforming waste</span>
                  </HeroText>
                  <HeroText delay={0.1}>
                    <span className="text-black">
                      into{" "}
                      <span className="animate-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 
                                     bg-[size:400%] bg-clip-text text-transparent">
                        Innovation.
                      </span>
                    </span>
                  </HeroText>
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="mt-8 text-xl md:text-2xl text-secondary-600 max-w-3xl"
                >
                  Revolutionizing the keratin industry through sustainable extraction methods. 
                  Our innovative technology transforms waste hair into valuable biomaterials, 
                  paving the way for a circular bioeconomy.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-secondary-300 rounded-full p-1"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-secondary-300 rounded-full mx-auto"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-secondary-900 text-center"
            >
              About Us
            </motion.h2>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Mission */}
            <div className="grid lg:grid-cols-2 gap-16 mb-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-secondary-900">Our Mission</h3>
                <div className="prose prose-lg text-secondary-600">
                  <p>
                    At Keralight, we are revolutionizing the cosmetics industry through sustainable 
                    innovation. Our mission is to transform waste hair into valuable biomaterials, 
                    creating a circular economy that benefits both the environment and society.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  {
                    title: "Innovation",
                    description: "Developing sustainable extraction methods",
                    icon: "🔬"
                  },
                  {
                    title: "Impact",
                    description: "Processing 5,000+ tonnes annually",
                    icon: "♻️"
                  },
                  {
                    title: "Collaboration",
                    description: "Building industry partnerships",
                    icon: "🤝"
                  },
                  {
                    title: "Research",
                    description: "Advancing material science",
                    icon: "🧪"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary-50 p-6 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <span className="text-2xl mb-3 block">{item.icon}</span>
                    <h4 className="font-semibold text-secondary-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-secondary-600">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Vision */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl"
              >
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-secondary-900">Our Vision</h3>
                  <div className="space-y-4">
                    {[2024, 2025, 2026].map((year, index) => (
                      <div key={year} className="flex items-start gap-4">
                        <span className="text-sm font-semibold text-primary-600">{year}</span>
                        <p className="text-secondary-600">
                          {index === 0 && "Establish production capacity"}
                          {index === 1 && "Scale operations across Italy"}
                          {index === 2 && "Expand internationally"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg text-secondary-600"
              >
                <p>
                  We envision a future where waste transformation drives innovation in cosmetics. 
                  Our goal is to establish new paradigms in sustainable material science and circular 
                  economy practices, creating positive environmental impact at every step.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">Our Process</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Transforming waste into sustainable solutions through innovative technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Collection & Processing",
                description: "Sustainable collection and processing of waste hair materials"
              },
              {
                step: "02",
                title: "Keratin Extraction",
                description: "Advanced extraction techniques to obtain pure keratin"
              },
              {
                step: "03",
                title: "Hydrogel Formation",
                description: "Transformation into innovative hydrogel products"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-secondary-50 rounded-xl transform group-hover:scale-105 transition-transform duration-300" />
                <div className="relative p-8">
                  <span className="text-6xl font-bold text-primary-200">{process.step}</span>
                  <h3 className="text-xl font-semibold text-secondary-900 mt-4 mb-2">{process.title}</h3>
                  <p className="text-secondary-600">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="sustainability" className="py-32 bg-gradient-to-b from-secondary-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">Sustainable Development Goals</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Our commitment to sustainability aligns with UN Sustainable Development Goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                sdg: "SDG 3",
                title: "Good Health and Well-being",
                description: "Promoting sustainable cosmetic solutions that ensure product safety and human well-being",
                color: "from-green-400 to-green-600"
              },
              {
                sdg: "SDG 12",
                title: "Responsible Consumption and Production",
                description: "Transforming waste hair into valuable resources, promoting circular economy practices",
                color: "from-amber-400 to-amber-600"
              },
              {
                sdg: "SDG 13",
                title: "Climate Action",
                description: "Reducing environmental impact through sustainable extraction processes and waste reduction",
                color: "from-blue-400 to-blue-600"
              }
            ].map((sdg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative group rounded-xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sdg.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="relative p-8">
                  <div className="text-2xl font-bold text-secondary-900 mb-4">{sdg.sdg}</div>
                  <h3 className="text-xl font-semibold text-secondary-800 mb-4">{sdg.title}</h3>
                  <p className="text-secondary-600">{sdg.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-secondary-900 mb-8">Our Impact</h2>
              <div className="space-y-12">
                {[
                  {
                    icon: (
                      <svg className="w-12 h-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" 
                        />
                      </svg>
                    ),
                    title: "Environmental Impact",
                    stat: "5,329",
                    unit: "tonnes",
                    label: "Waste Reduction",
                    description: "Potential reduction of hair waste in Italy through our sustainable processing methods."
                  },
                  {
                    icon: (
                      <svg className="w-12 h-12 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
                        />
                      </svg>
                    ),
                    title: "Social Impact",
                    stat: "99%",
                    label: "Population Reach",
                    description: "Raising awareness through our network of hairdressers, reaching nearly the entire population."
                  },
                  {
                    icon: (
                      <svg className="w-12 h-12 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    ),
                    title: "Economic Impact",
                    stat: "100%",
                    label: "Circular Economy",
                    description: "Creating an environmentally and socially conscious business model prioritizing waste material utilization."
                  }
                ].map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="mr-4 p-2 bg-primary-50 rounded-lg">
                          {impact.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-secondary-900">{impact.title}</h3>
                          <div className="flex items-baseline mt-1">
                            <span className="text-3xl font-bold text-primary-600">{impact.stat}</span>
                            {impact.unit && <span className="ml-1 text-xl text-primary-600">{impact.unit}</span>}
                          </div>
                          <p className="text-sm font-medium text-secondary-600">{impact.label}</p>
                        </div>
                      </div>
                      <p className="text-secondary-700 leading-relaxed">{impact.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">Circular Economy Model</h3>
                  <p className="text-secondary-600 max-w-md mx-auto">
                    Our innovative approach transforms waste hair into valuable resources, 
                    creating a sustainable cycle of collection, processing, and product development.
                  </p>
                </div>
                <div className="flex justify-center">
                  <CircularEconomyAnimation />
                </div>
                <div className="bg-primary-50 rounded-xl p-6">
                  <h4 className="font-semibold text-primary-900 mb-2">Key Benefits:</h4>
                  <ul className="space-y-2 text-primary-700">
                    <li className="flex items-center">
                      <span className="mr-2">🌱</span>
                      Zero waste production through complete material utilization
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">💪</span>
                      Sustainable industry practices and responsible consumption
                    </li>
                    <li className="flex items-center">
                      <span className="mr-2">🤝</span>
                      Community engagement through hairdresser network
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Interested in our sustainable solutions? We'd love to hear from you.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12"
            >
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Contact Information</h3>
                  <p className="text-secondary-600">
                    Reach out to us for collaboration opportunities or to learn more about our sustainable solutions.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-secondary-900">Email</p>
                      <a href="mailto:info@keralight.com" className="text-primary-600 hover:text-primary-700">
                        info@keralight.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-medium text-secondary-900">Location</p>
                      <p className="text-secondary-600">Rome, Italy</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-secondary-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 