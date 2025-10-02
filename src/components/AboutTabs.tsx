import { useState } from "react";

export function InfoTabs() {
  const [activeTab, setActiveTab] = useState<string | null>("about");

  const toggleTab = (tab: string) => {
    setActiveTab(prev => (prev === tab ? null : tab)); // Toggle
  };

  return (
    <div className="w-[400px]">
      <div className="flex space-x-2 border-b border-blue-200">
        {["about", "projects", "contact"].map(tab => (
          <button
            key={tab}
            onClick={() => toggleTab(tab)}
            className={`bg-blue-100 p-4 rounded-t cursor-pointer hover:bg-blue-50 transition px-6
              ${activeTab === tab ? "border-b-2 border-blue-500" : ""}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === "about" && (
        <div className="bg-blue-50 p-4 rounded-b">
          This is the About Me tab
        </div>
      )}
      {activeTab === "projects" && (
        <div className="bg-blue-50 p-4 rounded-b">
          This is the Projects tab
        </div>
      )}
      {activeTab === "contact" && (
        <div className="bg-blue-50 p-4 rounded-b">
          This is the Contact tab
        </div>
      )}
    </div>
  );
}
