import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";
//import { CartProvider } from "./context/cart.context";

export default function Home() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}
