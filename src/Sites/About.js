import '../Css/about.css'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Logo_devops from '../Imagenes/devops.jpg'
import Logo_frontend from '../Imagenes/frontend.jpg'
import Logo_backend from '../Imagenes/backend.jpg'
import Logo_basededatos from '../Imagenes/basededatos.jpg'

function About() {
    return (
        <div className="about" id='detalles'>
            <div className="about-width">
                <div className="about-datos">
                    <h2><i className="bi bi-award"></i> Areas de experiencias <i className="bi bi-award-fill"></i></h2>
                    <p>En esta seccion te mostrare los conocimientos que poseeo</p>
                </div>
                <div className="carrusel">
                    <Carousel className='sub-carrusel' variant='dark' >
                        <Carousel.Item >
                            <Card style={{ width: '40rem' }}>
                                <Card.Img variant="top" style={{ width: '100%' , height:'300px' }} src={Logo_devops} />
                                <Card.Body>
                                    <Card.Title>DevSecOps</Card.Title>
                                    <Card.Text>
                                        Conicimientos extensos en plataformas como AWS y herramientas como Doker, Terraform, Gitlab y ELK capaz de gestionar y orquestar una infraestructura.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{ width: '40rem' }}>
                                <Card.Img variant="top" style={{ width: '100%', height:'300px' }} src={Logo_frontend} />
                                <Card.Body>
                                    <Card.Title>Frontend Developer</Card.Title>
                                    <Card.Text>
                                        Experiencia en Site y app web responsive con conocimientos en React, Typescript y fundamentos basicos como HTML, CSS, Boostrap y Javascript.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{ width: '40rem' }}>
                                <Card.Img variant="top" style={{ width: '100%' , height:'300px' }} src={Logo_backend} />
                                <Card.Body>
                                    <Card.Title>Backend Developer</Card.Title>
                                    <Card.Text>
                                        Conocimentos en lenguajes como Python y NodeJS con capacidad de disponibilizar una API rest y de desarrollar modulos complejos.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Carousel.Item>
                        <Carousel.Item>
                            <Card style={{ width: '40rem' }}>
                                <Card.Img variant="top" style={{ width: '100%' , height:'300px' }} src={Logo_basededatos} />
                                <Card.Body>
                                    <Card.Title>Base de datos</Card.Title>
                                    <Card.Text>
                                        Un buen desarrollador debe conocimientos en base de datos y con mi experiencia soy capaz de diseña e implementar sitemas de bases de datos optimos.
                                    </Card.Text>

                                </Card.Body>
                            </Card>

                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default About