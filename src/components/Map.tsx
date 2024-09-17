// Map.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import maplibre from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css"; // Import maplibre's CSS
import Toolbar from "./MapToolbar";
import ActionButtons from "./ActionButtons";
import { addPoints } from "../utils/AddMarker"; // Import the addPoints function
import Sidebar from "./Sidebar"; // Import the Sidebar component
import pointsData from './../assets/points.json'; // Import the JSON file

const MapComponent = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef<maplibre.Map | null>(null);
  const [mapStyle, setMapStyle] = useState(
    "https://api.maptiler.com/maps/hybrid/style.json?key=wqdc5gEXJnvGfabAg3E3"
  );
  const [selectedPoint, setSelectedPoint] = useState<{ name: string; availableTechnology: string[] } | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapRef.current = new maplibre.Map({
        container: mapContainerRef.current,
        style: mapStyle, // Initial style URL
        center: [-8.650464, 40.640589],
        zoom: 15,
      });

      // Add multiple markers at specified coordinates using the addPoints function
      addPoints(mapRef.current, pointsData, setSelectedPoint);

      return () => mapRef.current?.remove();
    }
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setStyle(mapStyle);
    }
  }, [mapStyle]);

  const toggleMapStyle = () => {
    setMapStyle((prevStyle) =>
      prevStyle.includes("hybrid")
        ? "https://api.maptiler.com/maps/streets/style.json?key=wqdc5gEXJnvGfabAg3E3"
        : "https://api.maptiler.com/maps/hybrid/style.json?key=wqdc5gEXJnvGfabAg3E3"
    );
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.easeTo({
        zoom: mapRef.current.getZoom() + 1,
        duration: 1000, // Duration in milliseconds
      });
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.easeTo({
        zoom: mapRef.current.getZoom() - 1,
        duration: 1000, // Duration in milliseconds
      });
    }
  };

  const handleResetView = () => {
    if (mapRef.current) {
      mapRef.current.easeTo({
        center: [-8.650464, 40.640589], // Corrected coordinates for Portugal
        zoom: 15,
        duration: 500, // Duration in milliseconds
      });
    }
  };

  const handleToggleColorScheme = () => {
    // Your toggle color scheme logic
    console.log("Toggle Color Scheme");
  };

  const handleKeyAction = () => {
    // Your key action logic
    console.log("Key Action");
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <div ref={mapContainerRef} style={{ width: "100%", height: "100%" }} />
      <Toolbar onZoomIn={handleZoomIn} onZoomOut={handleZoomOut} onResetView={handleResetView} onToggleMapStyle={toggleMapStyle} />
      <ActionButtons onToggleColorScheme={handleToggleColorScheme} onKeyAction={handleKeyAction} />
      <Sidebar data={selectedPoint} onClose={() => setSelectedPoint(null)} />
    </div>
  );
};

export default MapComponent;