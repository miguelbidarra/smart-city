import React from "react";

interface PointData {
  id: number;
  name: string;
  coordinates: [number, number]; // Tuple with exactly two numbers
  availableTechnology: string[];
}

interface SidebarProps {
  data: PointData | null; // Match the PointData interface
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div
      role="dialog"
      className="fixed z-50 bg-gray-800 bg-opacity-70 text-white rounded-md shadow-md inset-y-0 left-0 h-full border-r p-0 m-0 flex flex-col gap-0 w-full sm:w-[20rem] md:w-[27rem] lg:w-[33rem] xl:w-[40rem] transition-transform transform translate-x-0"
      tabIndex={-1}
      style={{ animation: "slide-in 0.5s forwards" }}
    >
      <header className="sticky w-full flex justify-between items-center py-2 pl-4 pr-2 bg-gray-700 border-b border-gray-600">
        <h2 className="text-2xl font-normal">{data.name}</h2>
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Close
        </button>
      </header>
      <div dir="ltr" className="relative overflow-hidden h-full p-4">
        <h3 className="text-xl font-semibold">Available Technologies:</h3>
        <ul>
          {data.availableTechnology.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mt-4">Coordinates:</h3>
        <p>Longitude: {data.coordinates[0]}</p>
        <p>Latitude: {data.coordinates[1]}</p>
      </div>
    </div>
  );
};

export default Sidebar;
