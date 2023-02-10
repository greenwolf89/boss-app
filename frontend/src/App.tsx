import "./App.css";
import Transactions from "./features/transactions/Transactions";
// import NavBar from "./features/navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./features/main/main";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <NavBar /> */}
        <div>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/transactions" element={<Transactions />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
