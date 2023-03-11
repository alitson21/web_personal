import logo from '../Imagenes/logo.png'
import '../Css/contactame.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';


function Contactame() {
    const [inputNombre, setinputNombre] = useState('')
    const [inputEmail, setinputEmail] = useState('')
    const [texareaSms, settexareaSms] = useState('')

    const handlesetnombre = (e) =>{
        // console.log(e.target.value)
        setinputNombre(e.target.value)
    }
    const handlesetemail = (e) =>{
        // console.log(e.target.value)
        setinputEmail(e.target.value)
    }
    const handlesettexarea = (e) =>{
        // console.log(e.target.value) 
        settexareaSms(e.target.value)
    }

    const handlesubmit = (e) =>{
        // console.log(e.target.nombre.value)
        e.preventDefault()
        alert(`Gracias por tu mensaje ${inputNombre} \n en la brevedad estare respondiendo tu mensaje al mail ${inputEmail}`)
        handlereset()
    }

    const handlereset = () =>{
        setinputNombre('')
        setinputEmail('')
        settexareaSms('')
    }

    return (
        <div className="contactame">
            <div className="title">
                <h1>Contactame</h1>
            </div>

            <div className="form">
                <div className="datos-redes">
                    <p><i className="bi bi-telephone-forward"></i> Tel: +54911-238-653-58</p>
                    <p><i className="bi bi-envelope"></i> Mail: alitson21martinez@gmail.com</p>
                    <p><i className="bi bi-slack"></i> Slack: elpanacodea@gmail.com</p>
                    <img src={logo} alt={logo} />
                </div>
                <div className="form-inputs">
                    <form onSubmit={handlesubmit}>
                        <Form.Control type="text" name='nombre' placeholder="Ingresa tu Nombre" value={inputNombre} onChange={handlesetnombre} />
                        <Form.Control type="email" name='mail' placeholder="Ingresa tu @email.com" value={inputEmail} onChange={handlesetemail} />
                        <Form.Control as="textarea" cols="30" rows="10" value={texareaSms} onChange={handlesettexarea} placeholder="Dejame saber que es lo que estas requiriendo"/>
                        <Button variant="primary" type="submit" >Enviar</Button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Contactame