import "./app.css";
import Home from "./pages/Home";
import Genshin from "./pages/Genshin";
import Priconne from "./pages/Priconne";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genshin" element={<Genshin />} />
          <Route path="/priconne" element={<Priconne />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
