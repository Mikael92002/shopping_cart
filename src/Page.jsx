import { useParams } from "react-router";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import { Link } from "react-router";
import ErrorPage from "./ErrorPage";
import "./page.css";
import ShopIcon from "./ShopIcon";
import CartIcon from "./CartIcon";

const Page = () => {
  const { currPage } = useParams();

  return (
    <>
      <header>
        <Link to="/shop" className="header-link"><ShopIcon></ShopIcon></Link>
        <Link to="/" className="header-link">
          <div className="title-div">Expensive Obsession</div>
        </Link>
        <Link to="/cart" className="header-link">
          <CartIcon></CartIcon>
        </Link>
      </header>

      {currPage === "shop" ? (
        <Shop></Shop>
      ) : currPage === "cart" ? (
        <Cart></Cart>
      ) : currPage === undefined ? (
        <Home></Home>
      ) : (
        <ErrorPage></ErrorPage>
      )}
    </>
  );
};

export default Page;
