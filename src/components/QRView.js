import React from "react";
import QRCode from "./QRCode";

const QRView = ({ whatsappNumber, setWhatsappNumber, setCurrentView }) => {
  const formUrl = `${window.location.origin}${window.location.pathname}?view=form`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Scan QR Code
          </h1>
          <p className="text-gray-600">
            Scan this code to access the data entry form
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <QRCode value="qrsurveyapp.netlify.app" size={200} />
        </div>

        <div className="text-sm text-gray-500 mb-6">
          <p>
            QR Code URL: <br />
            <span className="font-mono text-xs break-all">{formUrl}</span>
          </p>
        </div>

        <div className="border-t pt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              WhatsApp Number (with country code):
            </label>
            <input
              type="text"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="1234567890"
            />
            <p className="text-xs text-gray-500 mt-1">
              Example: 1234567890 (US) or 919876543210 (India)
            </p>
          </div>

          <button
            onClick={() => setCurrentView("form")}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-200"
          >
            Test Form (Preview)
          </button>
        </div>
      </div>
    </div>
  );
};

export default QRView;
