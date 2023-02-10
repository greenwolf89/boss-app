// import React from "react";
import Banner from "./banner";
import LineBreak from "./linebreak";
import Sells from "./sells";

function Main() {

    return (
        <>
            <section>
                <Banner />
            </section>
            <LineBreak />
            <div style={{
                background: '#ebf1f5',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                textAlign: 'center',
            }}>
                <Sells />
            </div>
            <footer>

            </footer>
        </>
    )
}

export default Main;