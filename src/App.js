import { Toaster } from "react-hot-toast";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import AnnotatePDFPage from "./components/Pages/AnnotatePDF/AnnotatePDFPage";
import HomePage from "./components/Pages/HomePage";
import PasswordHome from "./components/Pages/PasswordHome";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/sign_up';
  const isSignUpPage = location.pathname === '/login';
  return (
    <div>
      {!isLoginPage && !isSignUpPage ? <Header /> : null}
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/password" element={<PasswordHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign_up" element={<SignUp />}></Route>
        <Route path="/annotate_pdf" element={<AnnotatePDFPage />}></Route>
      </Routes>
      {!isLoginPage && !isSignUpPage ? <Footer /> : null}
      <Toaster />
    </div>
  );
}

export default App;
