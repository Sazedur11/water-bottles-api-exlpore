import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { useEffect, useState } from "react";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;