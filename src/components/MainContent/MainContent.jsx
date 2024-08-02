import styles from "./MainContent.module.scss";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

const Main = () => {
  const RemoveControls = () => {
    const map = useMap();

    useEffect(() => {
      map.zoomControl.remove();
      map.attributionControl.remove();
      map.scrollWheelZoom.disable();
    }, [map]);
  };

  return (
    <div className={styles.container}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <RemoveControls />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            You're current location
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Main;
