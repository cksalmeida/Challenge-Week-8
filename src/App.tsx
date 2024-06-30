import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>
    </>
  );
}

export default App;