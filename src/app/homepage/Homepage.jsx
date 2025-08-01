import BetsCard from "../../components/games/BetsCard";
import CorouselBanner from "../../components/games/corouselBanner";
import Navbar from "../../components/Navbar";
import {
  useGames,
  useGetElbetGames,
  useImoonGames,
  useVimPlayGames,
} from "../../hooks/useGames";
import { IMAGE_URL } from "../../utils/configs";
import { Link } from "react-router";
import Footer from "../../components/profile/Footer";
import TopScrollNav from "../../components/games/TopScrollNav";
import NewShape from "../../components/homepage/NewShape";
import RecentWins from "../../components/homepage/RecentWins";
import GameWinnerMarquee from "../../components/games/GameWinnerMarquee";
import PopUp from "../../components/PopUp";
import HotShape from "../../components/homepage/HotShape";
import { useANewppState } from "../../context/ModalContext";
import ImoonBetsCard from "../../components/games/ImoonBetsCard";
import useWindowSize from "../../hooks/useWindowSize";
import { popularGames } from "../../utils/PopularGames";
import VimplayBetsCard from "../../components/games/VimplayBetsCrad";
import { useRef } from "react";
import ElbetBetsCard from "../../components/games/ElbetBetsCard";

function Homepage() {
  const { games } = useGames();

  const { width } = useWindowSize();

  const mobileDevice = 600;
  const isMobile = width < mobileDevice;
  const { initialRound } = useANewppState();
  const sessionRound = sessionStorage.getItem("initialRound");

  const { imoonGames } = useImoonGames();
  const { vimPlayGames } = useVimPlayGames();
  const { elbetGames } = useGetElbetGames();

  const remaiderImoonGames = imoonGames?.slice(7, 15);
  const hotImoonGames = imoonGames?.slice(14, -1);

  // Get aviator games
  const aviator = games?.filter((game) => game.title === "aviator");

  // Get Popular Games
  const newPopularGames = imoonGames?.filter((game) =>
    popularGames.includes(game?.gameId)
  );

  const allPopularGames = [aviator?.at(0)];

  if (newPopularGames && newPopularGames.length > 0) {
    allPopularGames.push(...newPopularGames);
  }

  const showGames = isMobile
    ? allPopularGames.slice(0, 7)
    : allPopularGames.slice(0, 9);

  // Create separate refs for each game section
  const topGamesRef = useRef(null);
  const popularGamesRef = useRef(null);
  const hotGamesRef = useRef(null);
  const moneyMakersRef = useRef(null);

  return (
    <>
      <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
        {initialRound == 0 && sessionRound != 1 && <PopUp />}
        <Navbar />
        <TopScrollNav />
        <RecentWins />
        <h2 className="text-md font-medium text-textGrey mx-2 ">Promotions</h2>
        <CorouselBanner />
        <div className="xs:bg-gradient-to-b from-primary/40  to-secondary rounded-t-2xl py-2 xs:py-2">
          <div className="flex justify-between items-center px-2 lg:pt-4 pb-2">
            <h2 className="text-md flex font-medium text-textGrey">
              <span className="">🔥</span> Top Games
            </h2>
            <div className="flex justify-center items-center gap-2">
              <Link
                to={`/viewAll/spribe`}
                state={allPopularGames}
                className="text-sm text-primary/50 cursor-pointer border p-1 border-primary/50 rounded-lg"
              >
                View All &rarr;
              </Link>
              {/* <ArrowSwitcher */}
              {/* // onLeftClick={createScrollHandler(topGamesRef, "left")}
              // onRightClick={createScrollHandler(topGamesRef, "right")} */}
              {/* /> */}
            </div>
          </div>
          {/* Games Grid */}
          <div
            ref={topGamesRef}
            // className="grid grid-flow-col auto-cols-[minmax(120px,1fr)] md:auto-cols-[minmax(150px,1fr)] gap-3 mx-4 overflow-x-auto scrollbar-hide pb-4"
            className="grid grid-cols-3 md:grid-cols-4 xs:grid-cols-3 gap-3  mx-4 overflow-x-hidden overflow-y-auto"
          >
            {games?.slice(0, 1).map((game, i) => (
              <BetsCard
                key={i}
                src={`${IMAGE_URL}${game?.image}`}
                gameName={game?.title}
                provider={game?.provider}
              />
            ))}

            {showGames.slice(1, -1).map((game, i) => (
              <ImoonBetsCard
                key={i}
                src={`${IMAGE_URL}/${game?.image}`}
                gameID={game?.gameId}
              />
            ))}
          </div>
        </div>
        <GameWinnerMarquee />
        <div className="xs:bg-gradient-to-b from-[#00C000]/40  to-secondary rounded-t-2xl py-2 xs:my-4">
          <div className="flex justify-between items-center px-2 py-2">
            <NewShape
              title="Popular Games"
              color="#00C000"
              subtitle="POPULAR"
            />
            <div className="flex justify-center items-center gap-2">
              <Link
                to={`/viewAll/imoon`}
                className="text-sm text-[#00C000] cursor-pointer border p-1 border-[#00C000] rounded-lg"
              >
                View All &rarr;
              </Link>
            </div>
          </div>{" "}
          <div
            ref={popularGamesRef}
            className="grid grid-cols-3 md:grid-cols-4
         xs:grid-cols-3 gap-3 mx-4 overflow-x-hidden overflow-y-auto"
          >
            {remaiderImoonGames?.slice(0, isMobile ? 6 : 8).map((game, i) => (
              <ImoonBetsCard
                key={i}
                src={`${IMAGE_URL}/${game?.image}`}
                gameID={game?.gameId}
              />
            ))}
          </div>
        </div>
        <div className="xs:bg-gradient-to-b from-orange-400/40  to-secondary rounded-t-2xl py-2">
          <div className="flex justify-between items-center px-2 py-2">
            <HotShape />

            <div className="flex justify-center items-center gap-2">
              <Link
                to={`/viewAll/vimplay`}
                className="text-sm text-orange-400 cursor-pointer border p-1 border-orange-400 rounded-lg"
              >
                View All &rarr;
              </Link>
            </div>
          </div>{" "}
          <div
            ref={hotGamesRef}
            className="grid grid-cols-3 md:grid-cols-4
         xs:grid-cols-3 gap-3 mx-4 overflow-x-hidden overflow-y-auto"
          >
            {vimPlayGames?.slice(0, isMobile ? 6 : 8).map((game, i) => (
              <VimplayBetsCard
                key={i}
                src={`${IMAGE_URL}/${game?.image}`}
                gameID={game?.gameId}
              />
            ))}
          </div>
        </div>{" "}
        <div className="xs:bg-gradient-to-b from-[#FF3B3B]/40  to-secondary rounded-t-2xl py-2 xs:my-4">
          <div className="flex justify-between pt-4 items-center p-2 ">
            <NewShape title="Money Makers" color="#FF3B3B" subtitle="New" />

            <div className="flex justify-center items-center gap-2">
              <Link
                to={`/viewAll/spribe`}
                className="text-sm text-[#FF3B3B] cursor-pointer border p-1 border-[#FF3B3B] rounded-lg"
              >
                View All &rarr;
              </Link>
            </div>
          </div>
          <div
            ref={moneyMakersRef}
            className="grid grid-cols-3 md:grid-cols-4
         xs:grid-cols-3 gap-3 mx-4 overflow-x-hidden overflow-y-auto"
          >
            {games
              ?.filter((game) => game.provider == "spribe")
              .slice(0, isMobile ? 6 : 8)
              .map((game, i) => (
                <BetsCard
                  key={i}
                  src={`${IMAGE_URL}${game?.image}`}
                  gameName={game?.title}
                  provider={game?.provider}
                />
              ))}
          </div>
        </div>
        <div className="xs:bg-gradient-to-b from-[#FF3B3B]/40  to-secondary rounded-t-2xl py-2 xs:my-4">
          <div className="flex justify-between pt-4 items-center p-2 ">
            <NewShape title="Money Makers" color="#FF3B3B" subtitle="New" />

            <div className="flex justify-center items-center gap-2">
              <Link
                to={`/viewAll/elbet`}
                className="text-sm text-[#FF3B3B] cursor-pointer border p-1 border-[#FF3B3B] rounded-lg"
              >
                View All &rarr;
              </Link>
            </div>
          </div>
          {/*  */}
          <div
            className="grid grid-cols-3 md:grid-cols-4
         xs:grid-cols-3 gap-3 mx-4 overflow-x-hidden overflow-y-auto"
          >
            {elbetGames?.games?.slice(0, isMobile ? 6 : 8).map((game, i) => (
              <ElbetBetsCard
                key={i}
                src={game.Image}
                gameName={game.GameName}
                gameAlias={game.GameAlias}
                gameID={game.GameID}
              />
            ))}
          </div>
        </div>
        <Footer />
        <div className="pb-10"></div>
      </div>
    </>
  );
}
export default Homepage;
