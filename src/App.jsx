import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormerPortfolio from "./pages/FormerPortfolio";
import NewPortfolio from "./pages/NewPortfolio";
import Header from "./Components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<FormerPortfolio />} />
        <Route path="/new" element={<NewPortfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
