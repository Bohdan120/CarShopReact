import React from 'react';
import { Card, Button } from 'antd';

const Cart = ({ items = [] }) => {
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                items.map((item) => (
                    <Card key={item.id} className="cart-item">
                        <img src={item.imageUrl} alt={item.name} />
                        <div>
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <Button type="danger">Remove</Button>
                        </div>
                    </Card>
                ))
            )}
            {items.length > 0 && (
                <div className="cart-summary">
                    <h3>Total: ${items.reduce((total, item) => total + item.price, 0)}</h3>
                    <Button type="primary">Checkout</Button>
                </div>
            )}
        </div>
    );
};

export default Cart;
