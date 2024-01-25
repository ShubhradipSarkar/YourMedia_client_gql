import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import { BrowserRouter } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'

function MakeRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Login/>}/>
                <Route path = '/Register' element = {<Register/>}/>
                <Route path = '/Home' element = {<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default MakeRoutes