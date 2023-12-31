import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Github from './components/Github/Github'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/github' element={<Github />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
