/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router";
import { useAppState } from "../../context/AuthContext";
import toast from "react-hot-toast";

function BetsCard({ src, gameName, provider }) {
  const { user } = useAppState();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div
        onClick={() => {
          toast.error("Sign In to get started");
          navigate("/login");
        }}
        className="rounded-2xl cursor-pointer flex flex-col justify-center items-center object-cover bg-secondary"
      >
        <img
          src={src}
          crossOrigin="anonymous"
          alt={gameName}
          className="object-fill h-full w-full  rounded-md"
        />
      </div>
    );
  }

  return (
    <Link
      to={`/playGame/${provider}/${gameName}`}
      className="rounded-2xl cursor-pointer flex flex-col justify-center items-center object-cover bg-secondary"
    >
      <img
        src={src}
        crossOrigin="anonymous"
        alt={gameName}
        className="object-fill h-full w-full  rounded-md"
      />
    </Link>
  );
}
export default BetsCard;
