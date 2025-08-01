import BetsCard from "../../components/games/BetsCard";
import { useGames } from "../../hooks/useGames";
import { useParams } from "react-router";
import { IMAGE_URL } from "../../utils/configs";
import MoveBack from "../../components/MoveBack";
import CorouselBanner from "../../components/games/corouselBanner";
function AllGames() {
  const { games, isLoading } = useGames();
  const { provider } = useParams();
  return (
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      <MoveBack />
      <CorouselBanner />
      <div className="grid grid-cols-3 md:grid-cols-3 xs:grid-cols-3 gap-4 m-4 overflow-x-hidden overflow-y-auto mb-20">
        {games.map((game, i) => (
          <BetsCard
            key={i}
            src={`${IMAGE_URL}/games/${game?.provider}/${game?.alias}.png`}
            gameName={game?.alias}
            gameAlias={game?.provider}
          />
        ))}
      </div>
    </div>
  );
}

export default AllGames;
