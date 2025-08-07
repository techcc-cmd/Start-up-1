import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  FileText, 
  Brain, 
  Video, 
  Heart, 
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Bell,
  Activity
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const PatientDashboard: React.FC = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule with our specialists',
      link: '/book-appointment',
      color: 'bg-blue-500'
    },
    {
      icon: Brain,
      title: 'Symptom Checker',
      description: 'AI-powered health assessment',
      link: '/symptom-checker',
      color: 'bg-green-500'
    },
    {
      icon: Video,
      title: 'Video Consultation',
      description: 'Connect with doctors online',
      link: '/video-consultation',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Medical Records',
      description: 'View your health history',
      link: '/medical-records',
      color: 'bg-orange-500'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      date: '2025-01-15',
      time: '10:00 AM',
      type: 'In-person'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Neurology',
      date: '2025-01-18',
      time: '2:30 PM',
      type: 'Video Call'
    }
  ];

  const healthMetrics = [
    { label: 'Blood Pressure', value: '120/80', status: 'normal', color: 'text-green-600' },
    { label: 'Heart Rate', value: '72 bpm', status: 'normal', color: 'text-green-600' },
    { label: 'Weight', value: '70 kg', status: 'stable', color: 'text-blue-600' },
    { label: 'BMI', value: '22.5', status: 'healthy', color: 'text-green-600' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-blue-100">
                Your health dashboard is ready. Take control of your wellness journey.
              </p>
            </div>
            <div className="hidden md:block">
              <Heart className="h-16 w-16 text-white/20" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.link}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`${action.color} p-3 rounded-lg text-white group-hover:scale-110 transition-transform`}>
                        <action.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{action.title}</h3>
                        <p className="text-sm text-gray-600">{action.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Appointments</h2>
                <Link
                  to="/book-appointment"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Book New
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <User className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                          <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {appointment.time}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        appointment.type === 'Video Call' 
                          ? 'bg-purple-100 text-purple-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {appointment.type}
                      </span>
                      <div className="space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Reschedule
                        </button>
                        <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Health Metrics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Health Metrics</h2>
              <div className="space-y-4">
                {healthMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                      <p className={`font-semibold ${metric.color}`}>{metric.value}</p>
                    </div>
                    <Activity className="h-5 w-5 text-gray-400" />
                  </div>
                ))}
              </div>
              <Link
                to="/medical-records"
                className="block mt-4 text-center bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition-colors"
              >
                View Full Report
              </Link>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Emergency Contacts</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium text-gray-900">Emergency</p>
                    <p className="text-sm text-gray-600">911</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Hospital Main</p>
                    <p className="text-sm text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Support</p>
                    <p className="text-sm text-gray-600">help@trinity.com</p>
                  </div>
                </div>
              </div>
              <Link
                to="/emergency"
                className="block mt-4 text-center bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Emergency Services
              </Link>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Notifications</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Appointment Reminder</p>
                    <p className="text-xs text-gray-600">Tomorrow at 10:00 AM</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Lab Results Ready</p>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-orange-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Prescription Refill</p>
                    <p className="text-xs text-gray-600">Due in 3 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;