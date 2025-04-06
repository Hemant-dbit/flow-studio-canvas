
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold gradient-text">StudioFlow</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-studio-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-studio-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-700 hover:text-studio-600 transition-colors">Testimonials</a>
            <Button className="bg-studio-600 hover:bg-studio-700">Get Early Access</Button>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <a 
              href="#features" 
              className="block text-gray-700 hover:text-studio-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block text-gray-700 hover:text-studio-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="block text-gray-700 hover:text-studio-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="w-full bg-studio-600 hover:bg-studio-700">
              Get Early Access
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
