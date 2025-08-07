import React, { useState } from 'react';
import { Calendar, Clock, User, Search, Filter } from 'lucide-react';

const AppointmentBooking: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [appointmentType, setAppointmentType] = useState('in-person');

  const departments = [
    'Cardiology', 'Neurology', 'Orthopedics', 'Pediatrics',
    'Oncology', 'Emergency Medicine', 'Radiology', 'Surgery'
  ];

  const doctors = [
    { id: 1, name: 'Dr. Sarah Wilson', specialty: 'Cardiology', rating: 4.9, experience: '15 years' },
    { id: 2, name: 'Dr. Michael Chen', specialty: 'Neurology', rating: 4.8, experience: '12 years' },
    { id: 3, name: 'Dr. Emily Johnson', specialty: 'Pediatrics', rating: 4.9, experience: '10 years' },
    { id: 4, name: 'Dr. David Brown', specialty: 'Orthopedics', rating: 4.7, experience: '18 years' }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleBookAppointment = () => {
    // Handle appointment booking logic
    alert('Appointment booked successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Book an Appointment</h1>
            <p className="text-gray-600">Schedule your consultation with our expert doctors</p>
          </div>

          <div className="space-y-8">
            {/* Department Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select Department
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDepartment(dept)}
                    className={`p-3 text-sm font-medium rounded-lg border transition-colors ${
                      selectedDepartment === dept
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Doctor Selection */}
            {selectedDepartment && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Choose Doctor
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {doctors
                    .filter(doctor => doctor.specialty === selectedDepartment)
                    .map((doctor) => (
                      <div
                        key={doctor.id}
                        onClick={() => setSelectedDoctor(doctor.name)}
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          selectedDoctor === doctor.name
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-300'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="bg-blue-100 p-3 rounded-full">
                            <User className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                            <p className="text-sm text-gray-600">{doctor.specialty}</p>
                            <div className="flex items-center space-x-2 mt-1">
                              <span className="text-sm text-yellow-600">★ {doctor.rating}</span>
                              <span className="text-sm text-gray-500">• {doctor.experience}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Appointment Type */}
            {selectedDoctor && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Appointment Type
                </label>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setAppointmentType('in-person')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      appointmentType === 'in-person'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    In-Person Visit
                  </button>
                  <button
                    onClick={() => setAppointmentType('video')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      appointmentType === 'video'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Video Consultation
                  </button>
                </div>
              </div>
            )}

            {/* Date Selection */}
            {selectedDoctor && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}

            {/* Time Selection */}
            {selectedDate && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Available Time Slots
                </label>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm font-medium rounded-lg border transition-colors ${
                        selectedTime === time
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Appointment Summary */}
            {selectedTime && (
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointment Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Department:</span>
                    <span className="font-medium">{selectedDepartment}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Doctor:</span>
                    <span className="font-medium">{selectedDoctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium capitalize">{appointmentType.replace('-', ' ')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date:</span>
                    <span className="font-medium">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                </div>
                
                <button
                  onClick={handleBookAppointment}
                  className="w-full mt-6 bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Confirm Appointment
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;