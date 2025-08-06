import "./App.css";
import Homepage from "./app/homepage/Homepage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import PromotionsPage from "./app/promotions/promotionsPage";
import FreeBetsPage from "./app/Freebet/FreeBetsPage";
import ProfilePage from "./app/profile/ProfilePage";
import ForgotPasswordPage from "./app/Auth/ForgotPasswordPage";
import { AppProvider } from "./context/AuthContext";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import LoginPage from "./app/Auth/LoginPage";
import RegisterPage from "./app/Auth/RegisterPage";
import PlayGame from "./app/homepage/PlayGame";
import ViewAllGames from "./app/homepage/ViewAllGames";
import ScrollAllGames from "./app/homepage/scrollAllGames";
import AllGames from "./app/homepage/AllGames";
import HistoryPage from "./app/profile/HistoryPage";
import ResetPassword from "./app/Auth/resetPassword";
import PaymentView from "./app/payment/PaymentView";
import { ChakraProvider } from "@chakra-ui/react";
import { ModalProvider } from "./context/ModalContext";
import theme from "./utils/theme";
import { useState, useEffect } from "react";
import SplashLoader from "./components/splashLoader";
import ImoonPlayGame from "./app/homepage/imoon/ImoonPlayGame";
import LaunchVimPlayGames from "./app/homepage/LaunchVimPlayGames";
import LaunchSports from "./app/homepage/LaunchSports";
import ClickIdTracker from "./utils/clickIdTracker";
import WithdrawView from "./app/payment/WithdrawalView";
import LaunchElbetGame from "./app/homepage/LaunchElbetGame";
import AuthLayout from "./components/AuthLayout";
import TermsAndConditions from "./app/Auth/TermsAndConditions";
import PrivacyPolicy from "./app/Auth/PrivacyPolicy";
import ResponsibleGamingPolicy from "./app/Auth/ResponsibleGamingPolicy";
import AMLPolicy from "./app/Auth/AMLPolicy";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 100,
      },
    },
  });
  if (localStorage.getItem("user") === "undefined") {
    localStorage.removeItem("user");
  }

  return (
    <>
      {isLoading ? (
        <SplashLoader />
      ) : (
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={theme}>
            <AppProvider>
              <ModalProvider>
                <BrowserRouter>
                  <ClickIdTracker />
                  <Routes>
                    <Route
                      path="playGame/:gameProvider/:gameAlias"
                      element={<PlayGame />}
                    />
                    <Route path="imoon/:gameID" element={<ImoonPlayGame />} />{" "}
                    <Route
                      path="vimplay/:gameID"
                      element={<LaunchVimPlayGames />}
                    />
                    <Route
                      path="elbet/:gameAlias/:gameID"
                      element={<LaunchElbetGame />}
                    />{" "}
                    <Route path="sports" element={<LaunchSports />} />
                    <Route
                      path="/callback/:id"
                      element={<PaymentView />}
                    />{" "}
                    <Route
                      path="/withdraw/callback/:id"
                      element={<WithdrawView />}
                    />
                    <Route element={<AuthLayout />}>
                      <Route element={<AppLayout />}>
                        <Route index element={<Navigate to="home" />} />
                        <Route path="home" element={<Homepage />} />
                        <Route path="promotion" element={<PromotionsPage />} />
                        <Route path="freebets" element={<FreeBetsPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route
                          path="terms-and-conditions"
                          element={<TermsAndConditions />}
                        />{" "}
                        <Route
                          path="privacy-policy"
                          element={<PrivacyPolicy />}
                        />{" "}
                        <Route
                          path="responsible-gaming-policy"
                          element={<ResponsibleGamingPolicy />}
                        />{" "}
                        <Route path="aml-policy" element={<AMLPolicy />} />
                        <Route
                          path="forgotpassword"
                          element={<ForgotPasswordPage />}
                        />
                        <Route path="register" element={<RegisterPage />} />
                        <Route path="history" element={<HistoryPage />} />
                        <Route path="reset" element={<ResetPassword />} />
                        <Route
                          path="viewAll/:provider"
                          element={<ViewAllGames />}
                        />
                        <Route path="scrollAll" element={<ScrollAllGames />} />
                        <Route
                          path="allGames/:provider"
                          element={<AllGames />}
                        />
                        <Route path="*" element={<Homepage />} />
                      </Route>
                    </Route>
                  </Routes>
                </BrowserRouter>
              </ModalProvider>
            </AppProvider>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 3000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "yellow",
                  color: "black",
                },
              }}
            />
          </ChakraProvider>
        </QueryClientProvider>
      )}
    </>
  );
}
export default App;
