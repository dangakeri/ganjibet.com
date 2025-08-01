import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import DepositHeader from "../../components/games/DepositHeader";
import { useLaunchSportGame } from "../../hooks/useGames";

function LaunchSports() {
  const [launchURL, setLaunchURL] = useState("");
  const { launchSport, isLoading, error } = useLaunchSportGame();

  useEffect(function () {
    let hasLaunched = false;
    const _ = "";
    if (!hasLaunched) {
      launchSport(_, {
        onSuccess: (data) => {
          setLaunchURL(data?.url);
        },
      });
    }

    hasLaunched = true;
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <DepositHeader />
      <iframe
        className="w-full h-[calc(100dvh-3.5rem)] lg:h-[calc(100vh-2.5rem)] border-none bg-bgBody"
        src={launchURL}
      ></iframe>
    </>
  );
}

export default LaunchSports;
