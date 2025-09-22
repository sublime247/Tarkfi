"use client"

import { useState } from "react"
import { Sidebar } from "@/app/components/sidebar"
import { Header } from "./components/header"
import Dashboard from "./dashboard/dashboard"
import Policies from "./policies/policies"

export default function Page() {
  const [activeTab, setActiveTab] = useState("Dashboard")

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return (
          <Dashboard />
        );
      case "Policies":
        return (
          <Policies />
        )
      case "Claims":
        return (
          <div className="">
            {/* <div className="flex items-center justify-center h-full">
              <h2 className="text-3xl font-bold text-white">Claims Content</h2>
            </div> */}
          </div>
        )
      case "Surplus & Reports":
        return (
          <div className="">
            {/* <div className="flex items-center justify-center h-full">
              <h2 className="text-3xl font-bold text-white">Claims Content</h2>
            </div> */}
          </div>
        )
      case "Settings":
        return (
          <div className="">
            {/* <div className="flex items-center justify-center h-full">
            <h2 className="text-3xl font-bold text-white">Claims Content</h2>
          </div> */}
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen bg-[#0B0F0E] overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex flex-1 flex-col min-w-0">
        {/* Header - stays the same */}
        <Header />

        {/* Dynamic Content Area - Now scrollable */}
        <main className="flex-1 p-6 overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
