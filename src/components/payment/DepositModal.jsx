import { useState } from "react";
import { Modal, Input, Button } from "antd";
import toast from "react-hot-toast";
import DepositButton from "../profile/DepositButton";
import { useAppState } from "../../context/AuthContext";

// import { useUpdateBalance } from "../../hooks/useUpdateBalance";
import Loader from "../Loader";
import { useDeposit } from "../../hooks/usePayment";

function DepositModal({ open, onOk, onCancel, showDepositModal }) {
  const [amount, setAmount] = useState("");
  // const { updatingBalance, isLoading: gettingWalletBalance } =
  //   useUpdateBalance();

  const handleDepositClick = (value) => {
    setAmount(value);
  };

  const { user, updateUserWallet } = useAppState();

  const { makingPayment, isLoading } = useDeposit();
  function handlePayment() {
    const phone = user.phone;
    const userID = user.userID;

    if (+amount < 10) {
      toast.error("Try again with amount greater than ksh 10");
      return;
    }

    if (isLoading) return;
    makingPayment(
      { amount, phone, userID },
      {
        onSuccess: (dt) => {
          onCancel();
        },
        onError: (err) => {
          toast.error("Try again");
        },
      }
    );
    setAmount("");
  }

  return (
    <Modal
      className="custom-modal"
      open={open}
      onSubmit={showDepositModal}
      onOk={onOk}
      onCancel={onCancel}
      title="Deposit"
      footer={null}
    >
      <div className=" rounded-lg  duration-300 p-6">
        <p className="text-textGrey font-normal text-sm my-4">
          Deposit money to your Swiftbet account
        </p>
        <Input
          placeholder="Enter amount to deposit"
          className="border-bgheader"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="my-6 flex justify-between gap-5 flex-row">
          <DepositButton
            title="50"
            color="bg-primary"
            onClick={() => handleDepositClick("50")}
          />{" "}
          <DepositButton
            title="100"
            color="bg-primary"
            onClick={() => handleDepositClick("100")}
          />{" "}
          <DepositButton
            title="200"
            color="bg-primary"
            onClick={() => handleDepositClick("200")}
          />
          <DepositButton
            title="500"
            color="bg-primary"
            onClick={() => handleDepositClick("500")}
          />
        </div>
        <p className="text-textGrey my-6">Minimum KES10</p>
        <Button
          type="primar"
          className="bg-primary hover:bg-bgBody px-10 text-black"
          onClick={handlePayment}
        >
          {isLoading ? <Loader /> : "Deposit"}
        </Button>
      </div>
    </Modal>
  );
}

export default DepositModal;
