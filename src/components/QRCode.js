import React from 'react';
import QRCodeLib from 'qrcode.react';

const QRCode = ({ value, size = 200 }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <QRCodeLib 
        value={value} 
        size={size}
        level="M"
        includeMargin={true}
      />
    </div>
  );
};

export default QRCode;