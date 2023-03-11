import '../Css/home.css'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Foto from '../Imagenes/logo_personal-2.png'
import About from './About'
import { Link } from 'react-router-dom'
import Cv from '../Imagenes/Profile_final.pdf'

function Home() {
const url_Youtube =  "https://www.youtube.com/"
const url_Instagram =  "https://www.instagram.com/accounts/login/"
const url_Twitter =  "https://twitter.com/?lang=es"
const url_Twitch =  "https://www.twitch.tv/"
const url_Github =  "https://github.com/"
const url_mail =  "https://www.gmail.com/mail/help/intl/es/about.html?iframe"


    return (
        <>
        <div className="home">
            <div className="redes">
                <ul>
                    <li><Link to={url_Youtube}><i className="bi bi-youtube"></i></Link></li>
                    <li><Link to={url_Instagram}><i className="bi bi-instagram"></i></Link></li>
                    <li><Link to={url_Twitter}><i className="bi bi-twitter"></i></Link></li>
                    <li><Link to={url_Twitch}><i className="bi bi-twitch"></i></Link></li>
                    <li><Link to={url_Github}><i className="bi bi-github"></i></Link></li>
                    <li><Link to={url_mail}><i className="bi bi-envelope"></i></Link></li>
                </ul>
            </div>
            <div className="informacion">
                <div className="info">
                <h3><i className="bi bi-cup-hot"></i> Hola Bienvenidos !</h3>
                <h1><b>Soy</b> Alitson<b> Martinez</b></h1>
                <p>Esta es mi pagina web, soy Desarrollador WEB y DevSeCops <br />con mas de 5 años de experiencia creando sitios, aplicaciones web y Arquitectura en la nube <i className="bi bi-clouds"></i></p>
                <Button as={Link} to={Cv} target="_blank" variant="info">Descarga CV</Button>{' '}
                </div>
            </div>
            <div className="foto">
                <Image src={Foto} style={{ height: '940px', width: '650px' }}></Image>
            </div>
            <div className="scroll">
                <a href="#detalles">puedes ver mas detalles<i className="bi bi-chevron-double-right"></i></a>
            </div>
        </div>
        <About></About>
        </>
    )
}

export default Home