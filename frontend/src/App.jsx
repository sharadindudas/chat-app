import { Navigate, Route, Routes } from "react-router";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/AuthContext";

function App() {
    const { authUser } = useAuthContext();

    return (
        <div className="p-4 h-screen flex items-center justify-center">
            <Routes>
                <Route
                    path="/"
                    element={
                        authUser ? <Home /> : <Navigate to="/login" replace />
                    }
                />
                <Route
                    path="/login"
                    element={authUser ? <Navigate to="/" replace /> : <Login />}
                />
                <Route
                    path="/signup"
                    element={
                        authUser ? <Navigate to="/" replace /> : <Signup />
                    }
                />
            </Routes>
            <Toaster />
        </div>
    );
}

export default App;
