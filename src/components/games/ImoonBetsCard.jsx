import { Link, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { useAppState } from "../../context/AuthContext";

function ImoonBetsCard({ src, gameTitle, gameID }) {
  const { user } = useAppState();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div
        onClick={() => {
          toast.error("Sign In to get started");
          navigate("/login");
        }}
        className="rounded-2xl cursor-pointer flex flex-col justify-center items-center object-cover  bg-bgheader"
      >
        <img
          src={src}
          crossOrigin="anonymous"
          alt={gameTitle}
          className="object-fill h-full w-full  rounded-md"
        />
      </div>
    );
  }

  return (
    <Link
      to={`/imoon/${gameID}`}
      className="rounded-lg cursor-pointer flex flex-col justify-center items-center object-cover  bg-bgheader"
    >
      <img
        src={src}
        crossOrigin="anonymous"
        alt={gameTitle}
        className="object-fill h-full w-full  rounded-md"
      />
    </Link>
  );
}
export default ImoonBetsCard;
