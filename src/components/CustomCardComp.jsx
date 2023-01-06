
import { CashCoin } from 'react-bootstrap-icons';

function CustomCardComp(props) {

    return (
        <div className="card" style={{ width: '18rem' }}>
          
            <div className="custom-card-comp">
                <CashCoin color="royalblue" size={50} />
                </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>

            </div>
        </div>

    );
}

export default CustomCardComp;