import { BaseProps } from "../types";
import { useState} from "react";


export default function StateDemo1({ title }: BaseProps) {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2 className={"title"}>{title}</h2>
            <button onClick={() => {setCount(prevState => prevState + 1)}}>Increment</button>
            <button onClick={() => {setCount(prevState => prevState - 1)}}> Decrement</button>
            <h3>{count}</h3>
        </>
    );
}
