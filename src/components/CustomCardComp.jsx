import Card from 'react-bootstrap/Card';

function CustomCardComp(props) {

    return (
        <Card
        onClick={props.onClick}        
            bg={props.active ?'primary' :'white'}
            text={props.active ?'white' :'primary'}
            style={{ width: '14rem' }}>
            <Card.Body> 
                <Card.Text> {<props.icon color={props.active ?'white' :'royalblue'} size={40} />}</Card.Text>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CustomCardComp;