import { useLocation, useParams } from "react-router-dom";
import { IMAGE_URL } from "../../utils/configs";
import MoveBack from "../../components/MoveBack";
import {
  useGames,
  useGetElbetGames,
  useImoonGames,
  useVimPlayGames,
} from "../../hooks/useGames";

import BetsCard from "../../components/games/BetsCard";
import CorouselBanner from "../../components/games/corouselBanner";
import ImoonBetsCard from "../../components/games/ImoonBetsCard";
import VimplayBetsCard from "../../components/games/VimplayBetsCrad";
import ElbetBetsCard from "../../components/games/ElbetBetsCard";

function ViewAllGames() {
  const { games: allGames, isLoading } = useGames();
  const { imoonGames } = useImoonGames();
  const { vimPlayGames } = useVimPlayGames();
  const { elbetGames } = useGetElbetGames();
  const { provider } = useParams();
  const location = useLocation();

  const stateGames = location.state;

  let games;

  if (provider === "imoon") {
    games = imoonGames;
  } else if (provider === "vimplay") {
    games = vimPlayGames;
  } else if (provider === "elbet") {
    games = elbetGames?.games ?? [];
  } else {
    games = allGames;
  }

  return (
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      <MoveBack />
      <CorouselBanner />

      {!stateGames && (
        <div className="grid grid-cols-3 md:grid-cols-4 xs:grid-cols-3 gap-2 m-2 overflow-x-hidden overflow-y-auto mb-28 lg:mt-10">
          {provider === "imoon"
            ? games?.map((game, i) => (
                <ImoonBetsCard
                  key={i}
                  src={`${IMAGE_URL}/${game?.image}`}
                  gameTitle={game?.title}
                  gameID={game?.gameId}
                />
              ))
            : provider === "vimplay"
            ? games?.map((game, i) => (
                <VimplayBetsCard
                  key={i}
                  src={`${IMAGE_URL}/${game?.image}`}
                  gameID={game?.gameId}
                />
              ))
            : provider === "elbet"
            ? games?.map((game, i) => (
                <ElbetBetsCard
                  key={i}
                  src={game.Image}
                  gameName={game.GameName}
                  gameAlias={game.GameAlias}
                  gameID={game.GameID}
                />
              ))
            : games?.map((game, i) => (
                <BetsCard
                  key={i}
                  src={`${IMAGE_URL}${game?.image}`}
                  gameName={game?.alias}
                  gameAlias={game?.provider}
                />
              ))}
        </div>
      )}

      {stateGames && (
        <div className="grid grid-cols-3 md:grid-cols-4 xs:grid-cols-3 gap-2 m-2 overflow-x-hidden overflow-y-auto mb-20 lg:mt-10">
          {stateGames
            ?.filter((game) => game?.alias === "aviator")
            .map((game, i) => (
              <BetsCard
                key={i}
                src={`${IMAGE_URL}${game?.image}`}
                gameName={game?.alias}
                gameAlias={game?.provider}
              />
            ))}

          {stateGames.slice(1).map((game, i) => (
            <ImoonBetsCard
              key={i}
              src={`${IMAGE_URL}/${game?.image}`}
              gameID={game?.gameId}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewAllGames;
