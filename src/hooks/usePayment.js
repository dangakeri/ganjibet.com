import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import PaymentService from "../services/PaymentService";

export function useDeposit() {
  const paymentService = new PaymentService();
  const navigate = useNavigate();
  const {
    mutate: makingPayment,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: paymentService.depositCash.bind(paymentService),
    onSuccess: (res) => {
      toast.success(
        "Check your phone. When prompted, enter your M-Pesa pin on your phone to complete payment"
      );
      navigate(`/callback/${res?.data?.txnID}`);
    },
    onError: (err) => {
      toast.error(err?.message ?? "Something went wrong");
    },
  });

  return { makingPayment, isLoading, error };
}

export function useWithdraw() {
  const paymentService = new PaymentService();
  const navigate = useNavigate();
  const {
    mutate: withdrawingCash,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: paymentService.withdrawCash.bind(paymentService),
    onSuccess: (res) => {
      if (res.status !== "success") {
        toast.error(
          res?.data?.message ?? "Something went wrong try again later"
        );
      } else {
        navigate(`/withdraw/callback/${res?.data?.transactionsID}`);
        toast.success(`Withdrawal was successful`);
      }
    },
  });
  return { withdrawingCash, isLoading, error };
}
export function useUpdateBalance() {
  const paymentService = new PaymentService();

  const { data: balance, isLoading } = useQuery({
    queryKey: ["user-balance"],
    queryFn: paymentService.updateBalance.bind(paymentService),
  });

  return { balance, isLoading };
}
export function useTransactionsHistory() {
  const paymentService = new PaymentService();
  const {
    data: transactions,
    isLoading,
    error,
  } = useQuery({
    queryFn: paymentService.transactionHistory.bind(paymentService),
    queryKey: ["transactions"],
    onError: (err) => {
      toast.error(err?.message ?? "Something went wrong fetching your history");
    },
  });

  return { transactions, isLoading, error };
}
export function useGetTransactionStatus() {
  const paymentService = new PaymentService();
  const {
    mutate: getTransactionStatusAPI,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: (uniqueID) =>
      paymentService.getTransactionStatus.bind(paymentService)(uniqueID),
    onSuccess: () => {},
  });

  return { getTransactionStatusAPI, isLoading, error };
}
export function useIssueKey() {
  const paymentService = new PaymentService();
  const {
    mutate: creatingKey,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: paymentService.createPaymentKey?.bind(paymentService),
  });

  return { creatingKey, isLoading, error };
}
