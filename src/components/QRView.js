import React from "react";
import QRCodeWrapper from "./QRCodeWrapper";

function QRView() {
  // Your actual Netlify URL
  const siteUrl = "https://qrsurveyapp.netlify.app/survey";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          📊 Survey Form
        </h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-6">
          Scan QR Code to Start
        </h2>
        
        <div className="mb-6">
          <QRCodeWrapper value={siteUrl} size={200} />
        </div>
        
        <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
          <p className="font-semibold">Instructions:</p>
          <p>1. Scan the QR code with your phone</p>
          <p>2. Fill out the survey form</p>
          <p>3. Submit to WhatsApp</p>
        </div>
        
        <div className="mt-4 text-xs text-gray-400">
          <p>URL: {siteUrl}</p>
        </div>
      </div>
    </div>
  );
}

export default QRView;