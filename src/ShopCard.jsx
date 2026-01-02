import styles from "./shop.module.css";
import { toast } from "sonner";

const ShopCard = ({
  title,
  price,
  rating,
  image,
  decreaseClick,
  increaseClick,
  cartCount,
  productID,
  addToCart,
}) => {
  const shopItem = {
    id: productID,
    cartCount: cartCount,
    title: title,
    price: price,
    rating: rating,
    image: image,
  };

  return (
    <>
      <div className={styles.card_container}>
        <div className={styles.image_container}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.text_section}>
          <div className={styles.title}>{title}</div>
          <div className={styles.price}>{"$" + price}</div>
          <div className={styles.rating}>{renderStar(rating)}</div>
        </div>
        <div className={styles.cart_options_container}>
          <button onClick={() => decreaseClick(productID)}>-</button>
          {cartCount}
          <button onClick={() => increaseClick(productID)}>+</button>
          <button
            onClick={() => {
              if (cartCount > 0) {
                addToCart(shopItem);
                toast("Item Successfully Added To Cart!");
              }
            }}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );

  function renderStar(rating) {
    let star = "";
    for (let i = 0; i < 5; i++) {
      let starsLeft = rating - i;
      if (starsLeft >= 1) {
        star = star + "★";
      } else if (starsLeft > 0.5) {
        star = star + "⯪";
      } else {
        star = star + "☆";
      }
    }

    return star;
  }
};

export default ShopCard;
