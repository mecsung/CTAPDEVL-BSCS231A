import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

function SignaturePad() {
    const sigCanvasRef = useRef(null);
    const [preview, setPreview] = useState("");

    const clearSignature = () => {
        sigCanvasRef.current?.clear();
        setPreview("");
    };

    const saveSignature = () => {
        if (!sigCanvasRef.current || sigCanvasRef.current.isEmpty()) {
        alert("Please draw a signature first.");
        return;
        }

        const signatureData = sigCanvasRef.current
        .getCanvas()
        .toDataURL("image/png");

        setPreview(signatureData);
        alert("Signature saved in preview.");
    };

    const downloadSignature = () => {
        if (!sigCanvasRef.current || sigCanvasRef.current.isEmpty()) {
        alert("Draw a signature first.");
        return;
        }

        const dataURL = sigCanvasRef.current
        .getCanvas()
        .toDataURL("image/png");

        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "signature.png";
        link.click();
    };

    return (
        <div style={{ padding: "20px" }}>
        <h2>Signature Pad</h2>

        <div
            style={{
            border: "1px solid #ccc",
            width: "400px",
            height: "200px",
            marginBottom: "10px",
            }}
        >
            <SignatureCanvas
            ref={sigCanvasRef}
            penColor="black"
            canvasProps={{
                width: 400,
                height: 200,
                className: "signature-canvas",
            }}
            />
        </div>

        <button onClick={clearSignature} style={{ marginRight: "10px" }}>
            Clear
        </button>

        <button onClick={saveSignature} style={{ marginRight: "10px" }}>
            Save
        </button>

        <button onClick={downloadSignature}>
            Download
        </button>

        {preview && (
            <div style={{ marginTop: "20px" }}>
            <h3>Preview</h3>
            <img
                src={preview}
                alt="Signature Preview"
                style={{ border: "1px solid #ccc", maxWidth: "400px" }}
            />
            </div>
        )}
        </div>
    );
}

function DigitalSignatureProfile() {
  return (
    SignaturePad()
  );
}

export default DigitalSignatureProfile;