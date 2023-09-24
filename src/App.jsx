import { Routes, Route } from "react-router-dom";
import Main from './Main';
import About from './About';
import { NavbarSimple } from "./NavbarSimple"; 

export default function App() {    
    return (
        <div className="mx-auto max-w-screen-xl">
            <NavbarSimple />
            <div>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='about' element={<About />} />
                    <Route path='*' element={<Main />} />
                </Routes>
            </div>
        </div>
    );
}