import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ClickIdTracker() {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const cid = queryParams.get("cid");

    if (cid) {
      // Store click ID in localStorage
      localStorage.setItem("click_id", cid);

      // Optionally send it to the backend (optional for session/DB)
      axios
        .post("/api/track-click", { clickId: cid }, { withCredentials: true })
        .catch((err) => console.error("Error tracking click:", err));

      // Clean the URL
      if (window.history.replaceState) {
        const newUrl = window.location.pathname;
        window.history.replaceState({}, document.title, newUrl);
      }
    }
  }, [location.search]);

  return null;
}

export default ClickIdTracker;
