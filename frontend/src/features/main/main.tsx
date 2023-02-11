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
            <h1 className="main-secondary-title">Why use B.O.S.S.?</h1>
            <div className="sells-div">
                <Sells />
            </div>
            <footer>

            </footer>
        </>
    )
}

export default Main;