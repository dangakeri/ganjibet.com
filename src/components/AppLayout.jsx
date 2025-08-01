import { Outlet } from "react-router";
import BottomNav from "./homepage/BottomNav";

function AppLayout() {
  return (
    <div className="lg:grid lg:grid-cols-[20vw,1fr,20vw]">
      <div className="hidden lg:block bg-gray-50"></div>

      <Outlet />
      <BottomNav />

      <div className="hidden lg:block bg-gray-50"></div>
    </div>
  );
}

export default AppLayout;
