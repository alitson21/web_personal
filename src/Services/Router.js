import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importacion de sitios
import Home from "../Sites/Home";
import About from "../Sites/About";
import Proyectos from "../Sites/Proyectos";
import Blog from "../Sites/Blog";
import Contactame from "../Sites/Contactame";
import Servicios from "../Sites/Servicios";
import Menu from "../Component/Menu";

function Router() {

    return (
        <BrowserRouter>
            {/* Nav */}
            <Menu></Menu>
            <Routes>
                <Route path="/" element ={<Home></Home>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route path="/Proyectos" element={<Proyectos></Proyectos>}></Route>
                <Route path="/Blog" element={<Blog></Blog>}></Route>
                <Route path="/Contactame" element={<Contactame></Contactame>}></Route>
                <Route path="/Servicios" element={<Servicios></Servicios>}></Route>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router