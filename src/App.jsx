import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignUpSuccess from "./pages/SignUpSuccess.jsx";
import { GlobalStyle } from "./theme/GlobalStyle.jsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signedup" element={<SignUpSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
