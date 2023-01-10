import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes
} from "react-router-dom";
import { TickerTape } from "react-ts-tradingview-widgets";
import DashboardPage from '../dashboard/DashboardPage';
import FinancesPage from '../finances/FinancesPage';
import ErrorPage from '../../ErrorPage';


function HomeComp() {
    return (
        <Router>
            <div>
                <Navbar bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand ><em><b>Bank</b></em></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/dashboard"} >Dashboard</Nav.Link>
                            <Nav.Link as={Link} to={"/my-finances"}>My Finances</Nav.Link>
                            <Nav.Link as={Link} to={"/transfer"}>Transfer</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
            <TickerTape colorTheme="dark"></TickerTape>
            </div>

            <div class="main">
                <Routes>
                    <Route exact path="/dashboard" element={<DashboardPage/>}/>
                    <Route exact path="/my-finances" element={<FinancesPage/>}/>
                    <Route exact path="/transfer" element={<FinancesPage/>}/>
                    <Route exact path="*" element={<ErrorPage/>}/>
                </Routes>
            </div>

        </Router>
    );
}

export default HomeComp;