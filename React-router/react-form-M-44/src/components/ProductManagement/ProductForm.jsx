import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {

    const [error, setError] = useState("");


    const handleProductSubmit = (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;

        if(!name || !price || !quantity){
            setError('All fields are required');
            return;
        }
        else if(price <= 0 || quantity <= 0){
            setError('Price and Quantity must be positive numbers');
            return;
        }
        else {
            setError('');
        }



        console.log(name, price, quantity);

        const newProduct = {name, price, quantity};
        console.log(newProduct);
        handleAddProduct(newProduct);

        event.target.reset();
    }


    return (
        <div>
            <h3>Add a Product</h3>
            <form action="" onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="" placeholder='Product Name' />
                <br />
                <input type="number" name="price" id="" placeholder='Product Price' />
                <br />
                <input type="number" name="quantity" id="" placeholder='Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}>{error}</p>
        </div>
    );
};

export default ProductForm;