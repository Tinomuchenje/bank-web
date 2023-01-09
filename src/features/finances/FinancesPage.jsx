import { Row } from 'react-bootstrap';
import { CashCoin, ArrowDownUp, ClockHistory, PeopleFill } from 'react-bootstrap-icons';
import CustomCardComp from '../../components/CustomCardComp';
import React, { useState } from 'react';

function FinancesPage() {
    const [isLoans, setisLoan] = useState(true)
    const [isTransfers, setisTransfers] = useState(false)
    const [isHistory, setisHistory] = useState(false)
    const [isClient, setisClient] = useState(false)

    function loansDue() {
        setisLoan(true)
        setisTransfers(false)
        setisHistory(false)
        setisClient(false)
    }

    function transfers() {
        setisLoan(false)
        setisTransfers(true)
        setisHistory(false)
        setisClient(false)
    }

    function accountshistory() {
        setisLoan(false)
        setisTransfers(false)
        setisHistory(true)
        setisClient(false)
    }

    function clients() {
        setisLoan(false)
        setisTransfers(false)
        setisHistory(false)
        setisClient(true)
    }

    return (
        <div>
            <br />
            <Row xs={2} md={2} lg={6}>
                <h5 className='Finance-Header'> My Finances</h5>
            </Row>
            <Row>
                <CustomCardComp
                    onClick={loansDue}
                    active={isLoans}
                    icon={CashCoin}
                    title='Loans Due'
                    description='View your Loan and Credit card payments ' />
                <CustomCardComp
                    onClick={transfers}
                    active={isTransfers}
                    icon={ArrowDownUp}
                    title='Transfers' description='View and Manage your account transfers' />
                <CustomCardComp
                    onClick={accountshistory}
                    active={isHistory}
                    icon={ClockHistory}
                    title='History'
                    description='View your account transactions history' />
                <CustomCardComp
                    onClick={clients}
                    active={isClient}
                    icon={PeopleFill}
                    title='My Clients'
                    description='View and manage your external accounts and contacts' />
            </Row>
        </div>
    );
}


export default FinancesPage;