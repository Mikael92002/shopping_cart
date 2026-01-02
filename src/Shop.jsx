import styles from "./shop.module.css";
import ShopItem from "./ShopItem";
import ShopCard from "./ShopCard";

const Shop = ({ productArray, handleIncreaseCart, handleDecreaseCart, addToCart }) => {
  return (
    <>
      <div className={styles.grid_container}>
        {productArray.map((shopItem) => {
          return (
            <ShopCard
              key={shopItem.id}
              productID={shopItem.id}
              title={shopItem.title}
              rating={shopItem.rating.rate}
              price={shopItem.price}
              image={shopItem.image}
              increaseClick={handleIncreaseCart}
              decreaseClick={handleDecreaseCart}
              cartCount={shopItem.cartCount}
              addToCart = {addToCart}
            ></ShopCard>
          );
        })}
      </div>
    </>
  );
};

export default Shop;
