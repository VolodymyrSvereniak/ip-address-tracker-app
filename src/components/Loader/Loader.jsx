import { dotPulse } from "ldrs";

export const LoadingDots = () => {
  dotPulse.register();

  return <l-dot-pulse size="43" speed="1.3" color="black"></l-dot-pulse>;
};
