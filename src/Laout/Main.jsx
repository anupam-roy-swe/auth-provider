
import { Outlet } from "react-router-dom";
import Hader from "../Component/Hader/Hader";
import Home from "../Component/Home/Home";


const Main = () => {
    return (
        <div>
            <Hader/>
            <Outlet/>
            <Home/>
        </div>
    );
};

export default Main;