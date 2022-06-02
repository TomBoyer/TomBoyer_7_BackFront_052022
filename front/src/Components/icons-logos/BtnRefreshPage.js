import React from "react";

export default function BtnRefreshPage() {

    const refresh = () => {
        window.location.reload()
    }
  return (
    <div>
      <button className="btn-go-refresh" onClick={refresh}>Refresh</button>;
    </div>
  );
}
