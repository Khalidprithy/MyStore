import { Toaster } from "react-hot-toast";
import HomePage from "./components/Pages/HomePage";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
