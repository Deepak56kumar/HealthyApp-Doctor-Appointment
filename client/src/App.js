import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Home from './pages/Home';
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';
import ApplyDoctor from './pages/ApplyDoctor';
import Userslist from "./pages/Admin/Userslist";
import Doctorslist from "./pages/Admin/Doctorslist";
import Notifications from './pages/Notifications'
import Profile from './pages/Doctor/Profile';
import BookAppointment from "./pages/BookAppointment";
import Appointments from "./pages/Appointments"
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
function App() {
  const { loading } = useSelector(state => state.alerts);
  return (
    <BrowserRouter>
      {loading && (<div className="spinner-parent">
        <div className="spinner-border" role="status">

        </div>
        
      </div>)}
      
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path='/Login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/Register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/apply-doctor' element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute>} />
        <Route path='/notifications' element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
        <Route path='/admin/userslist' element={<ProtectedRoute> <Userslist /></ProtectedRoute>} />
        <Route path='/admin/doctorslist' element={<ProtectedRoute> <Doctorslist /></ProtectedRoute>} />
        <Route path="/doctor/profile/:userId" element={<ProtectedRoute> <Profile /></ProtectedRoute>} />
        <Route
          path="/book-appointment/:doctorId"
          element={
            <ProtectedRoute>
              <BookAppointment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <Appointments />
            </ProtectedRoute>
          }
        />
         <Route
          path="/doctor/appointments"
          element={
            <ProtectedRoute>
              <DoctorAppointments />
            </ProtectedRoute>
          }
        />
      </Routes>

    </BrowserRouter>
  );

}

export default App;
