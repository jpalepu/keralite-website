import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'mission' },
    { label: 'Process', id: 'process' },
    { label: 'Sustainability', id: 'sustainability' },
    { label: 'Contact', id: 'contact' }
  ];

  const getItemHref = (id) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      return `#${id}`;
    }
    return `/#${id}`;
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative">
            <Image
              src="/logo2.png"
              alt="Keralight Logo"
              width={180}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={getItemHref(item.id)}
                className="text-secondary-900 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/team" className="text-secondary-900 hover:text-primary-600 transition-colors">
              Team
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="text-secondary-900" />
            ) : (
              <Menu className="text-secondary-900" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={getItemHref(item.id)}
                className="block w-full text-left text-secondary-900 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/team"
              className="block text-secondary-900 hover:text-primary-600 transition-colors"
            >
              Team
            </Link>
          </div>
        </motion.div>
      </nav>
    </motion.header>
  );
} 