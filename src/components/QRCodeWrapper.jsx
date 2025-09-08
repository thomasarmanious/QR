import React from "react";
import QRCode from "qrcode.react";

const QRCodeWrapper = ({ value, size = 200 }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 bg-white rounded-lg shadow-lg">
        <QRCode value={value} size={size} level="M" includeMargin={true} />
      </div>
    </div>
  );
};

export default QRCodeWrapper;
