import { Modal, Button, Select, Input } from "antd";
import PropTypes from "prop-types";

import Loader from "../Loader";
import { useAppState } from "../../context/AuthContext";
import { useState } from "react";
import { useDeleteAccount } from "../../hooks/useAuth";

const { Option } = Select;

DeleteModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

function DeleteModal({ open, onOk, onCancel }) {
  const { deleteAccountFn, isLoading } = useDeleteAccount();
  const { deleteAccount } = useAppState();

  // Read phone from localStorage for visual reference only
  const [phone] = useState(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.phone || "";
  });

  const [period, setPeriod] = useState("1 Month");

  const durationMap = {
    "1 Week": 7,
    "2 Weeks": 14,
    "1 Month": 30,
    "3 Months": 90,
    "6 Months": 180,
    "1 Year": 365,
    Permanently: "permanent",
  };

  const handleDelete = () => {
    const durationValue = durationMap[period];

    deleteAccountFn(
      { duration: durationValue },
      {
        onSuccess: () => {
          deleteAccount(); // clears app auth state
          onCancel(); // closes modal
        },
      }
    );
  };

  return (
    <Modal
      className="custom-modal"
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={null}
      centered
    >
      <div className="bg-secondary text-white p4 rounded-lg">
        <h2 className="text-orange1 text-2xl font-semibold mb-2">
          Delete Account
        </h2>
        <p className="text-white text-sm mb-6">
          This Delete-Account page provides you with the option to take a break
          from gambling activities for a specific period of time. By utilizing
          this feature, you can restrict your access to our platform, preventing
          yourself from placing bets and engaging in gambling activities.
        </p>

        <div className="mb-4">
          <label className="block text-sm text-white mb-1">
            Your phone number
          </label>
          <Input
            value={phone}
            readOnly
            className="bg-gray-50 text-gray-700 border-zinc-400 cursor-not-allowed"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm text-white mb-1">
            Select period of exclusion
          </label>
          <Select
            value={period}
            onChange={(val) => setPeriod(val)}
            className="w-full text-white"
            dropdownStyle={{ backgroundColor: "#fff", color: "white" }}
          >
            <Option value="1 Week">1 Week</Option>
            <Option value="2 Weeks">2 Weeks</Option>
            <Option value="1 Month">1 Month</Option>
            <Option value="3 Months">3 Months</Option>
            <Option value="6 Months">6 Months</Option>
            <Option value="1 Year">1 Year</Option>
            <Option value="Permanently">Permanently</Option>
          </Select>
        </div>

        <Button
          style={{ all: "unset" }}
          className="w-full bg-primary hover:bg-red-600 text-secondary font-semibold py-2"
          onClick={handleDelete}
        >
          {isLoading ? <Loader /> : "Delete My Account"}
        </Button>
      </div>
    </Modal>
  );
}

export default DeleteModal;
