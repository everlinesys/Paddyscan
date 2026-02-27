import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const handleFile = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const handleDetect = async () => {
    if (!file) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axios.post(
        "http://localhost:5000/predict",
        formData
      );

      // pass result to next page
      navigate("/result", { state: res.data });
    } catch (err) {
      alert("Error detecting disease");
    }
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Upload Crop Image
      </h2>

      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md text-center">
        <input
          type="file"
          accept="image/*"
          onChange={handleFile}
          className="mb-4"
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            className="rounded-lg mb-4 max-h-64 mx-auto"
          />
        )}

        <button
          onClick={handleDetect}
          className="bg-green-600 text-white px-6 py-2 rounded-xl hover:bg-green-700"
        >
          Detect Disease
        </button>
      </div>
    </div>
  );
}

export default Upload;