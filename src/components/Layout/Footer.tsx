import React from 'react';
import { Heart, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">Trinity</span>
                <span className="text-xl font-bold text-blue-400"> Hospital</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Committed to providing exceptional healthcare services with compassion, 
              innovation, and excellence. Your health is our priority.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Clock className="h-4 w-4 mr-2" />
                24/7 Emergency Services
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/emergency" className="text-gray-300 hover:text-white transition-colors">Emergency Services</a></li>
              <li><a href="/book-appointment" className="text-gray-300 hover:text-white transition-colors">Book Appointment</a></li>
              <li><a href="/symptom-checker" className="text-gray-300 hover:text-white transition-colors">Symptom Checker</a></li>
              <li><a href="/medical-records" className="text-gray-300 hover:text-white transition-colors">Medical Records</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                Emergency: 911
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                Main: (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                info@trinityhospital.com
              </div>
              <div className="flex items-start text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-green-400" />
                123 Healthcare Ave<br />
                Medical District, MD 12345
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2025 Trinity Hospital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;