
import { Container, Button } from "react-bootstrap"

export const ExploreEvents = () => {
    return(
        <Container fluid="md" className='p-5 justify-content-center align-items-center bg-light'>
            <h1>Find your next Event</h1>
            <p className="fs-4">What would you attend next?</p>
            {/* <Button variant="primary" href="/agenda">Explore Next Events</Button> */}
        </Container>
    )
}