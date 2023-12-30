import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const Context = createContext();

AppContext.propTypes = {
    children: PropTypes.node,
};

export default function AppContext({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);

    useEffect(() => {
        let count = 0;
        cartItems.map(() => {
            count += 1;
        });
        setCartCount(count);

        let total = 0;
        cartItems.map((val) => {
            total += val.quantity * val.price;
        });

        setCartSubTotal(total);
        
    }, [cartItems]);
    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

       
        setCartItems(storedCartItems);
    }, []);

    const handleAddToCart = (product, price , quantity) => {
        console.log(price)
        const cart = [...cartItems];
        const index = cart.findIndex((item) => item.id == product.id);

        if (index < 0) {
            product["quantity"] = quantity;
            product["price"] = price
            cart.push(product);
        } else {
            cart[index].price= price
            cart[index].quantity += quantity;
        }
        localStorage.setItem("cartItems", JSON.stringify(cart));
        setCartItems(cart);
    };

    const handleUpdateQuantity = (type, product) => {
        const cart = [...cartItems];
        const index = cart.findIndex((item) => item.id == product.id);

        if (type == "minus") {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            }
        } else {
            cart[index].quantity += 1;
        }
        localStorage.setItem("cartItems", JSON.stringify(cart));

        setCartItems(cart);
    };

    const handleRemoveFromCart = (product) => {
        const cart = [...cartItems];
        const newcart = cart.filter((item) => item.id != product.id);

        localStorage.setItem("cartItems", JSON.stringify(newcart));
        setCartItems(newcart);
    };

    return (
        <Context.Provider
            value={{
                cartItems,
                setCartItems,
                cartCount,
                setCartCount,
                cartSubTotal,
                setCartSubTotal,
                handleAddToCart,
                handleUpdateQuantity,
                handleRemoveFromCart,
            }}
        >
            {children}
        </Context.Provider>
    );
}
