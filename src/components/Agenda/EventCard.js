import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../LogIn/UserDetails';

export default function EventCard(props){

    // const {user, setUser} = useContext(UserContext)
    const user = JSON.parse(localStorage.getItem("user"));
    
    const random_url = `https://picsum.photos/150/100?random=${props.event.id}`;

    // const back_url = "http://34.155.67.24:8081/api/events/"
    const back_url = "http://localhost:8081/api/events/"
    

    const enroll = () => { 
       fetch( `${back_url}${props.event.id}/user/${user.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' }
            })
            .then((response) => {
                if(!response.ok){
                    throw Error("Une erreur est survenue...")
                }
                return response.json;})
            .then(data => console.log(data))
            .catch(err => console.log(err)); //récupérer les participants de l'event
    }
    console.log(props);
    return (
        <Col key={props.id}>
         <Card  className="p-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={random_url} />
                <Card.Body>
                    <Card.Title>#{props.event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.event.date}</Card.Subtitle>
                    <Card.Text>
                        {props.event.description}
                    </Card.Text>
                    {user && user.name &&
                        <Button variant="primary"
                            onClick={enroll}>Register</Button>}
                </Card.Body>
            </Card>
        </Col>
       
    )

}
