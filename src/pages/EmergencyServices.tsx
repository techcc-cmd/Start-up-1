import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Ambulance, 
  AlertTriangle,
  Navigation,
  Heart,
  Activity,
  Brain // <-- Make sure Brain is imported!
} from 'lucide-react';

const EmergencyServices: React.FC = () => {
  const [emergencyType, setEmergencyType] = useState('');
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [description, setDescription] = useState('');
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);

  useEffect(() => {
    if (emergencyType) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => {
            setLocation(null);
          }
        );
      }
    }
  }, [emergencyType]);

  const emergencyTypes = [
    { id: 'cardiac', name: 'Cardiac Emergency', icon: Heart, color: 'text-red-600' },
    { id: 'trauma', name: 'Trauma/Accident', icon: AlertTriangle, color: 'text-orange-600' },
    { id: 'respiratory', name: 'Breathing Problems', icon: Activity, color: 'text-blue-600' },
    { id: 'stroke', name: 'Stroke', icon: Brain, color: 'text-purple-600' },
    { id: 'other', name: 'Other Emergency', icon: AlertTriangle, color: 'text-gray-600' }
  ];

  const handleEmergencyCall = () => {
    setIsEmergencyActive(true);
    // Here you would send location to ambulance service
  };

  if (isEmergencyActive) {
    return (
      <div className="min-h-screen bg-red-50 py-8">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <Ambulance className="h-16 w-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-red-600 mb-4">Emergency Request Sent!</h1>
            <p className="mb-6 text-gray-700">
              Help is on the way. Please stay calm and keep your phone nearby.<br />
              <span className="font-semibold text-red-700">Estimated ambulance arrival: 8-12 minutes</span>
            </p>
            <div className="mb-4 text-green-700">
              {location
                ? <>Your location: <span className="font-semibold">{location.lat}, {location.lng}</span></>
                : <>Location not available.</>
              }
            </div>
            {location && (
              <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: "250px", width: "100%", marginBottom: "1rem" }}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[location.lat, location.lng]}>
                  <Popup>Your Location</Popup>
                </Marker>
              </MapContainer>
            )}
            <div className="mb-6">
              <span className="font-semibold text-gray-800">Emergency Helpline:</span>
              <span className="ml-2 text-red-600 font-bold">108</span>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-yellow-800 mb-2">While you wait:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Stay calm and keep the patient comfortable</li>
                <li>• Do not move the patient unless necessary</li>
                <li>• Keep airways clear</li>
                <li>• Apply pressure to any bleeding wounds</li>
                <li>• Stay on the line with emergency services</li>
              </ul>
            </div>
            <button 
              onClick={() => setIsEmergencyActive(false)}
              className="border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Cancel Emergency
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Header */}
        {/* ...existing header code... */}
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

              {/* Location with live map */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location (auto-detected)
                </label>
                {location ? (
                  <div>
                    <div className="mb-2 text-green-700">
                      Latitude: {location.lat}, Longitude: {location.lng}
                    </div>
                    <MapContainer center={[location.lat, location.lng]} zoom={15} style={{ height: "250px", width: "100%" }}>
                      <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      />
                      <Marker position={[location.lat, location.lng]}>
                        <Popup>Your Location</Popup>
                      </Marker>
                    </MapContainer>
                  </div>
                ) : (
                  <div className="text-red-600">Location not available. Please enable GPS.</div>
                )}
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
          {/* ...existing right column code... */}
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
                  Trinity Hospital Direct: 9025236789
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyServices;