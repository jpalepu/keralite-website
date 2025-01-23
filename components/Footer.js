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
                src="/logo2.png"
                alt="Keralight Logo"
                width={200}
                height={65}
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-4 text-secondary-600 max-w-md">
              Tecnologia pionieristica della cheratina sostenibile per una bioeconomia circolare.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-secondary-600 hover:text-primary-600">Chi Siamo</a></li>
              <li><a href="#process" className="text-secondary-600 hover:text-primary-600">Processo</a></li>
              <li><a href="#contact" className="text-secondary-600 hover:text-primary-600">Contatti</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-secondary-900 mb-4">Contattaci</h4>
            <p className="text-secondary-600">
              Email: keralightsolutions@gmail.com<br />
              Sede: Roma, Italia
            </p>
          </div>
        </div>
        <div className="border-t border-secondary-200 mt-8 pt-8 text-center text-secondary-500">
          <p>&copy; {new Date().getFullYear()} Keralight. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
} 