import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import { Header } from './components/Header/Header'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { CurrentContact } from './components/CurrentContact/CurrentContact'
import { NotFound } from './components/NotFound/NotFound'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="quem-somos" element={ <About /> } />
        <Route path="contatos" element={ <Contact /> } />
        <Route path=":id" element={ <CurrentContact /> }/>
        <Route path="*" element={ <NotFound /> }/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
