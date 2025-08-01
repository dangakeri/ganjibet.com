import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { deleteAccount } from "../services/AuthService";
import { useNavigate } from "react-router";

export function useDeleteAccount() {
  const navigate = useNavigate();
  const { mutate: deleteAccountFn, isPending: isLoading } = useMutation({
    mutationFn: (userID) => deleteAccount({ userID }),
    onSuccess: () => {
      localStorage.clear();
      toast.success("Account Deleted successfully");
      navigate(`/`);
    },
    onError: (err) => {
      toast.error("Your acccount could not be deleted");
    },
  });
  return { deleteAccountFn, isLoading };
}
