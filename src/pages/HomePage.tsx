import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  Stethoscope, 
  Brain, 
  Ambulance, 
  Video,
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Online Appointments',
      description: 'Book appointments with our specialists instantly',
      link: '/book-appointment'
    },
    {
      icon: Brain,
      title: 'AI Symptom Checker',
      description: 'Get instant health insights with our AI-powered tool',
      link: '/symptom-checker'
    },
    {
      icon: Video,
      title: 'Video Consultations',
      description: 'Consult with doctors from the comfort of your home',
      link: '/video-consultation'
    },
    {
      icon: Ambulance,
      title: 'Emergency Services',
      description: '24/7 emergency care with ambulance dispatch',
      link: '/emergency'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Patients Served' },
    { number: '200+', label: 'Medical Professionals' },
    { number: '15', label: 'Departments' },
    { number: '24/7', label: 'Emergency Care' }
  ];

  const departments = [
    'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics',
    'Oncology', 'Emergency Medicine', 'Radiology', 'Surgery'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full">
                <Heart className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">Trinity</span>
              <span className="text-green-600"> Hospital</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Advanced healthcare technology meets compassionate care. Experience the future 
              of medicine with our comprehensive digital health platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/emergency"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Ambulance className="h-5 w-5" />
                <span>Emergency</span>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our integrated platform provides everything you need for modern healthcare management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
              >
                <div className="bg-gradient-to-r from-blue-100 to-green-100 p-4 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Medical Departments
            </h2>
            <p className="text-xl text-gray-600">
              Expert care across all medical specialties
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <Stethoscope className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{dept}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl mb-8">
                To provide exceptional healthcare services through innovative technology, 
                compassionate care, and unwavering commitment to patient wellbeing. We believe 
                in making quality healthcare accessible to everyone.
              </p>
              <div className="space-y-4">
                {[
                  'Patient-centered care approach',
                  'Advanced medical technology',
                  'Experienced healthcare professionals',
                  'Comprehensive health services'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-300" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">24/7 Care</h3>
                <p className="text-blue-100">Always here when you need us</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p className="text-green-100">Qualified medical professionals</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
                <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                <p className="text-blue-100">HIPAA compliant data protection</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg text-center">
                <Award className="h-12 w-12 mx-auto mb-4 text-green-200" />
                <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
                <p className="text-green-100">Excellence in healthcare delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of patients who trust Trinity Hospital for their healthcare needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Register as Patient
            </Link>
            <Link
              to="/login"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Healthcare Professional Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;