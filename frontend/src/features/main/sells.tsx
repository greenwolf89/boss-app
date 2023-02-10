const SellOne = () => {
    const sellsData = [
        {"h1": "This should be a title", "h2": "This should be a smaller title", "imageURL": "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_960_720.png"},
        {"h1": "Another random title", "h2": "A smaller random title", "imageURL": "https://media.istockphoto.com/id/1339953021/photo/business-strategy-for-marketing-and-management.webp?s=612x612&w=is&k=20&c=6GTIhX_bkNwMoaISxip4b5Ui6AA2ynJFoYURVaU5Fx8="},
        {"h1":"Third title", "h2": "5th title", "imageURL": "https://media.istockphoto.com/id/1437073102/photo/small-boxes-with-delivery-marking-on-a-keyboard.jpg?s=612x612&w=is&k=20&c=ZHe55r1TW2z5FNlxuiu1DW6sl8rUzxRqGzMMhIKgryM="}
    ]

    return (
        <div style={{
            height: '600px',
            background: '#ebf1f5',
            padding: '0',
            margin: '0',
        }}>
            {sellsData.map((sell) => {
                return (
                    <div key={sell.h1} style={{
                        margin: '0',
                    }}>

                    </div>
                );
            })}
        </div>
    );
}

export default SellOne;