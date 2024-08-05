import { useInputStore } from "../Header/useInputStore";

export const processCurrentLocationData = () => {
  const locationData = useInputStore((state) => state.setCurrentLocationData);

  const { location = [] } = locationData;
  const locationDestructure = Object.values(location).slice(0, 2).join(" ,");

  const aboutLocation = [
    {
      title: "IP ADDRESS",
      description: locationData.ip,
    },
    {
      title: "LOCATION",
      description: locationDestructure,
    },
    {
      title: "TIMEZONE",
      description: locationData?.location?.timezone,
    },
    {
      title: "ISP",
      description: locationData.isp,
    },
  ];
  return aboutLocation
};
