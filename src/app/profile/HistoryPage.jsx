import MoveBack from "../../components/MoveBack";
import { Button, DatePicker, Select, Space } from "antd";

import Loader from "../../components/Loader";
import { useState } from "react";
import moment from "moment";
import { useTransactionsHistory } from "../../hooks/usePayment";

const { Option } = Select;

function HistoryPage() {
  const { transactions, isLoading } = useTransactionsHistory();
  // State for filters
  const [dateFilter, setDateFilter] = useState("all"); // "today", "week", "month", "all"
  const [typeFilter, setTypeFilter] = useState("all"); // "deposit", "withdrawal", "all"
  const [appliedFilters, setAppliedFilters] = useState({
    dateFilter: "all",
    typeFilter: "all",
  });

  // Function to filter transactions by date
  const filterByDate = (transaction) => {
    const transactionDate = new Date(transaction.date);
    const now = new Date();

    switch (appliedFilters.dateFilter) {
      case "today":
        return (
          transactionDate.getDate() === now.getDate() &&
          transactionDate.getMonth() === now.getMonth() &&
          transactionDate.getFullYear() === now.getFullYear()
        );
      case "week":
        const startOfWeek = new Date(now);
        startOfWeek.setDate(now.getDate() - now.getDay());
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        return transactionDate >= startOfWeek && transactionDate <= endOfWeek;
      case "month":
        return (
          transactionDate.getMonth() === now.getMonth() &&
          transactionDate.getFullYear() === now.getFullYear()
        );
      case "all":
      default:
        return true;
    }
  };

  // Function to filter transactions by type
  const filterByType = (transaction) => {
    if (appliedFilters.typeFilter === "all") return true;
    return (
      transaction.type.toLowerCase() === appliedFilters.typeFilter.toLowerCase()
    );
  };

  // Apply filters when the "Apply Filters" button is clicked
  const handleApplyFilters = () => {
    setAppliedFilters({
      dateFilter,
      typeFilter,
    });
  };

  // Filtered transactions
  const filteredTransactions = transactions?.data
    .filter(
      (transaction) =>
        transaction.status.toLowerCase() !== "pending" &&
        transaction.transactionCode
    )
    .filter(filterByDate)
    .filter(filterByType);

  return (
    <div className="bg-bgBody min-h-screen w-full overflow-x-auto">
      {" "}
      <nav className="flex  items-center w-full lg:p-4 px-4 py-2 text-textGrey ">
        <div>
          <MoveBack />
        </div>
        <h3 className="font-semibold">All Transactions</h3>
      </nav>{" "}
      <div className="mb-24">
        {/* Filter Button and Options */}
        <div className="lg:p-4 px-4 py-2">
          <Space>
            <Select
              defaultValue="all"
              style={{ width: 100 }}
              onChange={(value) => setDateFilter(value)}
            >
              <Option value="today">Today</Option>
              <Option value="week">Week</Option>
              <Option value="month">Month</Option>
              <Option value="all">All</Option>
            </Select>
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              onChange={(value) => setTypeFilter(value)}
            >
              <Option value="all">All</Option>
              <Option value="deposit">Deposits</Option>
              <Option value="withdrawal">Withdrawals</Option>
            </Select>
            <Button
              type="primar"
              className="bg-primary text-textGrey"
              onClick={handleApplyFilters}
            >
              Apply
            </Button>
          </Space>
        </div>
        {/* Loading State */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <Loader />
          </div>
        ) : (
          filteredTransactions.map((transaction, index) => (
            <TransactionCard
              key={index}
              reference={transaction.transactionCode}
              time={transaction.date}
              amount={transaction.amount}
              status={transaction.status}
              type={transaction.type}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HistoryPage;

function TransactionCard({ amount, time, reference, status, type }) {
  const statusStyles =
    status.toLowerCase() === "success"
      ? "bg-green-100 text-green-600"
      : "bg-red-100 text-red-600";
  const formatTime = (time) => {
    return moment(time).format("MM/DD h:mm a");
  };

  return (
    <div className="bg-secondary shadow p-3 mx-4 rounded-lg my-2 ">
      <h4 className="font-bold text-textGrey py-2">
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </h4>
      <div className="flex justify-between items-center">
        <p className="text-sm text-textGrey font-normal">{reference}</p>
        <div className={`px-4 py-1 ${statusStyles} rounded-full`}>
          <p className={` font-medium text-sm ${statusStyles}`}>{status}</p>
        </div>
      </div>{" "}
      <div className="flex text-textGrey justify-between pt-3">
        <p className="font-semibold">KES {amount}</p>
        <p className="text-textGrey text-sm">{formatTime(time)}</p>
      </div>
    </div>
  );
}
