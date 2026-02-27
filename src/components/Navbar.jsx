import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation(); // To highlight the active page
    const isLoggedIn = localStorage.getItem("user");

    const logout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    // Helper to highlight active link
    const linkStyle = (path) =>
        `transition-colors duration-200 font-medium ${location.pathname === path ? "text-green-700" : "text-gray-600 hover:text-green-600"
        }`;

    return (
        <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="text-2xl transition-transform group-hover:rotate-12">🌿</span>
                    <span className="text-xl font-extrabold tracking-tight text-green-800">
                        Paddy<span className="text-green-600">Scan</span>
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className={linkStyle("/login")}>Login</Link>
                            <Link
                                to="/register"
                                className="bg-green-700 text-white px-5 py-2 rounded-full font-medium hover:bg-green-800 transition-all shadow-sm active:scale-95"
                                style={{ color: "white" }} >
                                Get Started
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/dashboard" className={linkStyle("/dashboard")}>Dashboard</Link>
                            <Link to="/upload" className={linkStyle("/upload")}>New Scan</Link>
                            <Link to="/history" className={linkStyle("/history")}>History</Link>

                            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div> {/* Separator */}

                            <button
                                onClick={logout}
                                className="text-sm font-semibold text-gray-500 hover:text-red-600 border border-gray-200 px-4 py-1.5 rounded-lg hover:border-red-100 hover:bg-red-50 transition-all"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>

                {/* Mobile Menu Icon (Visual Only) */}
                <div className="md:hidden text-gray-500 text-2xl">
                    ☰
                </div>
            </div>
        </nav>
    );
}

export default Navbar;