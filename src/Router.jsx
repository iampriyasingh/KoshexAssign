import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Investor from "./pages/Investor";
import SideBar from "./Components/Sidebar/Sidebar";
import Offering from "./pages/Offerings";
import Reporting from "./pages/Reporting";
import Transaction from "./pages/Transaction";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <div className="flex overflow-hidden h-screen w-full">
              <SideBar />
              <div className="flex w-full h-full overflow-y-auto">
                <Outlet />
              </div>
            </div>
          }
        >
          <Route path="" element={<Home />} />
          <Route path="investor" element={<Investor />} />
          <Route path="offerings" element={<Offering />} />
          <Route path="reporting" element={<Reporting />} />
          <Route path="transactions" element={<Transaction />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
