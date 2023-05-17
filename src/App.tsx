import React, { Suspense } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes/index";
import Appbar from "./components/appbar";
import { Routes as RoutesType } from "./routes/types";

import Sidebar from "./components/sidebar/sidebar";
function App() {
  // const location = useLocation();

  const generateRoutes = (routeList: RoutesType) => {
    return routeList.map(({ path, component: Component }, index) => (
      <Route key={index} path={path} element={<Component />} />
    ));
  };

  return (
    <>
      <Suspense fallback={true}>
        <Router>
          <Appbar />
          <Sidebar />
          <Routes>{generateRoutes(routes)}</Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
