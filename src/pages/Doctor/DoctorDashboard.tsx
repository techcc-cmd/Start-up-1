import React from 'react';
import { 
  Calendar, 
  Users, 
  Clock, 
  FileText, 
  Video,
  Activity,
  TrendingUp,
  Bell,
  User,
  Phone
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const DoctorDashboard: React.FC = () => {
  const { user } = useAuth();

  const todayStats = [
    { label: 'Today\'s Appointments', value: '12', icon: Calendar, color: 'text-blue-600' },
    { label: 'Patients Seen', value: '8', icon: Users, color: 'text-green-600' },
    { label: 'Pending Reviews', value: '4', icon: FileText, color: 'text-orange-600' },
    { label: 'Video Calls', value: '3', icon: Video, color: 'text-purple-600' }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      time: '10:00 AM',
      type: 'Follow-up',
      status: 'confirmed'
    },
    {
      id: 2,
      patient: 'Sarah Johnson',
      time: '10:30 AM',
      type: 'Consultation',
      status: 'waiting'
    },
    {
      id: 3,
      patient: 'Michael Brown',
      time: '11:00 AM',
      type: 'Video Call',
      status: 'confirmed'
    }
  ];

  const recentPatients = [
    {
      id: 1,
      name: 'Emma Wilson',
      lastVisit: '2025-01-10',
      condition: 'Hypertension',
      status: 'stable'
    },
    {
      id: 2,
      name: 'David Lee',
      lastVisit: '2025-01-09',
      condition: 'Diabetes',
      status: 'monitoring'
    },
    {
      id: 3,
      name: 'Lisa Chen',
      lastVisit: '2025-01-08',
      condition: 'Migraine',
      status: 'improved'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Good morning, {user?.name}!</h1>
              <p className="text-blue-100">
                {user?.specialization} • {user?.department} Department
              </p>
              <p className="text-blue-100 mt-1">
                You have 12 appointments scheduled for today
              </p>
            </div>
            <div className="hidden md:block">
              <Activity className="h-16 w-16 text-white/20" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {todayStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Today's Schedule */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Today's Schedule</h2>
                <button className="text-blue-600 hover:text-blue-700 font-medium">
                  View All
                </button>
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
                          <h3 className="font-semibold text-gray-900">{appointment.patient}</h3>
                          <p className="text-sm text-gray-600">{appointment.type}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Clock className="h-4 w-4 mr-1" />
                          {appointment.time}
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          appointment.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {appointment.status}
                        </span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                        Start Consultation
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-50">
                        View History
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Patients */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Patients</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Last Visit</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Condition</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPatients.map((patient) => (
                      <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gray-200 p-2 rounded-full">
                              <User className="h-4 w-4 text-gray-600" />
                            </div>
                            <span className="font-medium text-gray-900">{patient.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{patient.lastVisit}</td>
                        <td className="py-3 px-4 text-gray-600">{patient.condition}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            patient.status === 'stable' ? 'bg-green-100 text-green-800' :
                            patient.status === 'monitoring' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {patient.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            View Records
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Add New Patient
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Schedule Appointment
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Write Prescription
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  View Lab Results
                </button>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">This Month</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Patients Treated</span>
                  <span className="font-semibold text-gray-900">156</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Avg. Rating</span>
                  <span className="font-semibold text-green-600">4.8/5</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Response Time</span>
                  <span className="font-semibold text-blue-600">12 min</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Success Rate</span>
                  <span className="font-semibold text-green-600">94%</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Notifications</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Emergency Patient</p>
                    <p className="text-xs text-gray-600">Room 204 - Immediate attention</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Lab Results</p>
                    <p className="text-xs text-gray-600">3 new results available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Bell className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Schedule Update</p>
                    <p className="text-xs text-gray-600">Tomorrow's schedule confirmed</p>
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

export default DoctorDashboard;