import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/NotFound";
import FirstpagePage from "pages/Firstpage";
import ProfiletabPage from "pages/Profiletab";
const Mainpagematchtab = React.lazy(() => import("pages/Mainpagematchtab"));
const RegisterboxModal = React.lazy(() => import("modals/Registerbox"));
const Firstpage = React.lazy(() => import("pages/Firstpage"));
const Profiletab = React.lazy(() => import("pages/Profiletab"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FirstpagePage />} >
          <Route path="/registerbox" element={<RegisterboxModal />} /> 
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/mainpagematchtab" element={<Mainpagematchtab />} />
          <Route path="/profile" element={<ProfiletabPage />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
