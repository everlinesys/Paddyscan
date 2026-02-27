import { useState } from "react";
import axios from "axios";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select an image first.");

    const formData = new FormData();
    formData.append("image", file);
    setLoading(true);
    setResult(null);

    try {
      const res = await axios.post("https://paddyscan-api.everlinesystems.in/predict", formData);
      setResult(res.data);
    } catch (err) {
      alert("Error connecting to PaddyScan server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <header style={styles.header}>
          <h1 style={styles.title}>🌿 PaddyScan</h1>
          <p style={styles.subtitle}>AI-Powered Rice Disease Detection</p>
        </header>

        <section style={styles.uploadSection}>
          <label style={styles.dropzone}>
            {preview ? (
              <img src={preview} alt="Preview" style={styles.previewImg} />
            ) : (
              <div style={styles.uploadPlaceholder}>
                <span>📸 Click to upload leaf image</span>
              </div>
            )}
            <input type="file" style={{ display: "none" }} onChange={handleFileChange} />
          </label>

          <button 
            onClick={handleUpload} 
            disabled={loading || !file} 
            style={{...styles.button, opacity: (loading || !file) ? 0.6 : 1}}
          >
            {loading ? "Analyzing..." : "Identify Disease"}
          </button>
        </section>

        {result && (
          <div style={styles.resultCard}>
            <div style={styles.badge}>
              Analysis Complete
            </div>
            <h2 style={styles.diseaseName}>{result.disease}</h2>
            <div style={styles.confidenceBar}>
                <div style={{...styles.confidenceFill, width: `${result.confidence * 100}%`}}></div>
            </div>
            <p style={styles.statText}>Confidence: {(result.confidence * 100).toFixed(1)}%</p>

            <hr style={styles.divider} />

            <div style={styles.infoGrid}>
              <div style={styles.infoBlock}>
                <h4 style={styles.infoTitle}>🩺 Treatment</h4>
                <p style={styles.infoText}>{result.treatment}</p>
              </div>
              <div style={styles.infoBlock}>
                <h4 style={styles.infoTitle}>🛡️ Prevention</h4>
                <p style={styles.infoText}>{result.prevention}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: "100vh", backgroundColor: "#f0f4f0", padding: "20px", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "'Segoe UI', Roboto, sans-serif" },
  card: { maxWidth: "500px", width: "100%", backgroundColor: "white", borderRadius: "16px", padding: "30px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)" },
  header: { textAlign: "center", marginBottom: "25px" },
  title: { color: "#2d5a27", margin: 0, fontSize: "2rem" },
  subtitle: { color: "#666", fontSize: "0.9rem", marginTop: "5px" },
  dropzone: { display: "block", border: "2px dashed #ccd5cc", borderRadius: "12px", padding: "10px", textAlign: "center", cursor: "pointer", marginBottom: "20px", transition: "all 0.3s" },
  uploadPlaceholder: { height: "150px", display: "flex", alignItems: "center", justifyContent: "center", color: "#888" },
  previewImg: { width: "100%", height: "200px", objectFit: "cover", borderRadius: "8px" },
  button: { width: "100%", padding: "14px", backgroundColor: "#2d5a27", color: "white", border: "none", borderRadius: "8px", fontSize: "1rem", fontWeight: "600", cursor: "pointer" },
  resultCard: { marginTop: "30px", padding: "20px", backgroundColor: "#f9fff9", borderRadius: "12px", border: "1px solid #e0eee0" },
  badge: { display: "inline-block", padding: "4px 12px", backgroundColor: "#e8f5e9", color: "#2e7d32", borderRadius: "20px", fontSize: "0.75rem", fontWeight: "bold", marginBottom: "10px" },
  diseaseName: { margin: "0 0 10px 0", color: "#1b331a", textTransform: "capitalize" },
  confidenceBar: { height: "6px", backgroundColor: "#eee", borderRadius: "3px", overflow: "hidden" },
  confidenceFill: { height: "100%", backgroundColor: "#4caf50", transition: "width 0.8s ease-out" },
  statText: { fontSize: "0.8rem", color: "#666", marginTop: "5px" },
  divider: { border: "none", borderTop: "1px solid #eee", margin: "20px 0" },
  infoGrid: { display: "grid", gap: "15px" },
  infoTitle: { margin: "0 0 5px 0", fontSize: "0.9rem", color: "#2d5a27", display: "flex", alignItems: "center" },
  infoText: { margin: 0, fontSize: "0.85rem", color: "#444", lineHeight: "1.4" }
};

export default App;