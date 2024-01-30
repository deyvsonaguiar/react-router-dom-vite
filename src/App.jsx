import { BrowserRouter, Routes, Route } from "react-router-dom"
import { App } from './App.css'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { CurrentContact } from './components/CurrentContact'
import { NotFound } from './components/NotFound'
import { Footer } from './components/Footer'

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
