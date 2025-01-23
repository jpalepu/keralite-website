import { motion, useScroll, useTransform } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import DNAAnimation from '../components/DNAAnimation';
import CircularEconomyAnimation from '../components/CircularEconomyAnimation';
import TeamMember from '../components/TeamMember';
import Image from 'next/image';

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
        <div className="absolute inset-0 opacity-60 overflow-hidden">
          <DNAAnimation />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto relative z-20 overflow-hidden">
              <div className="space-y-6 mb-16">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <HeroText>
                    <span className="text-black">Dai Rifiuti 
                      <span className="animate-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 
                                     bg-[size:400%] bg-clip-text text-transparent ml-2">
                        alla Bellezza
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
                  Trasformiamo i capelli in soluzioni di alto valore per un'industria cosmetica sostenibile. 
                  Con la nostra tecnologia innovativa, rivoluzionamo i processi di estrazione sostenibile, 
                  trasformando i capelli di scarto in biomateriali che supportano l'economia circolare
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
              Chi Siamo
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
                <h3 className="text-2xl font-bold text-secondary-900">La Nostra Missione</h3>
                <div className="prose prose-lg text-secondary-600">
                  <p>
                    La nostra missione è guidare la sostenibilità e l'innovazione nell'industria 
                    cosmetica specializzandoci nell'estrazione eco-sostenibile della cheratina dai 
                    capelli. Trasformiamo questa preziosa risorsa in prodotti idrogel avanzati, 
                    promuovendo una bioeconomia circolare e ridefinendo gli standard del settore.
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
                    title: "Innovazione",
                    description: "Sviluppo di metodi di estrazione sostenibili",
                    icon: "🔬"
                  },
                  {
                    title: "Impatto",
                    description: "Gestione di oltre 5.000 tonnellate di rifiuti di capelli prodotti annualmente in Italia attraverso processi di estrazione innovativi",
                    icon: "♻️"
                  },
                  {
                    title: "Collaborazione",
                    description: "Creazione di partnership forti per rivoluzionare la sostenibilità nell'industria cosmetica",
                    icon: "🤝"
                  },
                  {
                    title: "Ricerca",
                    description: "Avanzamento dei materiali bio-based attraverso scienza e innovazione sostenibile",
                    icon: "🧪"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-secondary-50 p-6 rounded-xl hover:shadow-md transition-shadow flex flex-col h-full"
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
                  <h3 className="text-2xl font-bold text-secondary-900">La Nostra Visione</h3>
                  <div className="space-y-4">
                    {[
                      { 
                        year: 2025, 
                        text: "Lancio della nostra StartUp, finalizzazione del metodo di estrazione della cheratina e partnership con parrucchieri locali" 
                      },
                      { 
                        year: 2026, 
                        text: "Espansione dell'impatto: Ampliamento delle operazioni in tutta Italia ed esplorazione di applicazioni in agricoltura." 
                      },
                      { 
                        year: 2027, 
                        text: "Leadership nella sostenibilità: Ingresso nei mercati europei e ispirazione all'innovazione nella gestione dei rifiuti." 
                      }
                    ].map((milestone, index) => (
                      <div key={milestone.year} className="flex items-start gap-4">
                        <span className="text-sm font-semibold text-primary-600">{milestone.year}</span>
                        <p className="text-secondary-600">{milestone.text}</p>
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
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">Il Nostro Processo</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Trasformiamo i rifiuti in soluzioni sostenibili attraverso tecnologie innovative
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-lg md:max-w-none mx-auto">
            {[
              {
                title: "Raccolta",
                description: "Collaboriamo con i parrucchieri locali per raccogliere i capelli attraverso contenitori dedicati e forniamo materiale educativo per evidenziarne il valore. I saloni partecipanti sono presentati sul nostro sito web come campioni di sostenibilità",
                icon: "♻️",
                bgColor: "bg-gradient-to-br from-primary-50 to-primary-100",
                iconBg: "bg-primary-100",
                hoverBg: "hover:bg-primary-50"
              },
              {
                title: "Estrazione della Cheratina",
                description: "Estraiamo la cheratina utilizzando solventi sostenibili, stabilendo nuovi standard per l'innovazione eco-friendly e garantendo un'impronta ambientale minima",
                icon: "⚡",
                bgColor: "bg-gradient-to-br from-secondary-50 to-secondary-100",
                iconBg: "bg-secondary-100",
                hoverBg: "hover:bg-secondary-50"
              },
              {
                title: "Formazione dell'Idrogel",
                description: "La vera innovazione sta nella trasformazione della cheratina in idrogel: un prodotto versatile con infinite possibilità, dalla purificazione dell'acqua alle applicazioni cosmetiche, ridefinendo le industrie",
                icon: "💡",
                bgColor: "bg-gradient-to-br from-accent-50 to-accent-100",
                iconBg: "bg-accent-100",
                hoverBg: "hover:bg-accent-50"
              }
            ].map((process, index) => (
              <motion.div
                key={process.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${process.bgColor} p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full ${process.hoverBg}`}
              >
                <div 
                  className={`w-16 h-16 mx-auto mb-4 flex items-center justify-center text-3xl ${process.iconBg} rounded-full shadow-sm`}
                >
                  {process.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 text-center">{process.title}</h3>
                <p className="text-secondary-600 flex-grow">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" 
        className="py-32" 
        style={{ backgroundColor: '#BFE6FE' }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-center"
              style={{ color: '#004AAD' }}
            >
              Sostenibilità: la nostra missione
            </h2>
            <p 
              className="text-xl leading-relaxed text-center"
              style={{ color: '#004AAD' }}
            >
              Ogni piccola azione è un passo verso un grande cambiamento. In Keralight Solutions, iniziamo trasformando i rifiuti in una risorsa preziosa, per ispirare e promuovere pratiche sostenibili per un futuro migliore per tutti.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center"
              style={{ color: '#004AAD' }}
            >
              I nostri pilastri di sostenibilità
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 rounded-2xl p-8 shadow-lg"
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#004AAD' }}>
                  1. Economia circolare
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: '#004AAD' }}>
                  Ogni anno, tonnellate di capelli finiscono nelle discariche. Trasformiamo quello che è considerato un rifiuto in risorse preziose producendo cheratina e idrogel di alta qualità. Attraverso un approccio circolare, diamo nuova vita a materiali che altrimenti verrebbero scartati.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 rounded-2xl p-8 shadow-lg"
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#004AAD' }}>
                  2. Impatto ambientale
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: '#004AAD' }}>
                  Riduciamo l'inquinamento e i rifiuti attraverso processi produttivi sostenibili. Ogni grammo di capelli che recuperiamo significa meno rifiuti e meno emissioni, contribuendo alla lotta contro il cambiamento climatico.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 rounded-2xl p-8 shadow-lg"
              >
                <h4 className="text-2xl font-bold mb-4" style={{ color: '#004AAD' }}>
                  3. Innovazione
                </h4>
                <p className="text-lg leading-relaxed" style={{ color: '#004AAD' }}>
                  Attraverso tecnologie avanzate, sviluppiamo soluzioni sicure e innovative che migliorano la qualità della vita delle persone. La nostra cheratina e gli idrogel supportano la salute e il benessere nel rispetto del pianeta.
                </p>
              </motion.div>
            </div>

            {/* SDG Section */}
            <div className="mt-32">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center"
                style={{ color: '#004AAD' }}
              >
                Sustainable Development Goals
              </h3>
              <p className="text-xl text-center mb-16"
                style={{ color: '#004AAD' }}
              >
                Our commitment to sustainability aligns with UN Sustainable Development Goals
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg3.png"
                    alt="SDG 3"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Human carginogenic toxicity by 99,7%
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg15.png"
                    alt="SDG 15"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Stratospheric ozone depletion by 99,6%
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg6.png"
                    alt="SDG 6"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Water consumption by 30,3% and Freshwater Eutrophication by 78,7%
                  </p>
                </motion.div>
              </div>

              {/* Second row of SDGs */}
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg12.png"
                    alt="SDG 12"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    We promote a circular economy by turning hairdressers' waste into valuable resources, reducing refuses, and encouraging responsible consumption
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg11.png"
                    alt="SDG 11"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    We work to reduce waste and pollution, contributing to the creation of cleaner, more resilient communities through sustainable practices and circular innovation
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg17.png"
                    alt="SDG 17"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Partnerships with eco conscious hairdressers and increase the visibility of our hairdressers as champions of sustainability
                  </p>
                </motion.div>
              </div>

              {/* Third row of SDGs */}
              <div className="grid md:grid-cols-3 gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg13.png"
                    alt="SDG 13"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Our processes minimize waste and emissions, contributing to the fight against climate change and fostering a greener future
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg5.png"
                    alt="SDG 5"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Gender equality: 75% female members in our team and advisory board
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/80 rounded-2xl p-6 shadow-lg text-center"
                >
                  <Image
                    src="/sdg8.png"
                    alt="SDG 8"
                    width={200}
                    height={200}
                    className="mx-auto mb-4"
                  />
                  <p className="text-lg font-semibold" style={{ color: '#004AAD' }}>
                    Transparency is our core value
                  </p>
                </motion.div>
              </div>
            </div>
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
            <h2 className="text-4xl font-bold text-secondary-900 mb-6">
              Unisciti alla Nostra Rete
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Sei un parrucchiere appassionato di sostenibilità? O un'azienda desiderosa di collaborare a soluzioni innovative? Unisciti alla nostra missione! Connettiti con noi per diventare parte della nostra rete in crescita e guidare la strada nelle pratiche eco-consapevoli. Diamo forma al futuro insieme!
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 max-w-lg md:max-w-none mx-auto"
            >
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-4">Informazioni di Contatto</h3>
                  <p className="text-secondary-600">
                    Contattaci per opportunità di collaborazione o per saperne di più sulle nostre soluzioni sostenibili.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <svg className="w-6 h-6 text-primary-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium text-secondary-900">Email</p>
                      <a href="mailto:keralightsolutions@gmail.com" className="text-primary-600 hover:text-primary-700">
                        keralightsolutions@gmail.com
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
                    Nome
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
                    Messaggio
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
                  Invia Messaggio
                </button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 