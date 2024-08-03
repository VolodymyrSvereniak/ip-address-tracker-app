import styles from "./Map.module.scss";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  return (
    <div className={styles.container}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        zoomControl={false}
        attributionControl={false}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>You're current location</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
