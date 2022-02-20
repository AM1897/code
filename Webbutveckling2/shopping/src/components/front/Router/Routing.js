import React from "react";
import Produkter from "../produkter/Produkter";
import {Route, Router, Routes} from "react-router-dom";

const Routing = ({albumItems}) => {
    return (
        <div>
            <Routes>
                <Route path='/' exact>
                    <Produkter albumItems={albumItems}/>
                </Route>
            </Routes>
        </div>
    )
}

export default Routing