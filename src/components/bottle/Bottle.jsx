import './bottle.css'

const Bottles = ({bottle, handleCartBottle}) => {

    console.log(bottle)
    const {img, name, price} = bottle;

    return (
        <div className="bottle">
            <img className="image" src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: {price}</p>
            <button className="btn" onClick={() => handleCartBottle(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottles;