import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../../components/Loader";
import DepositHeader from "../../components/games/DepositHeader";
import { useLaunchVimplayGames } from "../../hooks/useGames";

function LaunchVimPlayGames() {
  const [launchURL, setLaunchURL] = useState("");
  const { gameID } = useParams();

  const users = JSON.parse(localStorage.getItem("user"));
  const userID = users?.userID;

  const { LaunchVimPlay, isLoading } = useLaunchVimplayGames();

  useEffect(function () {
    if (!gameID || !userID) return;
    let hasLaunched = false;

    const data = {
      gameID,
      userID,
    };

    if (!hasLaunched) {
      LaunchVimPlay(data, {
        onSuccess: (data) => {
          setLaunchURL(data?.data?.gameUrl);
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
        style={{ height: "100vh", width: "100vw" }}
        src={launchURL}
        title="Game"
      ></iframe>
    </>
  );
}

export default LaunchVimPlayGames;
