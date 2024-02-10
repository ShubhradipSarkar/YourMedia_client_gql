import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import FormPropsTextFields from "./decorations/Forms";
import ResponsiveAppBar1 from "./decorations/Testnav";
import FriendRqst from "./tabs/FriendRqst";
import Feed from "./tabs/Feed";
import FullWidthGrid from "./decorations/TestGrid";
import Appa from "./decorations/alertTest";
import Notifications from "./decorations/Notifications";
import ProfileDesc from "./decorations/ProfileDesc";
function MakeRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Login/>}/>
                <Route path = '/Register' element = {<Register/>}/>
                <Route path = '/Home' element = {<Home/>}/>
                <Route path = '/test' element = {<FormPropsTextFields/>}/>
                <Route path = '/test1' element = {<ResponsiveAppBar1/>}/>
                <Route path = '/test2' element = {<FullWidthGrid/>}/>
                <Route path = '/test3' element = {<Appa/>}/>
                <Route path = '/Requests' element = {<FriendRqst/>}/>
                <Route path = '/Feed' element = {<Feed/>}/>
                <Route path = '/Users' element = {<Home/>}/>
                <Route path = '/Notifications' element = {<Notifications/>}/>
                <Route path = '/userProfile' element ={<ProfileDesc />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MakeRoutes