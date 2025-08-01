import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import { useAppState } from "../../context/AuthContext";

function VimplayBetsCard({ src, gameTitle, gameID }) {
  const { user } = useAppState();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div
        onClick={() => {
          toast.error("Sign In to get started");
          navigate("/login");
        }}
        className="rounded-2xl cursor-pointer flex flex-col justify-center items-center object-cover mt-4 bg-secondary"
      >
        <img
          src={src}
          crossOrigin="anonymous"
          alt=""
          className="object-fill h-full w-full  rounded-md"
        />
      </div>
    );
  }

  return (
    <Link
      to={`/vimplay/${gameID}`}
      className="rounded-lg cursor-pointer flex flex-col justify-center items-center object-cover bg-secondary"
    >
      <img
        src={src}
        crossOrigin="anonymous"
        alt=""
        className="object-fill h-full w-full  rounded-md"
      />
    </Link>
  );
}
export default VimplayBetsCard;
