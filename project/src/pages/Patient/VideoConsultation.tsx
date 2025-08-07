import React, { useState } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, Settings, Users } from 'lucide-react';

const VideoConsultation: React.FC = () => {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);
  const [isInCall, setIsInCall] = useState(false);

  const upcomingConsultations = [
    {
      id: 1,
      doctor: 'Dr. Sarah Wilson',
      specialty: 'Cardiology',
      date: '2025-01-15',
      time: '10:00 AM',
      duration: '30 minutes',
      status: 'scheduled'
    },
    {
      id: 2,
      doctor: 'Dr. Michael Chen',
      specialty: 'Neurology',
      date: '2025-01-18',
      time: '2:30 PM',
      duration: '45 minutes',
      status: 'confirmed'
    }
  ];

  const startCall = () => {
    setIsInCall(true);
  };

  const endCall = () => {
    setIsInCall(false);
  };

  if (isInCall) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        {/* Video Call Interface */}
        <div className="flex-1 relative">
          {/* Doctor's Video */}
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="bg-blue-600 p-8 rounded-full mb-4 mx-auto w-32 h-32 flex items-center justify-center">
                <Users className="h-16 w-16" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Dr. Sarah Wilson</h3>
              <p className="text-gray-300">Cardiology Specialist</p>
            </div>
          </div>

          {/* Patient's Video (Picture-in-Picture) */}
          <div className="absolute top-4 right-4 w-48 h-36 bg-gray-700 rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white">
              {isVideoOn ? (
                <div className="text-center">
                  <div className="bg-green-600 p-4 rounded-full mb-2 mx-auto w-16 h-16 flex items-center justify-center">
                    <Video className="h-8 w-8" />
                  </div>
                  <p className="text-sm">You</p>
                </div>
              ) : (
                <div className="text-center">
                  <VideoOff className="h-8 w-8 mb-2 mx-auto" />
                  <p className="text-sm">Camera Off</p>
                </div>
              )}
            </div>
          </div>

          {/* Call Duration */}
          <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full">
            <span className="text-sm">05:23</span>
          </div>
        </div>

        {/* Call Controls */}
        <div className="bg-gray-800 p-6">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setIsAudioOn(!isAudioOn)}
              className={`p-4 rounded-full transition-colors ${
                isAudioOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
              } text-white`}
            >
              {isAudioOn ? <Mic className="h-6 w-6" /> : <MicOff className="h-6 w-6" />}
            </button>
            
            <button
              onClick={() => setIsVideoOn(!isVideoOn)}
              className={`p-4 rounded-full transition-colors ${
                isVideoOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-600 hover:bg-red-500'
              } text-white`}
            >
              {isVideoOn ? <Video className="h-6 w-6" /> : <VideoOff className="h-6 w-6" />}
            </button>

            <button
              onClick={endCall}
              className="p-4 rounded-full bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              <Phone className="h-6 w-6 transform rotate-135" />
            </button>

            <button className="p-4 rounded-full bg-gray-600 hover:bg-gray-500 text-white transition-colors">
              <Settings className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Video Consultations</h1>
          <p className="text-gray-600">Connect with doctors from the comfort of your home</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upcoming Consultations */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Upcoming Consultations</h2>
            <div className="space-y-4">
              {upcomingConsultations.map((consultation) => (
                <div
                  key={consultation.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">{consultation.doctor}</h3>
                      <p className="text-sm text-gray-600">{consultation.specialty}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      consultation.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {consultation.status}
                    </span>
                  </div>
                  
                  <div className="text-sm text-gray-600 mb-3">
                    <p>{consultation.date} at {consultation.time}</p>
                    <p>Duration: {consultation.duration}</p>
                  </div>

                  <div className="flex space-x-2">
                    <button
                      onClick={startCall}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors flex items-center space-x-2"
                    >
                      <Video className="h-4 w-4" />
                      <span>Join Call</span>
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              Schedule New Consultation
            </button>
          </div>

          {/* System Check */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">System Check</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Video className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Camera</span>
                </div>
                <span className="text-green-600 font-medium">Working</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Mic className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Microphone</span>
                </div>
                <span className="text-green-600 font-medium">Working</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Internet Connection</span>
                </div>
                <span className="text-green-600 font-medium">Excellent</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-medium text-blue-900 mb-2">Before Your Consultation</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Ensure you're in a quiet, well-lit room</li>
                <li>• Test your camera and microphone</li>
                <li>• Have your medical records ready</li>
                <li>• Prepare a list of questions</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
              <h3 className="font-medium text-yellow-900 mb-2">Technical Requirements</h3>
              <ul className="text-sm text-yellow-800 space-y-1">
                <li>• Chrome, Firefox, or Safari browser</li>
                <li>• Stable internet connection (5+ Mbps)</li>
                <li>• Working camera and microphone</li>
                <li>• Allow browser permissions for media access</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoConsultation;