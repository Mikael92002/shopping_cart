import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import { Link, useParams } from "react-router";
import ErrorPage from "./ErrorPage";
import "./page.css";
import ShopIcon from "./ShopIcon";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const Page = () => {
  const { currPage } = useParams();
  const [productArray, setProductArray] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (productArray.length === 0 && currPage === "shop") {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          setProductArray(() => {
            return data.map((obj) => {
              return { ...obj, cartCount: 0 };
            });
          });
        })
        .catch((err) => console.error(err));
    }
  }, [productArray.length, currPage]);

  return (
    <>
      <header>
        <Link to="/shop" className="header-link shop">
          <ShopIcon></ShopIcon>
        </Link>
        <Link to="/" className="header-link">
          <div className="title-div">Expensive Obsession</div>
        </Link>
        <Link to="/cart" className="header-link cart">
          <div className="cart-div">
            <CartIcon></CartIcon>
            <div className="cart-count">
              {cartTotal() < 100 && cartTotal()} {cartTotal() >= 100 && "99+"}
            </div>
          </div>
        </Link>
      </header>

      {currPage === "shop" ? (
        <>
          <Toaster
            toastOptions={{
              style: {
                backgroundColor: "#fc80a5",
                fontSize: "larger",
              },
            }}
            position="bottom-center"
          ></Toaster>
          <Shop
            productArray={productArray}
            handleIncreaseCart={handleIncreaseCart}
            handleDecreaseCart={handleDecreaseCart}
            addToCart={addToCart}
          ></Shop>
        </>
      ) : currPage === "cart" ? (
        <>
          <Toaster
            position="bottom-center"
            toastOptions={{
              style: { backgroundColor: "#fc80a5", fontSize: "larger" },
            }}
          ></Toaster>
          <Cart
            cart={cart}
            decreaseFromCart={decreaseFromCart}
            increaseFromCart={increaseFromCart}
          ></Cart>
        </>
      ) : currPage === undefined ? (
        <Home></Home>
      ) : (
        <ErrorPage></ErrorPage>
      )}

      <footer>
        <a href="https://github.com/Mikael92002/shopping_cart">Github Repo</a>
      </footer>
    </>
  );

  function cartTotal() {
    let totalItems = 0;
    for (let cartItem of cart) {
      totalItems = cartItem.cartCount + totalItems;
    }
    return totalItems;
  }

  function handleIncreaseCart(productID) {
    setProductArray((prevArray) => {
      return prevArray.map((shopItem) => {
        if (shopItem.id === productID) {
          return { ...shopItem, cartCount: shopItem.cartCount + 1 };
        } else {
          return shopItem;
        }
      });
    });
  }

  function handleDecreaseCart(productID) {
    setProductArray((prevArray) => {
      return prevArray.map((shopItem) => {
        if (shopItem.id === productID) {
          if (shopItem.cartCount > 0) {
            return { ...shopItem, cartCount: shopItem.cartCount - 1 };
          } else return shopItem;
        } else return shopItem;
      });
    });
  }

  function addToCart(product) {
    setCart((prevCart) => {
      let newArr = [...prevCart];
      for (let i = 0; i < newArr.length; i++) {
        if (product.id === newArr[i].id) {
          newArr[i] = {
            ...newArr[i],
            cartCount: newArr[i].cartCount + product.cartCount,
          };
          return newArr;
        }
      }
      newArr.push(product);
      return newArr;
    });
  }

  function decreaseFromCart(product) {
    setCart((prevCart) => {
      let mappedArr = prevCart.map((cartItem) => {
        if (cartItem.id === product.id) {
          if (cartItem.cartCount > 0) {
            return { ...cartItem, cartCount: cartItem.cartCount - 1 };
          }
        } else return cartItem;
      });
      for (let i = 0; i < mappedArr.length; i++) {
        if (mappedArr[i].cartCount <= 0) {
          mappedArr.splice(i, 1);
        }
      }
      return mappedArr;
    });
  }

  function increaseFromCart(product) {
    setCart((prevCart) => {
      return prevCart.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, cartCount: cartItem.cartCount + 1 };
        } else return cartItem;
      });
    });
  }
};

export default Page;
