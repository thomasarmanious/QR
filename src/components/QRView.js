import React from "react";
import QRCodeWrapper from "./QRCodeWrapper";

function QRView() {
  // ✅ Netlify deployed link to survey page
  const siteUrl = "https://qrsurveyapp.netlify.app/survey";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-4">Scan this QR to open the Survey</h2>
      <QRCodeWrapper value={siteUrl} size={200} />
    </div>
  );
}

export default QRView;
