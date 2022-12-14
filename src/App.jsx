import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/Index'
import Home from './components/Home/index'
import About from './components/About/index'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
