
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './Pages/Home/Home';


const routes = (
  <Router>
    <Routes>
      <Route path='/' element={ <Home /> } />
      {/* <Route path='/about' element={ <About /> } />
      <Route path='/project' element={ <Project /> } />
      <Route path='/contact' element={ <Contact /> } /> */}
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App
