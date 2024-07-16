import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-gray-100 fixed w-full z-10 top-0">
      <div className="text-2xl font-bold">Landing Test</div>
      <nav>
        <Link href="#features" className="mx-4 text-gray-700 hover:text-gray-900 cursor-pointer">
          Features
        </Link>
        <Link href="#pricing" className="mx-4 text-gray-700 hover:text-gray-900 cursor-pointer">
          Pricing
        </Link>
        <Link href="#contact" className="mx-4 text-gray-700 hover:text-gray-900 cursor-pointer">
          Contact
        </Link>
      </nav>
    </header>
  );
}
