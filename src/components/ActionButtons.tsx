"use client";

import React from "react";
import Brightness2Icon from "@mui/icons-material/Brightness2"; // Moon icon
import VpnKeyIcon from "@mui/icons-material/VpnKey";

interface ActionButtonsProps {
  onToggleColorScheme: () => void;
  onKeyAction: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onToggleColorScheme,
  onKeyAction,
}) => {
  return (
    <div className="absolute top-4 right-4 z-50 flex space-x-4 p-2 bg-gray-800 text-white rounded-md shadow-md">
      <button
        onClick={onToggleColorScheme}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Toggle Color Scheme"
      >
        <Brightness2Icon />
      </button>
      <button
        onClick={onKeyAction}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Key Action"
      >
        <VpnKeyIcon />
      </button>
    </div>
  );
};

export default ActionButtons;
