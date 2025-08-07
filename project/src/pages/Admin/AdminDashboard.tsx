import React from 'react';
import { 
  Users, 
  Calendar, 
  Building, 
  Activity,
  TrendingUp,
  DollarSign,
  UserCheck,
  Clock,
  AlertTriangle,
  FileText,
  Stethoscope,
  Bed
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  const hospitalStats = [
    { label: 'Total Patients', value: '2,847', change: '+12%', icon: Users, color: 'text-blue-600' },
    { label: 'Active Doctors', value: '156', change: '+3%', icon: UserCheck, color: 'text-green-600' },
    { label: 'Appointments Today', value: '342', change: '+8%', icon: Calendar, color: 'text-purple-600' },
    { label: 'Bed Occupancy', value: '87%', change: '+5%', icon: Bed, color: 'text-orange-600' }
  ];

  const departmentStats = [
    { name: 'Emergency', patients: 45, doctors: 12, occupancy: '95%' },
    { name: 'Cardiology', patients: 23, doctors: 8, occupancy: '78%' },
    { name: 'Neurology', patients: 18, doctors: 6, occupancy: '82%' },
    { name: 'Pediatrics', patients: 31, doctors: 10, occupancy: '65%' },
    { name: 'Orthopedics', patients: 27, doctors: 9, occupancy: '73%' }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'appointment',
      message: 'New appointment scheduled in Cardiology',
      time: '5 minutes ago',
      icon: Calendar,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'emergency',
      message: 'Emergency patient admitted to ICU',
      time: '12 minutes ago',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      id: 3,
      type: 'staff',
      message: 'Dr. Sarah Wilson completed 8 consultations',
      time: '1 hour ago',
      icon: UserCheck,
      color: 'text-green-600'
    },
    {
      id: 4,
      type: 'system',
      message: 'Daily backup completed successfully',
      time: '2 hours ago',
      icon: Activity,
      color: 'text-purple-600'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'critical',
      message: 'ICU bed capacity at 95%',
      department: 'Emergency',
      priority: 'high'
    },
    {
      id: 2,
      type: 'warning',
      message: 'Medicine inventory low: Insulin',
      department: 'Pharmacy',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'info',
      message: 'Scheduled maintenance tonight',
      department: 'IT',
      priority: 'low'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Hospital Administration</h1>
              <p className="text-blue-100">
                Welcome, {user?.name} • {user?.department}
              </p>
              <p className="text-blue-100 mt-1">
                Trinity Hospital Management Dashboard
              </p>
            </div>
            <div className="hidden md:block">
              <Building className="h-16 w-16 text-white/20" />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {hospitalStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Department Overview */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Department Overview</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Department</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Patients</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Doctors</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Occupancy</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departmentStats.map((dept, index) => (
                      <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-3">
                            <Stethoscope className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-gray-900">{dept.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600">{dept.patients}</td>
                        <td className="py-3 px-4 text-gray-600">{dept.doctors}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  parseInt(dept.occupancy) > 90 ? 'bg-red-500' :
                                  parseInt(dept.occupancy) > 75 ? 'bg-yellow-500' : 'bg-green-500'
                                }`}
                                style={{ width: dept.occupancy }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600">{dept.occupancy}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            parseInt(dept.occupancy) > 90 ? 'bg-red-100 text-red-800' :
                            parseInt(dept.occupancy) > 75 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {parseInt(dept.occupancy) > 90 ? 'Critical' :
                             parseInt(dept.occupancy) > 75 ? 'Busy' : 'Normal'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                    <div className={`p-2 rounded-lg bg-gray-100`}>
                      <activity.icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
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
                  Add New Doctor
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Manage Departments
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  View Reports
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  System Settings
                </button>
              </div>
            </div>

            {/* Alerts */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">System Alerts</h2>
              <div className="space-y-3">
                {alerts.map((alert) => (
                  <div key={alert.id} className={`p-3 rounded-lg border-l-4 ${
                    alert.priority === 'high' ? 'border-red-500 bg-red-50' :
                    alert.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                    'border-blue-500 bg-blue-50'
                  }`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <p className={`text-sm font-medium ${
                          alert.priority === 'high' ? 'text-red-800' :
                          alert.priority === 'medium' ? 'text-yellow-800' :
                          'text-blue-800'
                        }`}>
                          {alert.message}
                        </p>
                        <p className="text-xs text-gray-600 mt-1">{alert.department}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        alert.priority === 'high' ? 'bg-red-100 text-red-800' :
                        alert.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {alert.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Financial Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Today's Revenue</span>
                  <span className="font-semibold text-green-600">$45,230</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Monthly Target</span>
                  <span className="font-semibold text-blue-600">$1.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Outstanding Bills</span>
                  <span className="font-semibold text-orange-600">$23,450</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Insurance Claims</span>
                  <span className="font-semibold text-purple-600">$67,890</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                View Full Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;