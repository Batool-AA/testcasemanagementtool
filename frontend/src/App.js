// // import React, { useState }  from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import SignUp from './components/SignUp';
// // import Login from './components/Login';
// // import Forgot from './components/Forgot';
// // import EmailVerification from './components/EmailVerification'; 
// // import Dashboard from './components/Dashboard';

// // -------------
// // Batool App.js
// // --------------

// // import React, { useState }  from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import SignUp from './components/SignUp';
// // import Login from './components/Login';
// // import Forgot from './components/Forgot';
// // import EmailVerification from './components/EmailVerification';
// // import Dashboard from './components/Dashboard';


// // const App = () => {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/SignUp" element={<SignUp />} />
// //         <Route path="/Forgot" element={<Forgot />} />
//           //  <Route path="/verify-email" element={<EmailVerification />} />
// //         <Route path="/Dashboard" element={<Dashboard />} />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// // -------------
// // Farhan App.js
// // --------------

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Overview from './components/Overview';
// // import TodoPage from './components/TodoPage';
// import Milestones from './components/Milestones';
// import TestRuns from './components/TestRuns';
// import './App.css';

// const App = () => {
//   const userName = 'Zainab Turabi';

//   return (
//     <Router>
//       <div className="app">
//         <Header userName={userName} />
//         <Routes>
//           <Route path="/overview" element={
//             <>
//               <div className="main-content">
//                 <Sidebar />
//                 <Overview />
//               </div>
//               <div className="bottom-content">
//                 <Milestones />
//                 <TestRuns />
//               </div>
//             </>
//           } />
//           {/* <Route path="/todo" element={<TodoPage />} /> */}
//           <Route path="/milestones" element={<Milestones />} />
//           <Route path="/testruns" element={<TestRuns />} />
//           <Route path="/testruns/:id" element={<TestRuns />} />
//           <Route path="/" element={
//             <>
//               <div className="main-content">
//                 <Sidebar />
//                 <Overview />
//               </div>
//               <div className="bottom-content">
//                 <Milestones />
//                 <TestRuns />
//               </div>
//             </>
//           } />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

// Updated Integrated Routes

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Overview from './components/Overview';
// import TodoPage from './components/TodoPage';
// import Milestones from './components/Milestones';
// import TestRuns from './components/TestRuns';
// import SignUp from './components/SignUp';
// import Login from './components/Login';
// import Forgot from './components/Forgot';
// import EmailVerification from './components/EmailVerification';
// import Dashboard from './components/Dashboard';
// import './App.css';

// const App = () => {
//   const userName = 'Zainab Turabi';

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Forgot" element={<Forgot />} />
//         <Route path="/verify-email" element={<EmailVerification />} />

//         {/* Private Routes */}
//         <Route path="/Dashboard" element={<Dashboard />} />
//         <Route path="/overview" element={
//           <>
//             <Header userName={userName} />
//             <div className="main-content">
//               <Sidebar />
//               <Overview />
//             </div>
//             <div className="bottom-content">
//               <Milestones />
//               <TestRuns />
//             </div>
//           </>
//         } />
//         <Route path="/todo" element={
//           <>
//             <Header userName={userName} />
//             <div className="main-content">
//               <Sidebar />
//               <TodoPage />
//             </div>
//           </>
//         } />
//         <Route path="/milestones" element={
//           <>
//             <Header userName={userName} />
//             <div className="main-content">
//               <Sidebar />
//               <Milestones />
//             </div>
//           </>
//         } />
//         <Route path="/testruns" element={
//           <>
//             <Header userName={userName} />
//             <div className="main-content">
//               <Sidebar />
//               <TestRuns />
//             </div>
//           </>
//         } />
//         <Route path="/testruns/:id" element={
//           <>
//             <Header userName={userName} />
//             <div className="main-content">
//               <Sidebar />
//               <TestRuns />
//             </div>
//           </>
//         } />
//       </Routes>
//     </Router>
//   );
// };

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Sidebar from './components/Sidebar';
// import Overview from './Pages/Overview';
// import TodoPage from './Pages/TodoPage';
// import Milestones from './components/Milestones';
// import TestRuns from './components/TestRuns';
// import SignUp from './Pages/SignUp';
// import Login from './Pages/Login';
// import Forgot from './Pages/Forgot';
// import EmailVerification from './Pages/EmailVerification';
// import Dashboard from './Pages/Dashboard';
// import './App.css';

// const App = () => {
//   const userName = 'Zainab Turabi';

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/SignUp" element={<SignUp />} />
//         <Route path="/Forgot" element={<Forgot />} />
//         <Route path="/verify-email" element={<EmailVerification />} />
//         <Route path="/Dashboard" element={<Dashboard userName={userName} />} />
//         <Route
//           path="/overview"
//           element={
//             <>
//               <Header userName={userName} />
//               <div className="main-content">
//                 <Sidebar />
//                 <Overview />
//               </div>
//               <div className="bottom-content">
//                 <Milestones />
//                 <TestRuns />
//               </div>
//             </>
//           }
//         />
//         <Route
//           path="/todo"
//           element={
//             <>
//               <Header userName={userName} />
//               <div className="main-content">
//                 <Sidebar />
//                 <TodoPage />
//               </div>
//             </>
//           }
//         />
//         <Route
//           path="/milestones"
//           element={
//             <>
//               <Header userName={userName} />
//               <div className="main-content">
//                 <Sidebar />
//                 <Milestones />
//               </div>
//             </>
//           }
//         />
//         <Route
//           path="/testruns"
//           element={
//             <>
//               <Header userName={userName} />
//               <div className="main-content">
//                 <Sidebar />
//                 <TestRuns />
//               </div>
//             </>
//           }
//         />
//         <Route
//           path="/testruns/:id"
//           element={
//             <>
//               <Header userName={userName} />
//               <div className="main-content">
//                 <Sidebar />
//                 <TestRuns />
//               </div>
//             </>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Overview from './Pages/Overview';
import TodoPage from './Pages/TodoPage';
import Milestones from './components/Milestones';
import TestRuns from './components/TestRuns';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Forgot from './Pages/Forgot';
import EmailVerification from './Pages/EmailVerification';
import Dashboard from './Pages/Dashboard';
import './App.css';
import { getUserDetails } from './api/Auth';
import NotFound from './Pages/NotFound';

const App = () => {
  const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const getDetails = async () => {
      const token = sessionStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
        const details = await getUserDetails(token);
        setUserName(details.first_name + " " + details.last_name);
      }
    }
    getDetails();
  }, []); // Runs once when the component mounts
  console.log(isLoggedIn);
  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Forgot" element={<Forgot />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="/Dashboard" element={<Dashboard userName={userName} />} />
            <Route path="/overview" element={<OverviewPage userName={userName} />} />
            <Route path="/todo" element={<TodoPage />} />
            <Route path="/milestones" element={<Milestones />} />
            <Route path="/testruns" element={<TestRuns />} />
            <Route path="/testruns/:id" element={<TestRunDetail />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

const OverviewPage = ({ userName }) => (
  <>
    <Header userName={userName} />
    <div className="main-content">
      <Sidebar />
      <Overview />
    </div>
    <div className="bottom-content">
      <Milestones />
      <TestRuns />
    </div>
  </>
);

const TestRunDetail = () => (
  <>
    <Header />
    <div className="main-content">
      <Sidebar />
      <TestRuns />
    </div>
  </>
);

export default App;
