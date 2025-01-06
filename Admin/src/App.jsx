import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Login from "./Components/Login";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="App-body">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <main className="App-content">
                      <Card />
                    </main>
                  </>
                }
              />
              <Route
                path="/contact"
                element={
                  <main className="App-content">
                    <Contact />
                  </main>
                }
              />

              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
