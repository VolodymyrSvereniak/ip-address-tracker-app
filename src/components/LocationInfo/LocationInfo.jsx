import styles from "./LocationInfo.module.scss";

const LocationInfo = () => {
  const aboutLocation = [
    {
      title: "IP ADDRESS",
      description: "31.43.234.28",
    },
    {
      title: "LOCATION",
      description: "Ukraine, Uzhhorods'ka city council 88000",
    },
    {
      title: "TIMEZONE",
      description: "UTC 2",
    },
    {
      title: "ISP",
      description: "LLC Electron sevlush",
    },
  ];

  return (
    <div className={styles.container}>
      {aboutLocation.map((info) => (
        <div className={styles.infoGroup} key={info.title}>
          <span>{info.title}</span>
          <strong>{info.description}</strong>
        </div>
      ))}
    </div>
  );
};

export default LocationInfo;
