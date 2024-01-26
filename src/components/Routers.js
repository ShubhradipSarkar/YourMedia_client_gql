import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import FormPropsTextFields from "./decorations/Forms";
import ResponsiveAppBar1 from "./decorations/Testnav";

function MakeRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Login/>}/>
                <Route path = '/Register' element = {<Register/>}/>
                <Route path = '/Home' element = {<Home/>}/>
                <Route path = '/test' element = {<FormPropsTextFields/>}/>
                <Route path = '/test1' element = {<ResponsiveAppBar1/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default MakeRoutes