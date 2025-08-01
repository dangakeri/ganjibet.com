import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import DepositHeader from "../../../components/games/DepositHeader";
import Loader from "../../../components/Loader";
import { useLaunchImoonGame } from "../../../hooks/useGames";

function ImoonPlayGame() {
  const [launchURL, setLaunchURL] = useState("");
  const { gameID } = useParams();

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userID = user?.userID;

  const { launchImoonGames, isLoading } = useLaunchImoonGame();

  useEffect(function () {
    if (!gameID || !userID) return;
    let hasLaunched = false;
    const data = {
      gameID,
      userID,
      homeAction: "POST_MESSAGE", // Add homeAction parameter
      homeUrl: window.location.origin, // Add homeUrl parameter (or your specific home URL
    };

    if (!hasLaunched) {
      launchImoonGames(data, {
        onSuccess: (data) => {
          setLaunchURL(data?.data?.url);
        },
      });
    }
    hasLaunched = true;
  }, []);

  // Add message handler for iframe communication
  useEffect(() => {
    function handleiMoonMessages(message) {
      if (!message.data) return;
      const { action, payload } = message.data;
      switch (action) {
        case "HOME":
          handleHomeAction(payload);
          break;
        case "INSUFFICIENT_FUNDS":
          handleInsufficientFunds(payload);
          break;
      }
    }

    window.addEventListener("message", handleiMoonMessages);

    return () => {
      window.removeEventListener("message", handleiMoonMessages);
    };
  }, []);

  // Define action handlers
  function handleHomeAction(payload) {
    // window.location.href = "/";
    navigate("/");
  }

  function handleInsufficientFunds(payload) {
    toast.error("Insufficient funds top up to continue playing");
  }

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

export default ImoonPlayGame;
