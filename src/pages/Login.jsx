import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-emerald-500">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Login
                </h2>

                <input
                    placeholder="Email"
                    className="w-full p-2 border rounded mb-4"
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded mb-6"
                />

                <button
                    onClick={() => {
                        const handleLogin = () => {
                            localStorage.setItem("user", "demo");
                            navigate("/dashboard");
                        }; handleLogin();
                    }}
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;