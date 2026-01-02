import styles from "./cart.module.css";
import { toast } from "sonner";

const Cart = ({ cart, decreaseFromCart, increaseFromCart }) => {
  return (
    <>
      <div className={styles.master_container}>
        {cart.length > 0 &&
          cart.map((cartItem) => {
            return (
              <div className={styles.container}>
                <div className={styles.image_container}>
                  <img src={cartItem.image} alt="" className={styles.image} />
                </div>
                <div className={styles.text_container}>
                  <div className={styles.title}>{cartItem.title}</div>
                  <div className={styles.price}>
                    {"$" + (cartItem.cartCount * cartItem.price).toFixed(2)}
                  </div>
                  <div className={styles.cartCount}>
                    {"Qty: " + cartItem.cartCount}
                  </div>
                </div>
                <div className={styles.controls}>
                  <button
                    onClick={() => {
                      toast("Item Successfully Removed From Cart!");
                      decreaseFromCart(cartItem);
                    }}
                  >
                    -
                  </button>
                  <button
                    onClick={() => {
                      toast("Item Successfully Added To Cart!");
                      increaseFromCart(cartItem);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        {cart.length > 0 && (
          <div className={styles.total}>Total: ${totalPrice()}</div>
        )}
        {cart.length <= 0 && (
          <div className={styles.empty}>No Items In Cart!</div>
        )}
      </div>
    </>
  );

  function totalPrice() {
    let total = 0;
    for (let item of cart) {
      total = total + item.price * item.cartCount;
    }
    return total.toFixed(2);
  }
};

export default Cart;
