import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

import BallSpinner from "../../components/BallSpinner";
import DepositModal from "../../components/payment/DepositModal";
import { useLaunchElbetGame } from "../../hooks/useGames";

function LaunchElbetGame() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [launchURL, setLaunchURL] = useState("");
  const { gameAlias, gameID } = useParams();
  const { launchElbetGames, isLoading, error } = useLaunchElbetGame();
  const navigate = useNavigate();

  console.log(error);

  function showModal() {
    setIsModalOpen(true);
  }

  function handleOk() {
    setIsModalOpen(false);
  }

  function handleCancel() {
    setIsModalOpen(false);
  }

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    console.log(gameAlias, gameID);
    if (!gameAlias || !gameID) return;
    const data = { game: gameAlias, gameID: gameID };

    launchElbetGames(data, {
      onSuccess: (data) => {
        setLaunchURL(data?.launchUrl);
      },
      onError: (err) => {},
    });
  }, [gameAlias, gameID, launchElbetGames]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <BallSpinner />
      </div>
    );
  }

  if (error) {
    console.log(error);
    return (
      <div className="text-center text-red-500">Failed to launch game</div>
    );
  }

  return (
    <>
      <DepositModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <div
        className="h-10 bg-primary text-black flex cursor-pointer items-center"
        onClick={showModal}
      >
        <div
          onClick={handleGoBack}
          className="h-10 w-10 mr-4 text-textGrey flex items-center justify-center bg-[#B89C00]"
        >
          &larr;
        </div>
        <span className="absolute left-1/2 transform -translate-x-1/2 font-medium text-sm">
          Deposit
        </span>
      </div>

      {launchURL && (
        <iframe
          src={launchURL}
          className="w-full h-[calc(100vh-2.5rem)] border-none"
          title="Elbet Game"
          allowFullScreen
        />
      )}
    </>
  );
}

export default LaunchElbetGame;
