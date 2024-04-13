import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Project Coordinator pages
import ProCoHome from "./pages/projectCoordinator/ProCoHome";

// Examiner pages
import ExaSignUp from "./pages/examiners/ExaSignUp";
import ExLogin from "./pages/examiners/ExLogin";
import ExaHome from "./pages/examiners/ExaHome";

// Supervisor pages
import SupSignUp from "./pages/supervisors/SupSignUp";
import SupLogin from "./pages/supervisors/SupLogin";
import SupHome from "./pages/supervisors/SupHome";

// Co-Supervisor pages
import CoSupervisorSignUp from "./pages/co-supervisor/CoSupervisorSignUp";
import CoSupLogin from "./pages/co-supervisor/CoSupLogin";
import CoSupHome from "./pages/co-supervisor/CoSupHome";

// Project Member pages
import ProMemHome from "./pages/projectMembers/ProMemHome";

// Student pages
import StdSignUp from "./pages/student/StdSignUp";
import StdLogin from "./pages/student/StdLogin";
import StdHome from "./pages/student/StdHome";
import StdGrpRegistration from "./pages/student/StdGrpRegistration";
import StdRePaperPublication from "./pages/student/StdRePaperPublication";
import ProtectedRoute from "./components/ProtectedRoute";

function App ()
{
  return (
    <BrowserRouter>
      {/* <ToastContainer /> */ }
      <Routes>

        {/* Student Pages */ }
        <Route path="/std-home" element={ <StdHome /> } />
        <Route path="/std-pc-pm-signup" element={ <StdSignUp /> } />
        <Route path="/std-pc-pm-login" element={ <StdLogin /> } />
        <Route path="/std-group-reg" element={ <StdGrpRegistration /> } />
        <Route path="/std-re-pap-pub" element={ <StdRePaperPublication /> } />
        {/* <Route path="/std-group-reg" element={
          <ProtectedRoute>
            <StdGrpRegistration />
          </ProtectedRoute>
        } />

        <Route path="/std-re-pap-pub" element={
          <ProtectedRoute>
            <StdRePaperPublication />
          </ProtectedRoute>
        } /> */}

        {/* Project Coordinator Pages */ }
        <Route path="/proCo-home" element={ <ProCoHome /> } />

        {/* Project Member Pages */ }
        <Route path="/proMem-home" element={ <ProMemHome /> } />

        {/* Examiner Pages */ }
        <Route path="/ex-home" element={ <ExaHome /> } />
        <Route path="/ex-signup" element={ <ExaSignUp /> } />
        <Route path="/ex-login" element={ <ExLogin /> } />

        {/* Supervisor Pages */ }
        <Route path="/sup-home" element={ <SupHome /> } />
        <Route path="/sup-signup" element={ <SupSignUp /> } />
        <Route path="/sup-login" element={ <SupLogin /> } />

        {/* Co-Supervisor Pages */ }
        <Route path="/cosup-home" element={ <CoSupHome /> } />
        <Route path="/cosup-signup" element={ <CoSupervisorSignUp /> } />
        <Route path="/cosup-login" element={ <CoSupLogin /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;