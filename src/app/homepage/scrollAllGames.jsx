import BetsCard from "../../components/games/BetsCard";
import {
  useGames,
  useGetElbetGames,
  useImoonGames,
  useVimPlayGames,
} from "../../hooks/useGames";
import { useParams } from "react-router";
import { IMAGE_URL } from "../../utils/configs";
import Navbar from "../../components/Navbar";
import MoveBack from "../../components/MoveBack";
import CorouselBanner from "../../components/games/corouselBanner";
import ElbetBetsCard from "../../components/games/ElbetBetsCard";
import VimplayBetsCard from "../../components/games/VimplayBetsCrad";
import ImoonBetsCard from "../../components/games/ImoonBetsCard";

function ScrollAllGames() {
  const { games, isLoading } = useGames();
  const { imoonGames } = useImoonGames();
  const { vimPlayGames } = useVimPlayGames();
  const { elbetGames } = useGetElbetGames();

  return (
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      <MoveBack />
      <CorouselBanner />
      <div className="grid grid-cols-3 md:grid-cols-4 xs:grid-cols-3 gap-3  mx-4 overflow-x-hidden overflow-y-auto lg:mb-20 mb-32 lg:mt-10">
        {games?.map((game, i) => (
          <BetsCard
            key={i}
            src={`${IMAGE_URL}${game?.image}`}
            gameName={game?.title}
            provider={game?.provider}
          />
        ))}
        {imoonGames?.map((game, i) => (
          <ImoonBetsCard
            key={i}
            src={`${IMAGE_URL}/${game?.image}`}
            gameID={game?.gameId}
          />
        ))}{" "}
        {vimPlayGames?.map((game, i) => (
          <VimplayBetsCard
            key={i}
            src={`${IMAGE_URL}/${game?.image}`}
            gameID={game?.gameId}
          />
        ))}{" "}
        {/* {elbetGames?.games?.map((game, i) => (
          <ElbetBetsCard
            key={i}
            src={game.Image}
            gameName={game.GameName}
            gameAlias={game.GameAlias}
            gameID={game.GameID}
          />
        ))} */}
      </div>
    </div>
  );
}

export default ScrollAllGames;
