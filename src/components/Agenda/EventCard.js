import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../LogIn/UserDetails';

export default function EventCard(props){

    const {user, setUser} = useContext(UserContext)
    
    // const random_url = `https://source.unsplash.com/random/180*100/?${props.rowNumber}`;
    const random_url = `https://picsum.photos/150/100?random=${props.event.id}`;

    return (
        <Card className="p-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={random_url} />
                <Card.Body>
                    <Card.Title>#{props.event.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.event.date}</Card.Subtitle>
                    <Card.Text>
                        {props.event.description}
                    </Card.Text>
                    {user.name &&
                        <Button variant="primary">See Details</Button>}
                </Card.Body>
            </Card>
    )

}
