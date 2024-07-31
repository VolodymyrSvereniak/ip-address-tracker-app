import styles from "./LocationInfo.module.scss";

const LocationInfo = () => {
  const aboutLocation = [
    {
      title: "IP ADDRESS",
      description: "IP",
    },
    {
      title: "LOCATION",
      description: "Location",
    },
    {
      title: "TIMEZONE",
      description: "Zone",
    },
    {
      title: "ISP",
      description: "ISP",
    },
  ];

  return (
    <div className={styles.container}>
      {aboutLocation.map((info, i) => (
        <div className={styles.infoGroup}>
          <h6 key={i}>{info.title}</h6>
          <p>{info.description}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationInfo;
