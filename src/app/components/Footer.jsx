import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gym-charcoal text-white">
      <div className="gym-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">FitFusion</h3>
            <p className="text-white/70 mb-6">
              Elevate your fitness journey with our premium facilities, expert trainers, and supportive community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gym-purple-300 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gym-purple-300 transition-colors">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gym-purple-300 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gym-purple-300 transition-colors">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-gym-purple-300 transition-colors">Home</a>
              </li>
              <li>
                <a href="#classes" className="text-white/70 hover:text-gym-purple-300 transition-colors">Classes</a>
              </li>
              <li>
                <a href="#pricing" className="text-white/70 hover:text-gym-purple-300 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#trainers" className="text-white/70 hover:text-gym-purple-300 transition-colors">Trainers</a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/70 hover:text-gym-purple-300 transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gym-purple-300 mr-2 mt-0.5" />
                <span className="text-white/70">
                  123 Fitness Avenue<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gym-purple-300 mr-2" />
                <span className="text-white/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gym-purple-300 mr-2" />
                <span className="text-white/70">info@fitfusion.com</span>
              </li>
            </ul>
          </div>
          
          {/* Column 4 - Opening Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-white/70">Monday - Friday:</span>
                <span className="text-white">5:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Saturday:</span>
                <span className="text-white">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-white/70">Sunday:</span>
                <span className="text-white">8:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between pt-2">
                <span className="text-white/70">Holidays:</span>
                <span className="text-white">8:00 AM - 5:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © {new Date().getFullYear()} FitFusion. All rights reserved. 
            <span className="block sm:inline sm:ml-2">Designed with passion for fitness lovers.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;