const SellOne = () => {
    const sellsData = [
        {"alignRight": false, "num": 1, "h1": "All your information", "h1_sub": "collected in one place.", "h2": "Savings, checking, investments, credit cards, and loans displayed in an easily digested format.", "imageURL": "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"},
        {"alignRight": true, "num": 2, "h1": "Another random title", "h2": "A smaller random title", "imageURL": "https://media.istockphoto.com/id/1339953021/photo/business-strategy-for-marketing-and-management.webp?s=612x612&w=is&k=20&c=6GTIhX_bkNwMoaISxip4b5Ui6AA2ynJFoYURVaU5Fx8="},
        {"alignRight": false,"num": 3, "h1":"Third title", "h2": "5th title", "imageURL": "https://media.istockphoto.com/id/1437073102/photo/small-boxes-with-delivery-marking-on-a-keyboard.jpg?s=612x612&w=is&k=20&c=ZHe55r1TW2z5FNlxuiu1DW6sl8rUzxRqGzMMhIKgryM="}
    ]

    return (
        <>
            <div style={{
                height: '1000px',
                background: '#ebf1f5',
                padding: '0',
                margin: '0',
                width: '45%',
                justifyContent: 'center',
                textAlign: 'center',
            }}>
                <h1 style={{fontSize: '48px'}}>Why use B.O.S.S.?</h1>
                {sellsData.map((sell) => {
                    return (
                        <div style={{
                            width: '100%',
                            margin: '0',
                            height: '300px',
                        }}>
                            {sell.alignRight ?
                            <div key={sell.num} style={{
                                            textAlign: 'right'
                                        }}>
                                            <h1>{sell.h1}</h1>
                                            <h2>{sell.h2}</h2>
                                        </div>
                                :
                                <div key={sell.num} style={{
                                    textAlign: 'left',
                                }}>
                                    <h1 style={{margin: '0'}}>{sell.h1}</h1>
                                    <h1 style={{margin: '0'}}>{sell.h1_sub}</h1>
                                    <p>{sell.h2}</p>
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </>
    );
}

export default SellOne;