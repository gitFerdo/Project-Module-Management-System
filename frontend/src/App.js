import { BrowserRouter, Routes, Route } from "react-router-dom";

// Student pages
import StdSignUp from "./pages/student/StdSignUp";
import StdLogin from "./pages/student/StdLogin";
import StdHome from "./pages/student/StdHome";

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
import SupReportMarking from "./pages/supervisors/SupReportMarking";

// Co-Supervisor pages
import CoSupervisorSignUp from "./pages/co-supervisor/CoSupervisorSignUp";
import CoSupLogin from "./pages/co-supervisor/CoSupLogin";
import CoSupHome from "./pages/co-supervisor/CoSupHome";

// Project Member pages
import ProMemHome from "./pages/projectMembers/ProMemHome";
import CoSupReportMarking from "./pages/co-supervisor/CoSupReportMarking";

function App ()
{
  return (
    <BrowserRouter>
      <Routes>
        {/* Student Pages */ }
        <Route path="/std-home" element={ <StdHome /> } />
        <Route path="/std-pc-pm-signup" element={ <StdSignUp /> } />
        <Route path="/std-pc-pm-login" element={ <StdLogin /> } />

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
        <Route path="/sup-re-marking" element={ <SupReportMarking /> } />

        {/* Co-Supervisor Pages */ }
        <Route path="/cosup-home" element={ <CoSupHome /> } />
        <Route path="/cosup-signup" element={ <CoSupervisorSignUp /> } />
        <Route path="/cosup-login" element={ <CoSupLogin /> } />
        <Route path="/cosup-re-marking" element={ <CoSupReportMarking /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;