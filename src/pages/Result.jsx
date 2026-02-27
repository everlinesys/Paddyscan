import { useLocation } from "react-router-dom";

function Result() {
  const { state } = useLocation();

  if (!state) return <p>No result available</p>;

  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">Detection Result</h2>

        <p><b>Disease:</b> {state.disease}</p>
        <p><b>Confidence:</b> {state.confidence}</p>
        <p><b>Treatment:</b> {state.treatment}</p>
        <p><b>Prevention:</b> {state.prevention}</p>
      </div>
    </div>
  );
}

export default Result;