import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/dashboard";
import UserForm from "./components/userform";
import ComplianceTable from "./components/compliancetable";
import Profile from "./components/profile";
import Sign_in from "./components/sign_in";
import Sign_up from "./components/sign_up";
import MonitoringDataTable from "./components/monitoringtable";
import Template from "./components/template";
import Home from "./Home";
import VulnerabilityData from "./components/vulnerabilitytable";
import Alertstable from "./components/alertstable";
import { AuthProvider } from "./components/AuthContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sign_in />} />
        <Route path="/sign_up" element={<Sign_up />} />
        <Route path="/components/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

// export class App extends Component {
//   state = {
//     isAuthenticated: false, // Track if the user is logged in
//   };

//   // Handle user login
//   handleLogin = () => {
//     this.setState({ isAuthenticated: true });
//   };

//   // Handle user logout (optional)
//   handleLogout = () => {
//     this.setState({ isAuthenticated: false });
//   };

//   render() {
//     const { isAuthenticated } = this.state;
//     return (
//       <>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/sign_in" element={<Sign_in onLogin={this.handleLogin} />} />
//             <Route path="/logout" element={<Sign_in onLogin={this.handleLogin} />} />
//             {/* <Route path="/" element={<Sign_in onLogin={this.handleLogin} />} /> */}
//             <Route path="/components/sign_up" element={<Sign_up />} />

//             {/* Protected Routes */}
//             <Route
//               path="/components/dashboard"
//               element={
//                 isAuthenticated ? (
//                   <Dashboard />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/create-project"
//               element={
//                 isAuthenticated ? (
//                   <UserForm />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/Monitoring"
//               element={
//                 isAuthenticated ? (
//                   <MonitoringDataTable />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/vulnerability"
//               element={
//                 isAuthenticated ? (
//                   <VulnerabilityData />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/compliancetable"
//               element={
//                 isAuthenticated ? (
//                   <ComplianceTable />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/alerts"
//               element={
//                 isAuthenticated ? (
//                   <Alertstable />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/template"
//               element={
//                 isAuthenticated ? (
//                   <Template />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             <Route
//               path="/components/profile"
//               element={
//                 isAuthenticated ? (
//                   <Profile />
//                 ) : (
//                   <Navigate to="/sign_in" />
//                 )
//               }
//             />
//             {/* <Route path="/" element={<Home />} />
//                   <Route path="/components/dashboard" element={<Dashboard />} />
//                   <Route path="/components/Monitoring" element={<MonitoringDataTable />} />
//                   <Route path="/components/vulnerability" element={<VulnerabilityData />} />
//                   <Route path="/components/compliancetable" element={<ComplianceTable />} />
//                   <Route path="/components/alerts" element={<Alertstable />} />
//                   <Route path="/components/template" element={<Template />} />
//                   <Route path="/components/profile" element={<Profile />} />
//                   <Route path="/sign_in" element={<Sign_in />} />
//                   <Route path="/components/sign_up" element={<Sign_up />} /> */}
//           </Routes>
//         </BrowserRouter>
//       </>
//     );
//   }
// }

export default App;
