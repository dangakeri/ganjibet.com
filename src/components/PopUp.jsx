import { CircleX } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useANewppState } from "../context/ModalContext";

function PopUp() {
  const [showPopup, setShowPopup] = useState(true);
  const { updateInitialRound, dispatch } = useANewppState();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("popupDismissed");
    if (!hasSeenPopup) {
      setShowPopup(true);
    }
  }, []);

  const closePopup = () => {
    setShowPopup(false);
    updateInitialRound();
    localStorage.setItem("popupDismissed", "true");
  };

  return (
    showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
        <div className="relative">
          <CircleX
            className="text-gray-400 absolute -top-9 -right-4 rounded-full w-8 h-8 flex items-center justify-center text-sm shadow-md z-50"
            onClick={closePopup}
          />
          <div className="bg-white rounded-3xl shadow-lg max-w-md w-full overflow-hidden">
            <div className="w-full h-[24rem]">
              <img
                src={"assets/popup.png"}
                alt="Promo"
                className="w-full h-full object-fit rounded-t-lg"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default PopUp;
