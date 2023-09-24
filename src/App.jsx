import Title from "./Main/Title";
import Button from "./Common/Button";
import Board from "./Main/Board";
import { useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);

    const handleClick = () => setCounter(counter+1);
    
    return (
        <div className="m-5">
            <Title text={'App React'} />
            <p className="my-3">Contador: {counter}</p>
            <Button onClick={handleClick} text={'Púlsame'}/>
            <div className="grid grid-cols-2 mt-4 gap-4">
                <Board title={'Título 1'}>
                    Contenido
                </Board>
                <Board title={'Título 2'}>
                    Contenido
                </Board>
            </div>
        </div>
    );
}