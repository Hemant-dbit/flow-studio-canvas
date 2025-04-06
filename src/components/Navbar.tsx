'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User } from "lucide-react";
// import { useAuthHandlers } from "@/utils/authHandlers"; // ✅ import
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = () => {
    router.push('api/auth/signin'); // This redirects programmatically
  };


  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-extrabold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              StudioFlow
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {["Features", "How It Works"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-gray-700 hover:text-indigo-600 font-medium transition duration-200 hover:underline underline-offset-4"
              >
                {item}
              </a>
            ))}
            <Button
              onClick={handleSignIn}
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Sign In / Sign Up
            </Button>

            {isLoggedIn && (
              <a href="/profile" className="ml-4">
                <div className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all ring-1 ring-transparent hover:ring-indigo-500">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
              </a>
            )}
          </nav>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-4">
            {isLoggedIn && (
              <a href="/profile">
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all ring-1 ring-transparent hover:ring-indigo-500">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              </a>
            )}
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

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-inner animate-slide-down">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {["Features", "How It Works"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="block text-gray-700 hover:text-indigo-600 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                handleSignIn();
              }}
              className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            >
              Sign In / Sign Up
            </Button>
            {isLoggedIn && (
              <a
                href="/profile"
                className="flex justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-300 flex items-center justify-center transition-all ring-1 ring-transparent hover:ring-indigo-500">
                  <User className="w-4 h-4 text-gray-600" />
                </div>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
