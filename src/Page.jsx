import { useParams } from "react-router";
import Shop from "./Shop";
import Cart from "./Cart";
import Home from "./Home";
import { Link } from "react-router";
import ErrorPage from "./ErrorPage";
import "./page.css";
import HomeIcon from "./HomeIcon";
import CartIcon from "./CartIcon";

const Page = () => {
  const { currPage } = useParams();

  return (
    <>
      <header>
        <Link to="/">
          <button>
            <HomeIcon></HomeIcon>
            <div className="header-div">LuxuryGoods</div>
          </button>
        </Link>
        <Link to="/shop">
          <button>Shop</button>
        </Link>
        <Link to="/cart">
          <button>
            <CartIcon></CartIcon>
          </button>
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
