import React, { useState } from 'react';
import { Brain, Search, AlertTriangle, CheckCircle, Info } from 'lucide-react';

const SymptomChecker: React.FC = () => {
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [currentSymptom, setCurrentSymptom] = useState('');
  const [results, setResults] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const commonSymptoms = [
    'Headache', 'Fever', 'Cough', 'Sore throat', 'Fatigue',
    'Nausea', 'Dizziness', 'Chest pain', 'Shortness of breath',
    'Abdominal pain', 'Back pain', 'Joint pain', 'Skin rash'
  ];

  const addSymptom = (symptom: string) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom]);
    }
    setCurrentSymptom('');
  };

  const removeSymptom = (symptom: string) => {
    setSymptoms(symptoms.filter(s => s !== symptom));
  };

  const analyzeSymptoms = async () => {
    if (symptoms.length === 0) return;
    
    setLoading(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResults = {
        possibleConditions: [
          {
            name: 'Common Cold',
            probability: 75,
            severity: 'low',
            description: 'A viral infection of the upper respiratory tract',
            recommendations: [
              'Rest and stay hydrated',
              'Use over-the-counter pain relievers',
              'Gargle with salt water for sore throat'
            ]
          },
          {
            name: 'Seasonal Allergies',
            probability: 60,
            severity: 'low',
            description: 'Allergic reaction to environmental allergens',
            recommendations: [
              'Avoid known allergens',
              'Consider antihistamines',
              'Use air purifiers indoors'
            ]
          },
          {
            name: 'Viral Infection',
            probability: 45,
            severity: 'medium',
            description: 'General viral infection affecting multiple systems',
            recommendations: [
              'Monitor symptoms closely',
              'Seek medical attention if symptoms worsen',
              'Maintain good hygiene'
            ]
          }
        ],
        urgency: 'low',
        disclaimer: 'This is an AI-powered assessment and should not replace professional medical advice.'
      };
      
      setResults(mockResults);
      setLoading(false);
    }, 2000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'low': return 'border-green-500 bg-green-50';
      case 'medium': return 'border-yellow-500 bg-yellow-50';
      case 'high': return 'border-red-500 bg-red-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Symptom Checker</h1>
          <p className="text-gray-600">
            Get instant health insights powered by artificial intelligence
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Symptom Input */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Add Your Symptoms
            </label>
            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                value={currentSymptom}
                onChange={(e) => setCurrentSymptom(e.target.value)}
                placeholder="Type a symptom..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && currentSymptom.trim()) {
                    addSymptom(currentSymptom.trim());
                  }
                }}
              />
              <button
                onClick={() => currentSymptom.trim() && addSymptom(currentSymptom.trim())}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>

            {/* Common Symptoms */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Common symptoms:</p>
              <div className="flex flex-wrap gap-2">
                {commonSymptoms.map((symptom) => (
                  <button
                    key={symptom}
                    onClick={() => addSymptom(symptom)}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors"
                  >
                    {symptom}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Symptoms */}
            {symptoms.length > 0 && (
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Selected symptoms:</p>
                <div className="flex flex-wrap gap-2">
                  {symptoms.map((symptom) => (
                    <span
                      key={symptom}
                      className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {symptom}
                      <button
                        onClick={() => removeSymptom(symptom)}
                        className="ml-2 text-blue-600 hover:text-blue-800"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Analyze Button */}
          <div className="text-center mb-8">
            <button
              onClick={analyzeSymptoms}
              disabled={symptoms.length === 0 || loading}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Analyzing...</span>
                </div>
              ) : (
                'Analyze Symptoms'
              )}
            </button>
          </div>

          {/* Results */}
          {results && (
            <div className="space-y-6">
              {/* Urgency Alert */}
              <div className={`p-4 border-l-4 rounded-lg ${getUrgencyColor(results.urgency)}`}>
                <div className="flex items-center space-x-2">
                  {results.urgency === 'high' ? (
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                  ) : results.urgency === 'medium' ? (
                    <Info className="h-5 w-5 text-yellow-600" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  )}
                  <span className="font-medium">
                    {results.urgency === 'high' ? 'Seek immediate medical attention' :
                     results.urgency === 'medium' ? 'Consider consulting a doctor' :
                     'Monitor symptoms and rest'}
                  </span>
                </div>
              </div>

              {/* Possible Conditions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Possible Conditions</h3>
                <div className="space-y-4">
                  {results.possibleConditions.map((condition: any, index: number) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{condition.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(condition.severity)}`}>
                            {condition.severity} severity
                          </span>
                          <span className="text-sm font-medium text-blue-600">
                            {condition.probability}% match
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{condition.description}</p>
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Recommendations:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {condition.recommendations.map((rec: string, recIndex: number) => (
                            <li key={recIndex} className="flex items-start space-x-2">
                              <span className="text-blue-600 mt-1">•</span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Important Disclaimer</p>
                    <p className="text-sm text-yellow-700 mt-1">{results.disclaimer}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Save Results
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;