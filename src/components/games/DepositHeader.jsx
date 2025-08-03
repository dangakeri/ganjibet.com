import { useState } from "react";
import { useNavigate } from "react-router";
import DepositModal from "../payment/DepositModal";

function DepositHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);
  const handleGoBack = () => navigate(-1);

  return (
    <>
      <DepositModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />
      <div
        className="h-10 bg-primary text-black flex cursor-pointer items-center"
        onClick={showModal}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleGoBack();
          }}
          className="h-10 w-10 mr-4 cursor-pointer text-white flex items-center justify-center bg-[#FF6D00]/40"
        >
          &larr;
        </div>
        <span className="absolute left-1/2 transform -translate-x-1/2 font-medium text-sm text-white">
          Deposit
        </span>
      </div>
    </>
  );
}

export default DepositHeader;
