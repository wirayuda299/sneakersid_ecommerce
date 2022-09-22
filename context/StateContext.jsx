import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const Context = createContext();

export const StateProvider = ({ children }) => { 
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [quantity, setQuantity] = useState(0);
  
  const tax = 0.1;


  const addToCart = (product, quantity) => { 

    if (quantity < 1) { 
       return toast.error('Quantity must be at least 1');
      
    }
    const isInCart = cartItems.find((item) => item._id === product._id);
    //jika product sudah ada di cart, tambahkan quantity
    setTotalPrice((prev) => prev + (product.price * quantity));
    setTotalQuantity((prev) => prev + quantity);

    if (isInCart) { 
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem._id === product._id) return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          }    
      })
      setCartItems(updatedCartItems);
      
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, {...product}]);
    }

    toast.success(` ${quantity} ${product.name} added to cart😎`);
    
  }

  let foundProduct
  let index

  const updateCartQuantity = (id, value) => { 
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter(item => item._id !== id);

    if (value === 'increment') {
      setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
      setTotalQuantity((prev) => prev + 1);
      setTotalPrice((prev) => prev + foundProduct.price);

    } else if (value === 'decrement') {
      if (foundProduct.quantity > 1) { 
        setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
        setTotalQuantity((prev) => prev - 1);
        setTotalPrice((prev) => prev - foundProduct.price);

      }
    }

  }
  const increaseQuantity = () => { 
    setQuantity((previousQuantity) => previousQuantity + 1);
  }
  const decreaseQuantity = () => { 
    setQuantity((previousQuantity) => {
      if (previousQuantity === 0) return 0;
      return previousQuantity - 1;
    });
  }

  return (
    <Context.Provider
      value={{
        cartItems,
        totalPrice,
        totalQuantity,
        quantity,
        increaseQuantity,
        decreaseQuantity,
        addToCart,
        updateCartQuantity,
        tax
      }}>
      {/* we can acces this state anywhere because it's global state*/}
      {children}
    </Context.Provider>
  )

}
export const useStateContext = () => useContext(Context);