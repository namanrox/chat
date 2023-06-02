import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import MainForm from "./components/MainForm";

function App() {
  return (
    <div
      className="container-fluid bg-info text-dark d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <Router>
        <Routes>
          <Route index element={<MainForm />} />
          <Route path="/chat/:roomName" element={<ChatRoom />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
