import React from "react";
import QRCodeGenerator from "./QRCodeGenerator";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css"; // Import custom CSS for styling

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">QR Code Generator</h1>
      <QRCodeGenerator />
      <h3 className="footer-title">Designed by Debasish</h3>
    </div>
  );
};

export default App;
