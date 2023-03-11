import Image from 'react-bootstrap/Image'
import Foto from '../Imagenes/logo-personal3.png'
import Card from 'react-bootstrap/Card'
import '../Css/proyectos.css'

function Proyectos() {
    return (
        <div className="proyectos">
            <div className="imagen">
                <Image src={Foto} style={{ height: '880px', width: '600px' }}></Image>
            </div>
            <div className="cards">
                <h2><i className="bi bi-list-stars"></i> Listado de Proyectos</h2>
                <div className="mini-proyectos">
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Ecommerce proyect</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Tienda de productos</Card.Subtitle>
                            <Card.Text>
                                Proyecto realizado con React, boostrap y una api-rest donde se pueden observar los productos y detallarlos.
                            </Card.Text>
                            <Card.Link href="#"><i className="bi bi-github"></i> Github link</Card.Link>
                            <Card.Link href="#"><i className="bi bi-file-play"></i> Video referencia</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Tablero de Baloncesto</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Juego de baloncestos</Card.Subtitle>
                            <Card.Text>
                                Se trata de un tablero de baloncesto donde podremos elegir equipos internacionales y jugar un partido al azar.
                            </Card.Text>
                            <Card.Link href="#"><i className="bi bi-github"></i> Github link</Card.Link>
                            <Card.Link href="#"><i className="bi bi-file-play"></i> Video referencia</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Api Rest full</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Api para Devops</Card.Subtitle>
                            <Card.Text>
                                Contruccion de una api rest que nos permite automatizar procesos de devops a traves de diferentes comandos e interface.
                            </Card.Text>
                            <Card.Link href="#"><i className="bi bi-github"></i> Github link</Card.Link>
                            <Card.Link href="#"><i className="bi bi-file-play"></i> Video referencia</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Chat Bot</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Chat bot con Django</Card.Subtitle>
                            <Card.Text>
                                Robot chat bot conectado con teams que nos permite responder con informacion desde una base de datos de configuraciones.
                            </Card.Text>
                            <Card.Link href="#"><i className="bi bi-github"></i> Github link</Card.Link>
                            <Card.Link href="#"><i className="bi bi-file-play"></i> Video referencia</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Infraestructura en AWS</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Sitema automatizado con Cloudformation</Card.Subtitle>
                            <Card.Text>
                                Sistema automatizado con plantillas cloudformation para desplegar una infraestructura en aws con 4 env y sus conexiones
                            </Card.Text>
                            <Card.Link href="#"><i className="bi bi-github"></i> Github link</Card.Link>
                            <Card.Link href="#"><i className="bi bi-file-play"></i> Video referencia</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title>Pipeline yml</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Construccion de Herramienta Docker</Card.Subtitle>
                            <Card.Text>
                                Aplicaciones en python que nos permite ejecutar pipelines o construcciones masiva de contenedores docker
                            </Card.Text>
                            <Card.Link href="#"><i className="bi bi-github"></i> Github link</Card.Link>
                            <Card.Link href="#"><i className="bi bi-file-play"></i> Video referencia</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Proyectos