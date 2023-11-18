import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function EventCard(props){
    
    // const random_url = `https://source.unsplash.com/random/180*100/?${props.rowNumber}`;
    const random_url = `https://picsum.photos/150/100?random=${props.rowNumber}`;
    
    return (
        <Card class="p-2" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={random_url} />
                <Card.Body>
                    <Card.Title>#{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.rowDate}</Card.Subtitle>
                    <Card.Text>
                        {props.rowDescription}
                    </Card.Text>
                    <Button variant="primary">See Details</Button>
                </Card.Body>
            </Card>
    )

}
