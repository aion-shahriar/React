import React from 'react';

const ProductTable = ({ products }) => {
    return (
        <div>
            <h3>Products : {products.length}</h3>
            <table border="1" cellPadding="10" cellSpacing="0" style={{margin: '0 auto'}}>
                <thead>
                    <tr>
                        <th>Item No.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;