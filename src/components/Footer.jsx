import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-semibold">Company Name</h3>
            <p className="text-base leading-relaxed">Creating innovative solutions for a better tomorrow. Your trusted partner in technology and development.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-base hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-base hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-base hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-base hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-base hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-semibold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6" />
                <span className="text-base">123 Business Street, City, Country</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6" />
                <span className="text-base">+1 234 567 890</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6" />
                <span className="text-base">contact@company.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-white text-2xl font-semibold">Newsletter</h3>
            <p className="text-base leading-relaxed">Subscribe to our newsletter for updates and exclusive offers.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 text-base rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-600"
              />
              <button
                type="submit"
                className="w-full px-6 py-3 text-base bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-base">
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </div>
            <div className="flex space-x-8 text-base">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;