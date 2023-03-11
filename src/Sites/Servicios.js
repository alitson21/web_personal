import Card from 'react-bootstrap/Card';
import '../Css/servicios.css'


function Servicios() {
    return (
        <div className="servicios">
            <Card border="primary" className='Card' style={{ width: '18rem' }}>
                <Card.Header><i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i> <i className="bi bi-star-fill"></i></Card.Header>
                <Card.Body>
                    <Card.Title>Aplicaciones Web</Card.Title>
                    <Card.Text>
                        Ofrezco servicios de creacion de aplicaciones web con desarollo backend(Api-rest) y base de datos (noSql).
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">$### costo a convenir</Card.Footer>
                <Card.Footer className="text-muted"><i class="bi bi-cart-plus"></i></Card.Footer>
            </Card>
            <Card border="secondary" style={{ width: '18rem' }}>
                <Card.Header><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></Card.Header>
                <Card.Body>
                    <Card.Title>Arquitectura Devops</Card.Title>
                    <Card.Text>
                        Ofrezco servicios de administracion de servicios cloud AWS y automatizacion del ciclo de vida de las aplicaciones.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">$$### costo a convenir</Card.Footer>
                <Card.Footer className="text-muted"><i className="bi bi-cart-plus"></i></Card.Footer>
            </Card>
            <Card border="success" style={{ width: '18rem' }}>
                <Card.Header><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></Card.Header>
                <Card.Body>
                    <Card.Title>Sevicios de Software</Card.Title>
                    <Card.Text>
                        Ofrezco servicios de desarrollo de script o aplicaciones desde el backend con (python o Nodejs).
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">$### costo a convenir</Card.Footer>
                <Card.Footer className="text-muted"><i className="bi bi-cart-plus"></i></Card.Footer>
            </Card>
            <Card border="danger" style={{ width: '18rem' }}>
                <Card.Header><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></Card.Header>
                <Card.Body>
                    <Card.Title>Asesoria de arquitectura</Card.Title>
                    <Card.Text>
                        Ofrezco servicios para mejorar y automatizar tu infraestructura con tecnologias como docker y terraform.
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">$### costo a convenir</Card.Footer>
                <Card.Footer className="text-muted"><i className="bi bi-cart-plus"></i></Card.Footer>
            </Card>
        </div>
    )
}

export default Servicios