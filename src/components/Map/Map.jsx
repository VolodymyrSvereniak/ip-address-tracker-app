import { useEffect, useRef } from "react";
import styles from "./Map.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useInputStore } from "../Header/useInputStore";
import { LoadingDots } from "../Loader/Loader";

const Map = () => {
  const coordinates = useInputStore((state) => state.setCurrentLocationData);
  const status = useInputStore((state) => state.status);
  
  const latitude = coordinates?.location?.lat;
  const longitude = coordinates?.location?.lng;

  const mapRef = useRef();

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView([latitude, longitude], 13, {
        animate: false,
      });
    }
  }, [mapRef, latitude, longitude]);

  if (status === "pending") {
    return (
      <div className={styles.loader}>
        <LoadingDots />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <MapContainer
        ref={mapRef}
        center={[latitude, longitude]}
        zoom={13}
        attributionControl={false}
        scrollWheelZoom={false}
        whenCreated={(map) => (mapRef.current = map)}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]}>
          <Popup>You're current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
