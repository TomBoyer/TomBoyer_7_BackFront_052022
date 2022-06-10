import React from "react";
// import { RefreshIcon } from "./icons";

export default function BtnRefreshPage() {

    const refresh = () => {
        window.location.reload()
    }
  return (
    <div>
      <button className="btn-go-refresh" onClick={refresh} aria-label="button refresh page">
        Refresh
        </button>
      
    </div>
  );
}
