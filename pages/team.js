import { motion } from 'framer-motion';
import Head from 'next/head';
import TeamMember from '../components/TeamMember';

export default function Team() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Our Team - Keralight</title>
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
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">Our Team</h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Meet the innovative minds behind our sustainable technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Emilia Nappi",
                role: "CEO",
                linkedin: "https://www.linkedin.com/in/emilia-nappi"
              },
              {
                name: "Aurora Cascioli",
                role: "Chief Operating Officer",
                linkedin: "https://www.linkedin.com/in/aurora-cascioli"
              },
              {
                name: "Vittorio Blasoni",
                role: "Communication Manager",
                linkedin: "https://www.linkedin.com/in/vittorio-blasoni"
              },
              {
                name: "Jithin Kumar Palepu",
                role: "Technical Lead",
                linkedin: "https://www.linkedin.com/in/jithin-kumar-palepu"
              },
              {
                name: "Ester Russo",
                role: "HR Manager",
                linkedin: "https://www.linkedin.com/in/ester-russo"
              },
              {
                name: "Anna Pace",
                role: "Communication Manager",
                linkedin: "https://www.linkedin.com/in/anna-pace"
              },
              {
                name: "Marina Teodori",
                role: "Chief Sustainability Officer",
                linkedin: "https://www.linkedin.com/in/marina-teodori"
              }
            ].map((member, index) => (
              <TeamMember
                key={member.name}
                name={member.name}
                role={member.role}
                linkedin={member.linkedin}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 