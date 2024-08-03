import styles from "./LocationInfo.module.scss";
import { useInputStore } from "../Header/useInputStore";

const LocationInfo = () => {
  const currentLocationData = useInputStore(
    (state) => state.currentLocationData
  );
  const { location = [] } = currentLocationData;
  const locationDestructure = Object.values(location).slice(0, 2).join(' ,');

  const locationData = [
    {
      title: "IP ADDRESS",
      description: currentLocationData.ip,
    },
    {
      title: "LOCATION",
      description: locationDestructure,
    },
    {
      title: "TIMEZONE",
      description: currentLocationData?.location?.timezone,
    },
    {
      title: "ISP",
      description: currentLocationData.isp,
    },
  ];

  console.log(currentLocationData);

  return (
    <div className={styles.container}>
      {locationData?.map((info) => (
        <div className={styles.infoGroup} key={info.title}>
          <span>{info.title}</span>
          <strong>{info.description}</strong>
        </div>
      ))}
    </div>
  );
};

export default LocationInfo;
