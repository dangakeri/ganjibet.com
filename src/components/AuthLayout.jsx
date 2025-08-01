import { Outlet } from "react-router";
import BaseClass from "../services/BaseClass";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

function AuthLayout() {
  const [authStatus, setAuthStatus] = useState("checking");

  useEffect(() => {
    const baseService = new BaseClass();

    if (baseService.isAuthenticated()) {
      setAuthStatus("authenticated");
    } else {
      localStorage.removeItem("user");
      setAuthStatus("unauthenticated");
    }
  }, []);

  if (authStatus === "checking") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Loader className="animate-spin text-white" size={60} />
      </div>
    );
  }

  if (authStatus === "unauthenticated") {
    return <Outlet />;
  }

  return <Outlet />;
}

export default AuthLayout;
