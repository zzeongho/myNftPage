import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import { useState } from "react";

function App() {
  const [account, setAccount] = useState();
  return (
    <BrowserRouter>
      <div className="bg-darkBlue text-white min-h-screen">
        <Header account={account} setAccount={setAccount} />
        <Routes>
          <Route path="/" element={<Main account={account} />} />
          <Route path="/:tokenId" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
