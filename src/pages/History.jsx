import { useNavigate } from "react-router-dom";

function History() {
  const navigate = useNavigate();

  // Mock data (replace later with backend data)
  const history = [
    {
      id: 1,
      image: "https://via.placeholder.com/100",
      disease: "Tomato Early Blight",
      date: "12 Feb 2026",
      confidence: 0.92,
      treatment: "Apply fungicide",
      prevention: "Avoid overwatering"
    },
    {
      id: 2,
      image: "https://via.placeholder.com/100",
      disease: "Healthy Leaf",
      date: "10 Feb 2026",
      confidence: 0.98,
      treatment: "No action needed",
      prevention: "Maintain proper care"
    }
  ];

  const openResult = (item) => {
    navigate("/result", { state: item });
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Scan History
      </h2>

      <div className="grid gap-4 max-w-3xl mx-auto">
        {history.map((item) => (
          <div
            key={item.id}
            onClick={() => openResult(item)}
            className="bg-white rounded-xl shadow p-4 flex items-center gap-4 cursor-pointer hover:bg-green-50 transition"
          >
            <img
              src={item.image}
              alt="crop"
              className="w-20 h-20 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {item.disease}
              </h3>

              <p className="text-sm text-gray-500">
                {item.date}
              </p>
            </div>

            <span className="text-green-700 font-bold">
              {Math.round(item.confidence * 100)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;