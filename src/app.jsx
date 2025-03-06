import "./app.css";
import Home from "./pages/Home";
import Priconne from "./pages/Priconne";
import Starrail from "./pages/Starrail";
import "material-icons/iconfont/material-icons.css";
import Layout from "./components/layout";
import Admin from "./pages/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/starrail" element={<Starrail />} />
            {/* <Route path="/genshin" element={<Genshin />} /> */}
            <Route path="/priconne" element={<Priconne />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
