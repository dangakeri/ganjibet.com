import { useState, useEffect } from "react";
import DepositModal from "../payment/DepositModal";
import { Coin } from "iconsax-react";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";
import { useUpdateBalance } from "../../hooks/usePayment";

function Deposit({ showModal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { balance, isLoading } = useUpdateBalance();

  const formatCurrency = useFormatCurrency();

  function showModal() {
    setIsModalOpen(true);
  }
  function handleOk() {
    setIsModalOpen(false);
  }
  function handleCancel() {
    setIsModalOpen(false);
  }

  return (
    <div className="space-x-4 flex flex-row">
      <DepositModal
        open={isModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
      />

      <div className="flex flex-row">
        <div className="bg-[#FF6D00]/90 flex flex-row justify-center items-center pr-2 lg:rounded-full rounded mx-1">
          {/* Coin is hidden on small and shown on md+ */}
          <div className="hidden md:block">
            <Coin
              size="32"
              color="#000"
              className="bg-primary rounded-full p-1 mr-1"
            />
          </div>

          <p
            onClick={showModal}
            className="font-bold text-sm text-black pl-2 md:pl-0 cursor-pointer"
          >
            {formatCurrency(balance?.walletBalance)}
          </p>
        </div>

        <button
          className="px-3 py-1.5 bg-primary text-black text-sm font-normal min-w-max lg:rounded-2xl rounded"
          onClick={showModal}
        >
          <div className="flex gap-1 items-center justify-center">Deposit</div>
        </button>
      </div>
    </div>
  );
}

export default Deposit;
