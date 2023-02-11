// import { Button } from "@mui/material";
import logo from '..../aggregate_arrows_pointint_to_money.png'

const SellOne = () => {
    const sellsData = [
        {"alignRight": false, "num": 1, "h1": "All your information", "h1_sub": "collected in one place.", "p": "Savings, checking, investments, credit cards, and loans displayed in an easily digested format.", "imageURL": "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"},
        {"alignRight": true, "num": 2, "h1": "Suggested next steps", "p": "See recommendations for next steps and how they will affect your money.", "imageURL": "https://media.istockphoto.com/id/1339953021/photo/business-strategy-for-marketing-and-management.webp?s=612x612&w=is&k=20&c=6GTIhX_bkNwMoaISxip4b5Ui6AA2ynJFoYURVaU5Fx8="},
        {"alignRight": false,"num": 3, "h1":"Automatically updated", "p": "Just log in to see how things have changed since your last visit.", "imageURL": "https://media.istockphoto.com/id/1437073102/photo/small-boxes-with-delivery-marking-on-a-keyboard.jpg?s=612x612&w=is&k=20&c=ZHe55r1TW2z5FNlxuiu1DW6sl8rUzxRqGzMMhIKgryM="}
    ]

    return (
        <div className="sells-container">
            {sellsData.map((sell) => {
                return (
                    <>
                        {sell.alignRight ?
                        <>
                            <div>
                                <img src={logo} alt="net worth graph going up to the right increasing"/>
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
                                <img src={sell.imageURL} alt="selling item pictures"/>
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