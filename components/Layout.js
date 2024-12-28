import Navbar from './Navbar';
import Footer from './Footer';
import CookieConsent from './CookieConsent';

export default function Layout({ children }) {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <CookieConsent />
    </>
  );
} 