import { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Input, Badge } from "antd";
import DepositButton from "../../components/profile/DepositButton";
import Footer from "../../components/profile/Footer";
import { useAppState } from "../../context/AuthContext";
import LoginPage from "../Auth/LoginPage";

import toast from "react-hot-toast";
import Loader from "../../components/Loader";
import { Sun, Gift, WalletCards, ChevronRight, Headset } from "lucide-react";
import { Link } from "react-router";
import DeleteModal from "../../components/auth/DeleteAccountModal";
import { EmptyWallet } from "iconsax-react";
import { useFormatCurrency } from "../../hooks/useFormatCurrency";
import { debouncedWithdraw } from "../../utils/debounce";
import {
  useDeposit,
  useIssueKey,
  useUpdateBalance,
  useWithdraw,
} from "../../hooks/usePayment";
import Navbar from "../../components/Navbar";
import { loadTawk } from "../../components/profile/LoadTawk";

function ProfilePage() {
  const [amount, setAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loadBalance, setLoadBalance] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formatCurrency = useFormatCurrency();
  const { creatingKey, isLoading: isCreatingKey } = useIssueKey();
  const { balance, isLoading: gettingBalance } = useUpdateBalance();

  function showModal() {
    setIsModalOpen(true);
  }
  function handleOk() {
    setIsModalOpen(false);
  }
  function handleCancel() {
    setIsModalOpen(false);
  }

  const handleDepositClick = (value) => {
    setAmount(value);
  };
  const { logOut, user } = useAppState();
  const { makingPayment, isLoading } = useDeposit();
  const { withdrawingCash, isLoading: isWithdrawing } = useWithdraw();
  const account = JSON.parse(localStorage.getItem("user"));
  const phone = account?.phone;

  function handlePayment() {
    const phone = account?.phone;
    const userID = account?.userID;

    if (+amount < 10) {
      toast.error("Try again with amount greater than ksh 10");
      return;
    }

    if (isLoading) return;

    makingPayment(
      { amount, phone, userID },
      {
        onSuccess: (dt) => {
          setAmount("");
        },
      }
    );
  }

  const bonus = Math.floor(balance?.walletBalance * (10 / 100));

  function handleWithdraw() {
    debouncedWithdraw(withdrawAmount, () => {
      if (isWithdrawing) return;

      if (balance?.walletBalance === 0)
        return toast.error(
          "You don't have enough amount to make this transaction"
        );

      if (+withdrawAmount > balance?.walletBalance) {
        return toast.error(
          "You don't have enough amount to make this transaction"
        );
      }

      if (+withdrawAmount < 100) {
        return toast.error("Withdrawals start at Ksh 100 and above.");
      }

      creatingKey(
        {},
        {
          onSuccess: (data) => {
            if (data?.status == true) {
              const issueKey = data?.withdrawTransactionKey;
              withdrawingCash(
                { withdrawAmount, issueKey },
                {
                  onSuccess: (dt) => {
                    setWithdrawAmount("");
                  },
                  onError: (err) => {
                    toast.error(
                      err?.message ||
                        `Withdrawal of Ksh ${withdrawAmount} failed`
                    );
                  },
                }
              );
            } else {
              toast.error("Withdrawal failed");
            }
          },
          onError: (err) => {
            toast.error(err?.message || "Failed to create withdrawal key");
          },
        }
      );
    });
  }
  return (
    <>
      {user && (
        <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
          <Navbar />
          <div className="flex items-center justify-center mt-6">
            <Avatar
              className="bg-primary text-center"
              shape="circle"
              size={64}
              icon={<UserOutlined className="text-black" />}
            />
          </div>
          <p className="text-textGrey text-sm text-center font-semibold pt-4">
            {phone}
          </p>
          {/* Bonus and cash */}
          <div className="px-4 py-4">
            <div className="bg-secondary rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Balance Section */}
                <div className="flex items-center gap-3">
                  <WalletCards className="text-textGrey" />
                  <div>
                    <p className="text-textGrey font-semibold text-sm">
                      Balance
                    </p>
                    <p className="text-textGrey">
                      {loadBalance ? (
                        <Sun className="text-primary text-sm animate-spin-fast" />
                      ) : (
                        `${formatCurrency(balance?.walletBalance)}`
                      )}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-gray-700"></div>

                {/* Bonus Section */}
                <div className="flex items-center gap-3">
                  <Gift className="text-textGrey" />
                  <div>
                    <p className="text-textGrey font-semibold text-sm">Bonus</p>
                    <p className="text-textGrey text-sm">
                      {formatCurrency(bonus)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Free bets and promotions */}
          <div className="px-4 md:px-4 lg:px-4 py-0">
            <Link to={`/promotion`}>
              <Badge.Ribbon
                color="#FF6D00"
                text={<span style={{ color: "#fff" }}>New</span>}
                style={{ color: "#000" }}
              >
                <div className="bg-secondary rounded-lg shadow-sm transition-shadow duration-300 px-4 py-6">
                  <div className="flex justify-between items-center">
                    {/* Left Section: Icon and Text */}
                    <div className="flex items-center gap-3">
                      <Gift className="text-textGrey" />
                      <div>
                        <p className="text-textGrey font-medium">
                          Freebets and Promotions
                        </p>
                        <p className="text-textGrey font-normal text-sm">
                          View your rewards & promotions
                        </p>
                      </div>
                    </div>

                    {/* Right Section: Arrow Icon */}
                    <ChevronRight className="text-textGrey" />
                  </div>
                </div>{" "}
              </Badge.Ribbon>
            </Link>
          </div>{" "}
          {/* Deposit */}
          <div className="md:px-4 lg:px-4 px-4 py-4">
            <div className="bg-secondary rounded-lg transition-shadow duration-300 p-6">
              <p className="text-base font-medium text-textGrey">Deposit</p>
              <p className="text-textGrey font-normal text-sm my-4">
                Deposit money to your Ganjbets account
              </p>
              <Input
                placeholder="Enter amount to deposit"
                className="border-gray-600"
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
                className="bg-primary text-white hover:bg-primary px-10"
                onClick={handlePayment}
              >
                {isLoading ? <Loader /> : "Deposit"}
              </Button>
            </div>
          </div>{" "}
          {/* Withdraw */}
          <div className="md:px-4 lg:px-4 px-4 py-4">
            <div className="bg-secondary rounded-lg  duration-300 p-6">
              <p className="text-base font-medium text-textGrey">Withdraw</p>
              <p className="text-textGrey font-normal text-sm my-6">
                Withdraw money earned from Ganjibets.com
              </p>
              <Input
                placeholder="Enter amount to withdraw"
                className="border-gray-700"
                type="number"
                value={withdrawAmount}
                onChange={(e) => setWithdrawAmount(e.target.value)}
              />
              <p className="text-textGrey my-6">
                Daily MPESA Withdrawal limits: Min 100KES and Max KES300,000
              </p>

              <Button
                type="primar"
                disabled={isWithdrawing || balance?.walletBalance < 100}
                className="bg-primary text-white hover:bg-[#FF6D00] px-10 cursor-pointer"
                onClick={() => handleWithdraw()}
              >
                {isWithdrawing ? <Loader /> : "Withdraw"}
              </Button>
            </div>{" "}
            <Link to="/history">
              <div className="bg-secondary rounded-lg shadow-sm transition-shadow duration-300 px-4 py-6 mt-6">
                <div className="flex justify-between items-center">
                  {/* Left Section: Icon and Text */}
                  <div className="flex items-center gap-3">
                    <EmptyWallet size="24" color="#fff" />
                    <div>
                      <p className="text-textGrey font-medium">
                        View Transactions
                      </p>
                      <p className="text-textGrey font-normal text-sm">
                        Deposit and withdrawal transactions
                      </p>
                    </div>
                  </div>

                  {/* Right Section: Arrow Icon */}
                  <ChevronRight className="text-textGrey" />
                </div>
              </div>{" "}
            </Link>{" "}
            {/* Support */}
            <div
              onClick={() => loadTawk()}
              className="bg-secondary rounded-lg shadow-sm transition-shadow cursor-pointer duration-300 px-4 py-6 mt-6"
            >
              <div className="flex justify-between items-center">
                {/* Left Section: Icon and Text */}
                <div className="flex items-center gap-3">
                  <Headset size="24" color="#fff" />
                  <div>
                    <p className="text-textGrey font-medium">Contact support</p>
                    <p className="text-textGrey font-normal text-sm">
                      Reach out for help and assistance
                    </p>
                  </div>
                </div>

                {/* Right Section: Arrow Icon */}
                <ChevronRight className="text-textGrey" />
              </div>
            </div>{" "}
          </div>
          {/* Support */}
          <div className="md:px-4 lg:px-4 px-4 py-0 ">
            <div className="bg-secondary rounded-lg  transition-shadow duration-300 px-4 py-6">
              {/* <p className="text-textGrey font-medium my-4">Support</p> */}
              <div
                className="flex justify-between items-center align-middle cursor-pointer"
                onClick={showModal}
              >
                <div className="flex flex-row gap-3">
                  <div>
                    <button
                      className="text-textGrey font-medium"
                      // onClick={(}
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
                <div>
                  <ChevronRight className="text-[#4A4A4A]" />
                </div>
              </div>{" "}
              <DeleteModal
                open={isModalOpen}
                onCancel={handleCancel}
                onOk={handleOk}
              />
              <button
                className="text-primary font-medium mt-2"
                onClick={() => logOut()}
              >
                Log out
              </button>
            </div>
          </div>
          <Footer />
          <div className="pb-10"></div>
        </div>
      )}

      {!user && <LoginPage />}
    </>
  );
}

export default ProfilePage;
