import SharedLayout from './components/SharedLayout';
import Footer from './components/Footer';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import "./index.css";
//import "bootstrap/dist/css/bootstrap.min.css";


function App() {
 
   return(
     <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
     </BrowserRouter>
     <Footer />
     </>
  )
 
   
}

export default App;