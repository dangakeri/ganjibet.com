import { useEffect, useState } from "react";
// import DepositModal from "../payment/DepositModal";

import { useNavigate, useParams } from "react-router";
import BallSpinner from "../../components/BallSpinner";
import DepositModal from "../../components/payment/DepositModal";
import { useGameSession } from "../../hooks/useGames";
import DepositHeader from "../../components/games/DepositHeader";

function PlayGame() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function showModal() {
    setIsModalOpen(true);
  }
  function handleOk() {
    setIsModalOpen(false);
  }
  function handleCancel() {
    setIsModalOpen(false);
  }
  const { gameAlias } = useParams();

  const { launchGame, isLoading, error } = useGameSession();

  const [launchURL, setLaunchURL] = useState("");

  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    let hasLaunched = false;

    if (!hasLaunched) {
      const user = JSON.parse(localStorage.getItem("user"));
      const userID = user?.userID;

      const data = { userId: userID, game: gameAlias };
      launchGame(data, {
        onSuccess: (data) => {
          setLaunchURL(data?.launchUrl);
        },
        onError: () => {},
      });

      hasLaunched = true;
    }
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <BallSpinner />;
      </div>
    );
  }

  if (error) {
    return <div>Game Error</div>;
  }

  const launchUrl = launchURL;

  return (
    <>
      {" "}
      <DepositHeader />
      <iframe
        src={`${launchUrl}`}
        className="w-full h-[calc(100vh-2.5rem)] border-none"
        title="Game"
      ></iframe>
    </>
  );
}

export default PlayGame;
