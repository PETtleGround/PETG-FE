import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";

import Topic from "./pages/Topic.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignUpSuccess from "./pages/SignUpSuccess.jsx";
import { GlobalStyle } from "./theme/GlobalStyle.jsx";
import TopicDetail from "./pages/TopicDetail.jsx";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/topic" element={<Topic />}></Route>
          <Route path="/topic/detail" element={<TopicDetail />}></Route>

          <Route path="/signedup" element={<SignUpSuccess />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
