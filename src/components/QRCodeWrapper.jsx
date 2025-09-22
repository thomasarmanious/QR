import React from "react";
import QRCode from "qrcode.react";

const QRCodeWrapper = ({ value, size = 200 }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="p-4 bg-white rounded-lg shadow-lg border-2 border-gray-200">
        <QRCode
          value={value}
          size={size}
          level="M"
          includeMargin={true}
          fgColor="#333333"
          bgColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default QRCodeWrapper;
