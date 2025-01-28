import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./QRCodeGenerator.css"; // Import custom CSS for styling

const QRCodeGenerator = () => {
  const [text, setText] = useState("");
  const [size, setSize] = useState(200);
  const qrCodeRef = useRef();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleDownload = () => {
    const qrCanvas = qrCodeRef.current.querySelector("canvas");
    const qrImage = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = qrImage;
    link.download = "qrcode.png";
    link.click();
  };

  return (
    <div className="qrcode-generator">
      <div className="card custom-card p-4">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="form-label">Enter Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter text for QR Code"
              value={text}
              onChange={handleInputChange}
              className="custom-input"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="form-label">QR Code Size</Form.Label>
            <Form.Control
              type="number"
              placeholder="Size (e.g., 200)"
              value={size}
              onChange={handleSizeChange}
              className="custom-input"
            />
          </Form.Group>
        </Form>

        {text && (
          <div className="text-center mt-4">
            <div ref={qrCodeRef} className="qr-container">
              <QRCodeCanvas value={text} size={Number(size)} />
            </div>
            <Button
              variant="primary"
              className="custom-button mt-3"
              onClick={handleDownload}
            >
              Download QR Code
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
