import './App.css';
import DisplaySimpson from "./components/DisplaySimpson";
import {useState} from "react";
import axios from "axios";
import {sampleSimpson} from "./data/data";

function App() {

    const [simpson, setSimpson] = useState(sampleSimpson);

    const getSimpson = () => {
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            // Extract the DATA from the received response
            .then((response) => response.data)
            // Use this data to update the state
            .then((data) => {
                setSimpson(data[0]);
            });
    }

    return (
        <div className={'app'}>
            <DisplaySimpson simpson={simpson}/>
            <button type={"button"} onClick={getSimpson}>Get Simpson</button>
        </div>
    );
}

export default App;
