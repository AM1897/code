import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import RoutingPath from "./RoutingPath";
import HomeView from "../Views/HomeView";
import OtherView from "../Views/OtherView";

const Routing = () => {
    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to={RoutingPath.homeView}>Home</Link></li>
                    <li><Link to={RoutingPath.otherView}>Other</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path={RoutingPath.homeView} element={<HomeView/>} />
                <Route path={RoutingPath.otherView} element={<OtherView/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing