
import Card from 'react-bootstrap/Card';

function CustomCardComp(props) {

    return (
        <Card
            bg={props.active ?'primary' :'white'}
            text={props.active ?'white' :'primary'}
            style={{ width: '10rem' }}>
            <Card.Body> 
                <Card.Text> {<props.icon color={props.active ?'white' :'royalblue'} size={45} />}</Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CustomCardComp;