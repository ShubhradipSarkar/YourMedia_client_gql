import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import FormPropsTextFields from "./decorations/Forms";
import ResponsiveAppBar1 from "./decorations/Testnav";
import FriendRqst from "./tabs/FriendRqst";
import Feed from "./tabs/Feed";

function MakeRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Login/>}/>
                <Route path = '/Register' element = {<Register/>}/>
                <Route path = '/Home' element = {<Home/>}/>
                <Route path = '/test' element = {<FormPropsTextFields/>}/>
                <Route path = '/test1' element = {<ResponsiveAppBar1/>}/>
                <Route path = '/Requests' element = {<FriendRqst/>}/>
                <Route path = '/Feed' element = {<Feed/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

export default MakeRoutes