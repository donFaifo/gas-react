import Title from "./Main/Title";
import Button from "./Common/Button";
import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Main from './Main';
import About from './About';


function LinkWrapped({ to, children }) {
    return (
        <div className="p-2 mr-3">
            <Link to={to} className="font-bold hover:underline">
                {children}
            </Link>
        </div>
    )
}

export default function App() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter+1);
    
    return (
        <div className="m-5">
            <Title text={'App React'} />
            <p className="my-3">Contador: {counter}</p>
            <Button onClick={handleClick} text={'Púlsame'}/>
            <div className="mt-3 w-full flex">
                <LinkWrapped to={`/`}>Main</LinkWrapped>
                <LinkWrapped to={`about`}>Acerca de...</LinkWrapped>
            </div>
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