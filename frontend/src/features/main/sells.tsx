// import { Button } from "@mui/material";
import sellImageOne from '../media/aggregate_arrows_pointing_to_money.png'
import sellImageTwo from '../media/profit_rising_graph.png'
import sellImageThree from '../media/automatic_update.png'

const SellOne = () => {
    const sellsData = [
        {"alignRight": false, "num": 1, "h1": "All your information", "h1_sub": "collected in one place.", "p": "Savings, checking, investments, credit cards, and loans displayed in an easily digested format."},
        {"alignRight": true, "num": 2, "h1": "Suggested next steps", "p": "See recommendations for next steps and how they will affect your money."},
        {"alignRight": false,"num": 3, "h1":"Automatically updated", "p": "Just log in to see how things have changed since your last visit."}
    ]

    return (
        <div className="sells-container">
            {sellsData.map((sell) => {
                return (
                    <>
                        {sell.alignRight ?
                        <>
                            <div>
                                <img height="100%" width="100%" src={sellImageOne} alt="net worth graph going up to the right increasing"/>
                            </div>
                            <div style={{
                                            textAlign: 'right',
                                        }}>
                                            <h1>{sell.h1}</h1>
                                            <p>{sell.p}</p>
                            </div>
                            {/* <Button style={{
                                    marginTop: '15px',
                                }} variant="contained" size="large">
                                Sign up for free
                            </Button> */}
                        </>
                            :
                        <>
                            <div style={{
                                    textAlign: 'left',
                                }}>
                                <h1 style={{margin: '0'}}>{sell.h1}</h1>
                                <h1 style={{margin: '0'}}>{sell.h1_sub}</h1>
                                <p>{sell.p}</p>
                            </div>
                            <div>
                                <img height="100%" width="100%" src={sell.num === 1 ? sellImageTwo : sellImageThree} alt={sell.num === 1 ? "sellImageTwo" : "sellImageThree"}/>
                            </div>
                            {/* <Button style={{
                                    marginTop: '15px',
                                }} variant="contained" size="large">
                                Sign up for free
                            </Button> */}
                        </>
                        }
                    </>
                )
            })}
        </div>
    );
}

export default SellOne;