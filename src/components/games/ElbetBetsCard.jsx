import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../../context/AuthContext";
import toast from "react-hot-toast";

function ElbetBetsCard({ src, gameName, gameAlias, gameID }) {
  const { user } = useAppState();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div
        onClick={() => {
          toast.error("Sign In to get started");
          navigate("/login");
        }}
        className="rounded-2xl lg:rounded-lg cursor-pointer flex flex-col justify-center items-center object-cover bg-secondary"
      >
        <img
          src={src}
          // crossOrigin="anonymous"
          alt={gameName}
          className="object-fill h-full w-full  rounded-md"
        />
      </div>
    );
  }

  return (
    <Link
      to={`/elbet/${gameAlias}/${gameID}`}
      className="rounded-2xl cursor-pointer flex flex-col justify-center items-center object-cover bg-secondary"
    >
      <img
        src={src}
        // crossOrigin="anonymous"
        alt={gameAlias}
        className="object-fill h-full w-full  rounded-md"
      />
    </Link>
  );
}
export default ElbetBetsCard;
