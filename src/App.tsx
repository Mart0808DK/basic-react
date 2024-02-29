import { useState } from "react";
import "./App.css";
import PropsDemo from "./exercises/PropsDemo.tsx";
import {ListDemo} from "./exercises/ListDemo.tsx";
import EventDemo from "./exercises/EventDemo.tsx";
import FormUncontrolled from "./exercises/FormUncontrolled.tsx";
import StateDemo1 from "./exercises/StateDemo1.tsx";
import StateDemo2 from "./exercises/StateDemo2.tsx";
import StateDemo3 from "./exercises/StateDemo3.tsx";
import UseEffectDemo from "./exercises/UseEffectDemo.tsx";
import FetchDemo1 from "./exercises/FetchDemo1.tsx";
import LiftingState from "./exercises/LiftingState.tsx";
import ContextDemoApp from "./exercises/ContextDemo.tsx";


export default function App() {
    const [selectedView, setSelectedView] = useState("info");


    function handleSelected(selected: string) {
        setSelectedView(selected);
    }




    return (
        <>
            <div className="outer-div-style">
                <div className="header-style">
                    <h2>React Exercises</h2>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ flex: 1, padding: 10 }}>
                        <Buttons onSelected={handleSelected} />
                    </div>
                    <div className="exercise-style">
                        {selectedView == "info" ? <p>All exercises for React day-1</p> : null}
                        {selectedView == "props1" ? <PropsDemo title={"Props Demo1"} ></PropsDemo> : null}
                        {selectedView == "listdemo" ? <ListDemo title={"List Demo"} ></ListDemo> : null}
                        {selectedView == "eventdemo" ? <EventDemo title={"Event Demo"} ></EventDemo> : null}
                        {selectedView == "formdemo" ? <FormUncontrolled title={"Form Demo"} ></FormUncontrolled> : null}
                        {selectedView == "statedemo1" ? <StateDemo1 title={"State Demo1"} ></StateDemo1> : null}
                        {selectedView == "statedemo2" ? <StateDemo2 title={"State Demo2"} ></StateDemo2> : null}
                        {selectedView == "statedemo3" ? <StateDemo3 title={"State Demo3"} ></StateDemo3> : null}
                        {selectedView == "useEffectDemp" ? <UseEffectDemo title={"Use Effect Demo"} ></UseEffectDemo> : null}
                        {selectedView == "fetchdemo" ? <FetchDemo1 title={"Fetch Demo1"} ></FetchDemo1> : null}
                        {selectedView == "lifting-state" ? <LiftingState title={"Lifting State"} ></LiftingState> : null}
                        {selectedView == "context-state" ? <ContextDemoApp title={"Context State"} ></ContextDemoApp> : null}
                        {/**Add the exercise components you create for each exercise using the key you used for the matching button  */}
                    </div>
                </div>
            </div>
        </>
    );
}
type ButtonProps = {
    onSelected: (selected: string) => void;
};
const Buttons = (props: ButtonProps) => {
    const { onSelected: handleSelected} = props;
    return (
        <>
            <button className="btn-w100" onClick={() => handleSelected("info")}>
                Info
            </button>
            {/* Add a new button for each of the exercises you complete */}
            <button className="btn-w100" onClick={() => handleSelected("props1")}>
                Props demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("listdemo")}>
                List demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("eventdemo")}>
                Event demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("formdemo")}>
                Form demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo1")}>
                State demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo2")}>
                State demo2
            </button>
            <button className="btn-w100" onClick={() => handleSelected("statedemo3")}>
                State demo3
            </button>
            <button className="btn-w100" onClick={() => handleSelected("useEffectDemp")}>
                UseEffect demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("fetchdemo")}>
                Fetch demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("lifting-state")}>
                Lifting State demo1
            </button>
            <button className="btn-w100" onClick={() => handleSelected("context-state")}>
                Context State demo1
            </button>
        </>
    );
};