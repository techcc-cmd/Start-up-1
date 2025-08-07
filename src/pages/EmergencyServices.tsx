import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Ambulance, 
  AlertTriangle,
  Navigation,
  Heart,
  Activity,
  Brain
} from 'lucide-react';

const EmergencyServices: React.FC = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  const emergencyTypes = [
    { id: 'cardiac', name: 'Cardiac Emergency', icon: Heart, color: 'text-red-600' },
    { id: 'trauma', name: 'Trauma/Accident', icon: AlertTriangle, color: 'text-orange-600' },
    { id: 'respiratory', name: 'Breathing Problems', icon: Activity, color: 'text-blue-600' },
    { id: 'stroke', name: 'Stroke', icon: Brain, color: 'text-purple-600' },
    { id: 'other', name: 'Other Emergency', icon: AlertTriangle, color: 'text-gray-600' }
  ];

  const handleEmergencyCall = () => {
    setIsEmergencyActive(true);
    // In a real app, this would trigger actual emergency services
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
        },
        (error) => {
          console.error('Error getting location:', error);
          setLocation('Location access denied');
        }
      );
    } else {
      setLocation('Geolocation not supported');
    }
  };

  if (isEmergencyActive) {
    return (
      <div className="min-h-screen bg-red-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="animate-pulse mb-6">
              <Ambulance className="h-16 w-16 text-red-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-red-600">Emergency Services Contacted</h1>
            </div>

            <div className="bg-red-100 border border-red-200 rounded-lg p-6 mb-6">
              <h2 className="text-lg font-semibold text-red-800 mb-4">Help is on the way!</h2>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-red-600" />
                  <span className="text-red-700">Estimated arrival: 8-12 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <span className="text-red-700">Ambulance dispatched to your location</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <span className="text-red-700">Emergency team notified</span>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <h3 className="font-semibold text-yellow-800 mb-2">While you wait:</h3>
              <ul className="text-sm text-yellow-700 text-left space-y-1">
                <li>• Stay calm and keep the patient comfortable</li>
                <li>• Do not move the patient unless necessary</li>
                <li>• Keep airways clear</li>
                <li>• Apply pressure to any bleeding wounds</li>
                <li>• Stay on the line with emergency services</li>
              </ul>
            </div>

            <div className="flex space-x-4">
              <a
                href="tel:911"
                className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
              >
                Call 108 Directly
              </a>
              <button 
                onClick={() => setIsEmergencyActive(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel Emergency
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Header */}
        <div className="bg-red-600 text-white rounded-lg p-8 mb-8 text-center">
          <Ambulance className="h-12 w-12 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-2">Emergency Services</h1>
          <p className="text-red-100">24/7 Emergency Medical Response</p>
          <div className="mt-4 flex justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">911</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Available 24/7</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Request Emergency Assistance</h2>
            
            <div className="space-y-6">
              {/* Emergency Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type of Emergency
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {emergencyTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setEmergencyType(type.id)}
                      className={`p-3 border rounded-lg text-left transition-colors ${
                        emergencyType === type.id
                          ? 'border-red-500 bg-red-50'
                          : 'border-gray-300 hover:border-red-300'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <type.icon className={`h-5 w-5 ${type.color}`} />
                        <span className="font-medium text-gray-900">{type.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter your location or address"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button
                    onClick={getCurrentLocation}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description of Emergency
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  placeholder="Briefly describe the emergency situation..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              {/* Emergency Button */}
              <button
                onClick={handleEmergencyCall}
                disabled={!emergencyType || !location}
                className="w-full bg-red-600 text-white py-4 px-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                <Ambulance className="h-6 w-6" />
                <span>REQUEST EMERGENCY ASSISTANCE</span>
              </button>
            </div>
          </div>

          {/* Emergency Information */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Emergency Actions</h2>
              <div className="space-y-3">
                <a
                  href="tel:911"
                  className="block w-full bg-red-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:bg-red-700 transition-colors"
                >
                  Call 108 Directly
                </a>
                <button className="w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Poison Control: 1-800-222-1222
                </button>
                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Trinity Hospital Direct: 9025236196
                </button>
              </div>
            </div>

            {/* Emergency Tips */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Emergency First Aid Tips</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="font-semibold text-red-700">Cardiac Emergency</h3>
                  <p className="text-sm text-gray-600">Call 911, start CPR if trained, use AED if available</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-orange-700">Severe Bleeding</h3>
                  <p className="text-sm text-gray-600">Apply direct pressure, elevate if possible, don't remove objects</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-blue-700">Choking</h3>
                  <p className="text-sm text-gray-600">Encourage coughing, perform Heimlich maneuver if trained</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="font-semibold text-purple-700">Stroke Signs</h3>
                  <p className="text-sm text-gray-600">Face drooping, arm weakness, speech difficulty - call 911 immediately</p>
                </div>
              </div>
            </div>

            {/* Hospital Information */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Trinity Hospital Emergency</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">123 Healthcare Ave, Medical District</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-600" />
                  <span className="text-gray-700">24/7 Emergency Services</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  <strong>Current Wait Time:</strong> 15-20 minutes for non-critical cases
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;