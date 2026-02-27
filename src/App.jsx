import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select an image");

    const formData = new FormData();
    formData.append("image", file);

    setLoading(true);

    try {
      const res = await axios.post(
        "http://paddyscan-api.everlinesystems.in/predict",
        formData
      );

      setResult(res.data);
    } catch (err) {
      alert("Error uploading image");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>🌿Paddyscan</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Detect Disease
      </button>

      {loading && <p>Analyzing image...</p>}

      {result && (
        <div style={{ marginTop: 20 }}>
          <h2>Result</h2>
          <p><b>Disease:</b> {result.disease}</p>
          <p><b>Confidence:</b> {result.confidence}</p>
          <p><b>Treatment:</b> {result.treatment}</p>
          <p><b>Prevention:</b> {result.prevention}</p>
        </div>
      )}
    </div>
  );
}

export default App;