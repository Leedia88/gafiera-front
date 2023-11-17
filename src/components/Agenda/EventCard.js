import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function EventCard(props){
    return (
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>#{props.rowNumber}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.rowDate}</Card.Subtitle>
                    <Card.Text>
                        {props.rowDescription}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
    )
}