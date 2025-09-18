"use client";

import { useState } from "react";
import { EditIcon } from "lucide-react";
import IndividualModal from "../components/individual_modal";

export default function Policies() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="">
        <div className="flex items-center justify-between h-full p-5">
          <h2 className="text-xl font-bold text-white">Active Policies</h2>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#12D96A] hover:bg-[#0FC55E] px-6 py-2 rounded-md text-black transition-colors"
            > 
              <EditIcon className="w-4 h-4 inline-block mr-2" /> 
              <span className="text-sm">Create Policy</span>
            </button>
          </div>
        </div>
      </div>
      
      <IndividualModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
