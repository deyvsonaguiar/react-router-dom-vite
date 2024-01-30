import { Link, Outlet } from 'react-router-dom'
import { Head } from './../Contact/Contact'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact'>
      <Head title="Contato" description="Descrição de contato" />
      <h1>Contato</h1>
      <div>
        <Link to="">Contato</Link>
        <LInk to="pessoal">Contato pessoal</LInk>
        <LInk to="profissional">Contato profissional</LInk>
      </div>

      <Outlet />
    </section>
  )
}

export default Contact