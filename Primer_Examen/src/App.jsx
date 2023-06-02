import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import Formulario from './Components/Formulario'

function App() {

  const [documento, setDocumento] = useState("")
  const [apellidoMes, setApellidoMes] = useState("")
  const [show, setShow] = useState(false)


  const handleSubmit = (e) => {

    e.preventDefault()

      if (documento.length == 3 && apellidoMes.length >= 6) {
        setShow(true)
      } else {
        setShow(false)
      }

  }



  return (

    <>

    <h1> Participa del sorteo </h1>

    <Formulario setDocumento={setDocumento} setApellidoMes={setApellidoMes} handleSubmit={handleSubmit} />

    { show ? <Card documento={documento} apellidoMes={apellidoMes}/> : "Por favor chequea que la información sea correcta" }  
    
    </>
  )
}

export default App
