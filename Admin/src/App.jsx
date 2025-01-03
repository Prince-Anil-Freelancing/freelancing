import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App-body">
          <Navbar />
          <main className="App-content">
            <Routes>
            <Route path="/" element={<Card />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
