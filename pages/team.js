import { motion } from 'framer-motion';
import Head from 'next/head';
import TeamMember from '../components/TeamMember';

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Il Nostro Team - Keralight</title>
        <meta name="description" content="Meet the innovative minds behind Keralight's sustainable technology" />
      </Head>

      <main className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Il Nostro Team</h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Incontra le menti innovative dietro la nostra tecnologia sostenibile
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Emilia Nappi",
                role: "CEO",
                linkedin: "https://www.linkedin.com/in/emilia-nappi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                image: "emilia.jpeg"
              },
              {
                name: "Aurora Cascioli",
                role: "Direttore Operativo",
                linkedin: "https://www.linkedin.com/in/aurora-cascioli-54a538298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                image: "aurora.jpeg"
              },
              {
                name: "Vittorio Blasoni",
                role: "CFO",
                linkedin: "https://www.linkedin.com/in/vittorio-blasoni-282184228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                image: "vittorio.jpeg"
              },
              {
                name: "Jithin Kumar Palepu",
                role: "Responsabile Tecnico",
                linkedin: "#",
                image: "jithin.jpeg"
              },
              {
                name: "Ester Russo",
                role: "Responsabile Risorse Umane",
                linkedin: "#"
              },
              {
                name: "Anna Pace",
                role: "Responsabile Comunicazione",
                linkedin: "https://www.linkedin.com/in/anna-pace-6346232a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                image: "anna.jpeg"
              },
              {
                name: "Marina Teodori",
                role: "Responsabile Sostenibilità",
                linkedin: "https://www.linkedin.com/in/marina-teodori?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                image: "marina.jpeg"
              }
            ].map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 