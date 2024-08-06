import { useEffect } from "react";
import styles from "./LocationInfo.module.scss";
import { useInputStore } from "../Header/useInputStore";
import { processCurrentLocationData } from "./processCurrentLocationData";
import { LoadingDots } from "../Loader/Loader";

const LocationInfo = () => {
  const status = useInputStore((state) => state.status);

  const getDefaultLocation = useInputStore((state) => state.getDefaultLocation);
  const currentData = processCurrentLocationData();

  useEffect(() => {
    getDefaultLocation();
  }, []);

  if (status === "pending") {
    return (
      <div className={styles.container}>
        <LoadingDots />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {currentData.map((info) => (
        <div className={styles.infoGroup} key={info.title}>
          <span>{info.title}</span>
          <strong>{info.description}</strong>
        </div>
      ))}
    </div>
  );
};

export default LocationInfo;
