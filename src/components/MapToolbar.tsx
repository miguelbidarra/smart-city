"use client";

import React, { useState } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import MapIcon from "@mui/icons-material/Map";
import LayersIcon from "@mui/icons-material/Layers";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined"; // 2D map icon
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation"; // 3D map icon
import SatelliteIcon from "@mui/icons-material/Satellite"; // Satellite view icon

interface ToolbarProps {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onResetView: () => void;
  onToggleMapStyle: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  onZoomIn,
  onZoomOut,
  onResetView,
  onToggleMapStyle,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="absolute bottom-4 right-4 z-50 flex flex-col space-y-4 p-2 bg-gray-800 text-white rounded-md shadow-md">
      <button
        onClick={onToggleMapStyle}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Layers"
      >
        <LayersIcon />
      </button>
      {drawerOpen && (
        <div className="absolute top-0 right-12 z-50 flex flex-col space-y-4 p-2 bg-gray-800 text-white rounded-md shadow-md">
          <button className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-label="2D Map">
            <MapOutlinedIcon />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-label="3D Map">
            <ThreeDRotationIcon />
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500" aria-label="Satellite View">
            <SatelliteIcon />
          </button>
        </div>
      )}
      <button
        onClick={onResetView}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Reset View"
      >
        <MapIcon />
      </button>
      <button
        onClick={onZoomIn}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Zoom In"
      >
        <ZoomInIcon />
      </button>
      <button
        onClick={onZoomOut}
        className="flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        aria-label="Zoom Out"
      >
        <ZoomOutIcon />
      </button>
    </div>
  );
};

export default Toolbar;