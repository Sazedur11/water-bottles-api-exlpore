import Bottle from "../bottle/Bottle";
import './Bottles.css'
import { useEffect, useState } from "react";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    const handleCartBottle = bottle =>{
        const newCart = [...cart, bottle];
        setCart(newCart)
    }

    return (
        <div>
            <h3>Available Bottles: {bottles.length}</h3>
            <h4>Cart: {cart.length}</h4>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleCartBottle={handleCartBottle}
                        ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;