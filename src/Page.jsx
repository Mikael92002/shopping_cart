import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import { Link, useParams } from "react-router";
import ErrorPage from "./ErrorPage";
import "./page.css";
import ShopIcon from "./ShopIcon";
import CartIcon from "./CartIcon";
import { useEffect, useState } from "react";

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
          console.log(data);
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
      <button onClick={logArray}>press here</button>
      <header>
        <Link to="/shop" className="header-link shop">
          <ShopIcon></ShopIcon>
        </Link>
        <Link to="/" className="header-link">
          <div className="title-div">Expensive Obsession</div>
        </Link>
        <Link to="/cart" className="header-link cart">
          <CartIcon></CartIcon>
        </Link>
      </header>

      {currPage === "shop" ? (
        <Shop
          productArray={productArray}
          handleIncreaseCart={handleIncreaseCart}
          handleDecreaseCart={handleDecreaseCart}
          addToCart={addToCart}
        ></Shop>
      ) : currPage === "cart" ? (
        <Cart></Cart>
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

  function logArray() {
    console.log(productArray);
    console.log(cart);
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
};

export default Page;
