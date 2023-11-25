import { Container, Button, Nav, NavLink } from "react-bootstrap"
import { ExploreEvents } from './components/ExploreEvents';

export default function HomePage(props) {

    return(
        <>
        <Container>
            <ExploreEvents events={props.events}/>
            <div className="row align-items-md-stretch">
                <div className="col-md-6">
                    <div className="h-100 p-5 text-white bg-dark rounded-3">
                        <h2>Learn Samba</h2>
                        <p>Samba de Gafieira is an energetic, super fun dance from Brazil! </p>
                        <p>Samba brought us together!</p>
                        <Nav.Link href="/login">
                            <Button variant ="dark" className="btn btn-outline-light">
                            Log In
                            </Button>
                        </Nav.Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="h-100 p-5 bg-light border rounded-3">
                    <h2>Brazilian Dance</h2>
                    <p>Samba de Gafieira (these days it's also called simply 'Gafieira') is the couple dance version of Samba. It seems very different from the solo version but its large number of possibilities of moves usually seduces lots of social dance enthusiastics.</p>
                    <Nav.Link href="/agenda">
                            <Button variant ="light" className="btn btn-outline-secondary">
                            Discover
                            </Button>
                        </Nav.Link>
                    </div>
                </div>
            </div>
            
        </Container>
            

        </>
    )
}