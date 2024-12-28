"use client";

import React from "react";
import Button from "@/components/authComp/signInButton"; // Assuming your Button component is here

const LoginPanel = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <div className="text-right">
          <button
            className="text-gray-500 hover:text-gray-800 font-semibold"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <h2 className="text-xl font-bold text-center mb-4">Login Required</h2>
        <p className="text-gray-600 text-center mb-6">
          Please log in to continue.
        </p>
        <div className="flex justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default LoginPanel;