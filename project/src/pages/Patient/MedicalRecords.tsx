import React, { useState } from 'react';
import { FileText, Download, Eye, Calendar, User, Activity } from 'lucide-react';

const MedicalRecords: React.FC = () => {
  const [selectedRecord, setSelectedRecord] = useState<any>(null);

  const medicalRecords = [
    {
      id: 1,
      date: '2025-01-10',
      doctor: 'Dr. Sarah Wilson',
      department: 'Cardiology',
      type: 'Consultation',
      diagnosis: 'Hypertension',
      prescription: 'Lisinopril 10mg daily',
      notes: 'Blood pressure well controlled. Continue current medication.',
      vitals: {
        bloodPressure: '120/80',
        heartRate: '72 bpm',
        temperature: '98.6°F',
        weight: '70 kg'
      }
    },
    {
      id: 2,
      date: '2025-01-05',
      doctor: 'Dr. Michael Chen',
      department: 'Neurology',
      type: 'Follow-up',
      diagnosis: 'Migraine',
      prescription: 'Sumatriptan 50mg as needed',
      notes: 'Migraine frequency reduced. Patient responding well to treatment.',
      vitals: {
        bloodPressure: '118/78',
        heartRate: '68 bpm',
        temperature: '98.4°F',
        weight: '70 kg'
      }
    },
    {
      id: 3,
      date: '2024-12-20',
      doctor: 'Dr. Emily Johnson',
      department: 'General Medicine',
      type: 'Annual Checkup',
      diagnosis: 'Healthy',
      prescription: 'Multivitamin daily',
      notes: 'Annual physical examination. All parameters normal.',
      vitals: {
        bloodPressure: '115/75',
        heartRate: '70 bpm',
        temperature: '98.5°F',
        weight: '69 kg'
      }
    }
  ];

  const labResults = [
    {
      id: 1,
      date: '2025-01-08',
      test: 'Complete Blood Count',
      status: 'Normal',
      doctor: 'Dr. Sarah Wilson'
    },
    {
      id: 2,
      date: '2025-01-08',
      test: 'Lipid Panel',
      status: 'Normal',
      doctor: 'Dr. Sarah Wilson'
    },
    {
      id: 3,
      date: '2024-12-20',
      test: 'Thyroid Function',
      status: 'Normal',
      doctor: 'Dr. Emily Johnson'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Medical Records</h1>
          <p className="text-gray-600">View and manage your complete health history</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Records List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Consultation Records</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {medicalRecords.map((record) => (
                  <div
                    key={record.id}
                    className="p-6 hover:bg-gray-50 cursor-pointer"
                    onClick={() => setSelectedRecord(record)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{record.type}</h3>
                          <p className="text-sm text-gray-600">{record.doctor} • {record.department}</p>
                          <p className="text-sm text-gray-500">{record.diagnosis}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {record.date}
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-700">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="text-green-600 hover:text-green-700">
                            <Download className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lab Results */}
            <div className="bg-white rounded-lg shadow-md mt-8">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">Lab Results</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {labResults.map((result) => (
                  <div key={result.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-green-100 p-3 rounded-lg">
                          <Activity className="h-6 w-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{result.test}</h3>
                          <p className="text-sm text-gray-600">{result.doctor}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-600 mb-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {result.date}
                        </div>
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                          {result.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Record Detail */}
          <div className="lg:col-span-1">
            {selectedRecord ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Record Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Date</label>
                    <p className="text-gray-900">{selectedRecord.date}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Doctor</label>
                    <p className="text-gray-900">{selectedRecord.doctor}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Department</label>
                    <p className="text-gray-900">{selectedRecord.department}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Type</label>
                    <p className="text-gray-900">{selectedRecord.type}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Diagnosis</label>
                    <p className="text-gray-900">{selectedRecord.diagnosis}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Prescription</label>
                    <p className="text-gray-900">{selectedRecord.prescription}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Notes</label>
                    <p className="text-gray-900">{selectedRecord.notes}</p>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-gray-700">Vitals</label>
                    <div className="mt-2 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Blood Pressure:</span>
                        <span className="text-gray-900">{selectedRecord.vitals.bloodPressure}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Heart Rate:</span>
                        <span className="text-gray-900">{selectedRecord.vitals.heartRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Temperature:</span>
                        <span className="text-gray-900">{selectedRecord.vitals.temperature}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Weight:</span>
                        <span className="text-gray-900">{selectedRecord.vitals.weight}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <button className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-4 w-4" />
                  <span>Download Record</span>
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center text-gray-500">
                  <FileText className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                  <p>Select a record to view details</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;