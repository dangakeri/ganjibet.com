import { useState } from "react";

import { useAppState } from "../context/AuthContext";
import AuthNavs from "./auth/AuthNavs";
import { Link } from "react-router";
import Deposit from "./auth/Deposit";

function Navbar({}) {
  const { user } = useAppState();

  const [isModalOpen, setIsModalOpen] = useState(false);
  function showModal() {
    setIsModalOpen(true);
  }

  return (
    <nav className="flex justify-between items-center w-full lg:p-4 px-2 py-2 bg-[#23313d] text-textGrey ">
      <div>
        <Link to={`/`}>
          <img
            src="/assets/swiftbetlogo.svg"
            alt="logo"
            className="h-[3rem] lg:w-[10rem] xs:w-[8rem] xs:h-[3rem]"
          />
        </Link>
      </div>
      {!user && <AuthNavs />}
      {user && <Deposit showModal={showModal} showModalOpen={isModalOpen} />}
    </nav>
  );
}

export default Navbar;
