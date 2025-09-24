import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoredCart, getStoredCart, removeFromCart } from '../../utilities/localstorage';
import Cart from '../Cart/Cart';

const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([])

    const bottles=use(bottlesPromise);


    useEffect( () => {
        const storedCartIds= getStoredCart();
        // console.log(storedCartIds, bottles);

        const storedCart=[];

        for(const id of storedCartIds) {
            const cartBottle=bottles.find(bottle => bottle.id === id)

            if(cartBottle) {
                storedCart.push(cartBottle)
            }
        }

        setCart(storedCart)
    }, [bottles])

    const handleAddToCart=(bottle) => {
        // console.log("Bottles will be added to the cart", bottle);
        const newCart=[...cart, bottle]
        setCart(newCart);

        // save the bottle id in the storage
        addToStoredCart(bottle.id);


    }

    const handleRemoveFromCart = (id) => {
        const remainingCart=cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart); 
        removeFromCart(id)
    }
    
    return (
        <div>
            <h3>Bottles count: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle 
                        bottle={bottle} 
                        handleAddToCart={handleAddToCart}
                        key={bottle.id}>

                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;