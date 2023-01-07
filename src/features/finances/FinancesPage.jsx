import { Row } from 'react-bootstrap';
import { CashCoin, ArrowDownUp, ClockHistory } from 'react-bootstrap-icons';
import CustomCardComp from '../../components/CustomCardComp';

function FinancesPage() {
    return (
        <div>
            <br />
            <Row xs={2} md={2} lg={6}>
                <h5 className='Finance-Header'> My Finances</h5>          
            </Row>
            <Row>
            <CustomCardComp active = {true} icon={CashCoin} title='Loans Due' description='Hameno something' />
            <CustomCardComp active = {false}  icon={ArrowDownUp} title='Transfers' description='Hameno something' />
            <CustomCardComp active = {false} icon={ClockHistory}   title='History' description='Hameno something' />
            <CustomCardComp active = {false} icon={ArrowDownUp} title='My Clients' description='Hameno something' />
            </Row>
        </div>
    );
}

export default FinancesPage;