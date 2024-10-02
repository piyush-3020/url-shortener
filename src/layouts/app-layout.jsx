import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
      <Outlet />
      </main>

      <div className="p-5 text-center bg-gray-800 mt-2">
        <p className="font-mono">Made by Piyush Rathwe</p>
        <p className="font-mono">© 2024 All rights reserved.</p>
      </div>
    </div>
  );
}

export default AppLayout;
