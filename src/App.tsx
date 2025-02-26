import { Route, BrowserRouter as Router, Routes } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";


const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container max-w-7xl mx-auto p-5 pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={ <About /> } />
          {/*
          <Route path='/project' element={ <Project /> } />
          <Route path='/contact' element={ <Contact /> } /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
