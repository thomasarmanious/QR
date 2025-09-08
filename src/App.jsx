import React, { useState, useEffect } from 'react';
import QRView from './components/QRView';
import FormView from './components/FormView';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('qr');
  const [whatsappNumber, setWhatsappNumber] = useState('1234567890');
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('view') === 'form') {
      setCurrentView('form');
    }
  }, []);

  return (
    <div className="App">
      {currentView === 'qr' ? (
        <QRView 
          whatsappNumber={whatsappNumber}
          setWhatsappNumber={setWhatsappNumber}
          setCurrentView={setCurrentView}
        />
      ) : (
        <FormView 
          whatsappNumber={whatsappNumber}
          setCurrentView={setCurrentView}
        />
      )}
    </div>
  );
}

export default App;