import { ForexCrossRates } from "react-ts-tradingview-widgets";


function DashboardPage() {
    return ( <ForexCrossRates colorTheme="dark" currencies={[ "ZAR", "EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD","CNY"]} width={500} autosize></ForexCrossRates>);
}

export default DashboardPage;