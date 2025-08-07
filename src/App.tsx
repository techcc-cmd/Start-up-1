import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PatientDashboard from './pages/Patient/PatientDashboard';
import DoctorDashboard from './pages/Doctor/DoctorDashboard';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AppointmentBooking from './pages/Patient/AppointmentBooking';
import MedicalRecords from './pages/Patient/MedicalRecords';
import SymptomChecker from './pages/Patient/SymptomChecker';
// ...existing code...
import VideoConsultation from './pages/Patient/VideoConsultation';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { NotificationProvider } from './contexts/NotificationContext';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import EmergencyServices from './pages/EmergencyServices';
function AppContent() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Trinity Hospital...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={`/${user.role}-dashboard`} />} />
          <Route path="/register" element={!user ? <RegisterPage /> : <Navigate to={`/${user.role}-dashboard`} />} />
          <Route path="/emergency" element={<EmergencyServices />} />
          
          {/* Patient Routes */}
          <Route path="/patient-dashboard" element={
            <ProtectedRoute role="patient">
              <PatientDashboard />
            </ProtectedRoute>
          } />
          <Route path="/book-appointment" element={
            <ProtectedRoute role="patient">
              <AppointmentBooking />
            </ProtectedRoute>
          } />
          <Route path="/medical-records" element={
            <ProtectedRoute role="patient">
              <MedicalRecords />
            </ProtectedRoute>
          } />
          <Route path="/symptom-checker" element={
            <ProtectedRoute role="patient">
              <SymptomChecker />
            </ProtectedRoute>
          } />
          <Route path="/video-consultation" element={
            <ProtectedRoute role="patient">
              <VideoConsultation />
            </ProtectedRoute>
          } />
// ...existing code...
          {/* Doctor Routes */}
          <Route path="/doctor-dashboard" element={
            <ProtectedRoute role="doctor">
              <DoctorDashboard />
            </ProtectedRoute>
          } />

          {/* Admin Routes */}
          <Route path="/admin-dashboard" element={
            <ProtectedRoute role="admin">
              <AdminDashboard />
            </ProtectedRoute>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;