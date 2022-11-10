import './App.css';
import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Pendentes from './pages/Pendentes';
import FormPage from './pages/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
        <Router>
          <Header />
            <div className='bodysoul'>
              <Routes>
                <Route exact path="/" element={<FormPage />} >
                </Route>
                <Route exact path="/Pendentes" element={<Pendentes />} >
                </Route>
                <Route exact path="/Finalizados" element={<></>} >
                </Route>
                <Route exact path="/Cancelados" element={<></>} >
                </Route>
              </Routes>
            </div>
            <Footer />
      </Router>
    </div>
  );
}

export default App;
