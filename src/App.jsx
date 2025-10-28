import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reviews from "./pages/Reviews";
import Courses from "./pages/Courses";
import { UserNavbar } from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Tutor from "./pages/Tutor";
import Student from "./pages/Student";
import Assignment from "./pages/Assignment";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import Payment from "./pages/Payment";
import StudentAssignTable from "./pages/StudentAssignTable";
import Testmonio from "./pages/Testmonio";
import Blog from "./pages/Blog";
import User from "./pages/User"
import Contact from "./pages/Contact"
import "./App.css";
import NotificationsPage from "./pages/NotificationsPage";
import StudentPayment from "./pages/StudentPayment";
import { useState } from "react";
import Faq from "./pages/Faq";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Refund from "./pages/Refund";
import Terms from "./pages/Terms";

export default function App() {
  const location = useLocation();

  // Check if current route is login
  const isLoginPage = location.pathname === "/login";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Show navbar only if not on login page */}
      {!isLoginPage && <UserNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />}

      <div className="flex flex-1 h-[1000px]">
        {/* Show sidebar only if not on login page */}
        {!isLoginPage && (
          <div className="lg:w-64 bg-white shadow-md border-r">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          </div>
        )}

        {/* Page content */}
         {/* <div className="flex-1 p-6 bg-gray-100 overflow-y-auto scrollbar-hide"></div> */}
        <div className="flex-1 p-6 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-y-auto scrollbar-hide">



          
          <Routes>
            {/* Public */}
            <Route path="/login" element={<Login />} />

            {/* Protected */}
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/course"
              element={
                <PrivateRoute>
                  <Courses />
                </PrivateRoute>
              }
            />
            <Route
              path="/reviews"
              element={
                <PrivateRoute>
                  <Reviews />
                </PrivateRoute>
              }
            />
            <Route
              path="/payment"
              element={
                <PrivateRoute>
                  <Payment />
                </PrivateRoute>
              }
            />
            <Route
              path="/tutor"
              element={
                <PrivateRoute>
                  <Tutor />
                </PrivateRoute>
              }
            />
            <Route
              path="/student"
              element={
                <PrivateRoute>
                  <Student />
                </PrivateRoute>
              }
            />
            <Route
              path="/testmonio"
              element={
                <PrivateRoute>
                  <Testmonio />
                </PrivateRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <PrivateRoute>
                  <Blog />
                </PrivateRoute>
              }
            />
            <Route
              path="/studentassign"
              element={
                <PrivateRoute>
                  <StudentAssignTable />
                </PrivateRoute>
              }
            />
            <Route
              path="/assignment"
              element={
                <PrivateRoute>
                  <Assignment />
                </PrivateRoute>
              }
            />
            <Route
              path="/studentpayment"
              element={
                <PrivateRoute>
                  <StudentPayment />
                </PrivateRoute>
              }
            />
             <Route
              path="/user"
              element={
                <PrivateRoute>
                  <User />
                </PrivateRoute>
              }
            />

             <Route
              path="/messages"
              element={
                <PrivateRoute>
                  <NotificationsPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/contact"
              element={
                <PrivateRoute>
                  <Contact />
                </PrivateRoute>
              }
            />

            <Route
              path="/faq"
              element={
                <PrivateRoute>
                  <Faq />
                </PrivateRoute>
              }
            />
            <Route
              path="/privacy"
              element={
                <PrivateRoute>
                  <PrivacyPolicy />
                </PrivateRoute>
              }
            />

            <Route
              path="/refund"
              element={
                <PrivateRoute>
                  <Refund />
                </PrivateRoute>
              }
            />

            <Route
              path="/terms"
              element={
                <PrivateRoute>
                  <Terms />
                </PrivateRoute>
              }
            />
          </Routes>
          

            

          
        </div>
      </div>
    </div>
  );
}
