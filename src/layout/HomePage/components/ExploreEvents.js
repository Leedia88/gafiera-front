
import { Container, Button } from "react-bootstrap"

export const ExploreEvents = () => {
    return(
        <Container fluid="md" className='justify-content-center align-items-center'>
            <h1>Find your next Gafiera Event</h1>
            <p>What would you attend next?</p>
            <Button variant="primary" href="/agenda">Explore next events</Button>
        </Container>
    )
}