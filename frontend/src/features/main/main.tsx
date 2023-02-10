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
                margin: '0',
                padding: '0',
            }}>
                <Sells />
            </div>
            <footer>

            </footer>
        </>
    )
}

export default Main;