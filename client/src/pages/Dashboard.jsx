import { useLocation } from "react-router-dom";

import React, { useEffect, useState } from "react";
import DashSidebar from "../Components/DashSidebar";
import DashProfile from "../Components/DashProfile";
import DashboardComponent from "../Components/DashboardComponent";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="md:w-56">
        <DashSidebar />
      </div>

      {/* profile ... */}
      {tab === "profile" && <DashProfile />}

      {/* for dashboard */}
      {tab === "dash" && <DashboardComponent />}
    </div>
  );
}
