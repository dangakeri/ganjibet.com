import { useMutation } from "@tanstack/react-query";
import { AuthService } from "../services/AuthService";

export function useLogIn() {
  const authService = new AuthService();

  const { mutate: logInFn, isPending: isLoading } = useMutation({
    mutationFn: authService.logIn.bind(authService),
  });
  return { logInFn, isLoading };
}
export function useRegister() {
  const authService = new AuthService();
  const { mutate: registerFn, isPending: isLoading } = useMutation({
    mutationFn: authService.register.bind(authService),
  });

  return { registerFn, isLoading };
}

export function useForgotPassword() {
  const authService = new AuthService();
  const {
    mutate: forgotPasswordAPI,
    isPending,
    error,
  } = useMutation({
    mutationFn: (phone) => authService.forgotPassword(phone),
  });

  return { forgotPasswordAPI, isPending, error };
}
export function useResetPassword() {
  const authService = new AuthService();
  const {
    mutate: resetPasswordAPI,
    isPending,
    error,
  } = useMutation({
    mutationFn: authService.resetPassword.bind(authService),
  });
  return { resetPasswordAPI, isPending, error };
}
export function useDeleteAccount() {
  const authService = new AuthService();
  const { mutate: deleteAccountFn, isPending: isLoading } = useMutation({
    mutationFn: authService.deleteAccount.bind(authService),
  });
  return { deleteAccountFn, isLoading };
}
