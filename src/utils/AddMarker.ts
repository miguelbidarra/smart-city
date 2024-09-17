import maplibre from "maplibre-gl";

interface PointData {
  coordinates: [number, number];
  name: string;
  availableTechnology: string[];
}

export const addPoints = (
  map: maplibre.Map,
  pointsArray: PointData[],
  onMarkerClick: (pointData: PointData) => void
) => {
  pointsArray.forEach((point) => {
    const { coordinates, name, availableTechnology } = point;
    if (coordinates && !isNaN(coordinates[0]) && !isNaN(coordinates[1])) {
      const marker = new maplibre.Marker().setLngLat(coordinates).addTo(map);
      marker.getElement().addEventListener("click", () => onMarkerClick(point));
    } else {
      console.error(`Invalid coordinates for point: ${name}`);
    }
  });
};