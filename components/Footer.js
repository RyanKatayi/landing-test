export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-2">© {new Date().getFullYear()} Landing Test. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <a href="#features" className="hover:text-gray-400">Features</a>
            <a href="#pricing" className="hover:text-gray-400">Pricing</a>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </footer>
    );
  }
  