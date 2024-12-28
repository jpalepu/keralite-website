import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-secondary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="Keralight Logo"
                width={170}
                height={55}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-secondary-600 max-w-md">
              Pioneering sustainable keratin technology for a circular bioeconomy.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-secondary-600 hover:text-primary-600">About Us</a></li>
              <li><a href="#products" className="text-secondary-600 hover:text-primary-600">Products</a></li>
              <li><a href="#contact" className="text-secondary-600 hover:text-primary-600">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Contact Us</h4>
            <p className="text-secondary-600">
              Email: info@keralight.com<br />
              Phone: (555) 123-4567
            </p>
          </div>
        </div>
        <div className="border-t border-secondary-200 mt-8 pt-8 text-center text-secondary-500">
          <p>&copy; {new Date().getFullYear()} Keralight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 