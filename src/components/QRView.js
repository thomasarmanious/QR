import React from "react";
import QRCode from "./QRCode";

const QRView = () => {
  const formUrl = "https://qrsurveyapp.netlify.app"; // ✅ your deployed site

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Survey QR Code
        </h1>
        <p className="text-gray-600 mb-6">Scan this to open the survey</p>

        <QRCode value={formUrl} size={200} />

        <p className="mt-4 text-xs text-gray-500 break-all">{formUrl}</p>
      </div>
    </div>
  );
};

export default QRView;
