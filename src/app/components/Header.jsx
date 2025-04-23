"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="gym-container flex items-center justify-between py-4">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gym-purple-700">
            Fit<span className="text-gym-purple-900">Fusion</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-gym-purple-500 transition-colors">
            Home
          </a>
          <a href="#classes" className="font-medium hover:text-gym-purple-500 transition-colors">
            Classes
          </a>
          <a href="#pricing" className="font-medium hover:text-gym-purple-500 transition-colors">
            Pricing
          </a>
          <a href="#trainers" className="font-medium hover:text-gym-purple-500 transition-colors">
            Trainers
          </a>
          <a href="#testimonials" className="font-medium hover:text-gym-purple-500 transition-colors">
            Testimonials
          </a>
        </nav>

        <div className="hidden md:block">
          <Button className="btn-primary">Join Now</Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gym-purple-700" />
            ) : (
              <Menu className="h-6 w-6 text-gym-purple-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="gym-container py-4 space-y-4 flex flex-col">
            <a 
              href="#home" 
              className="font-medium py-2 hover:text-gym-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#classes" 
              className="font-medium py-2 hover:text-gym-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Classes
            </a>
            <a 
              href="#pricing" 
              className="font-medium py-2 hover:text-gym-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a 
              href="#trainers" 
              className="font-medium py-2 hover:text-gym-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Trainers
            </a>
            <a 
              href="#testimonials" 
              className="font-medium py-2 hover:text-gym-purple-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <Button className="btn-primary w-full">Join Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;