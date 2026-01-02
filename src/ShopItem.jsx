import styles from "./shop.module.css";

const ShopItem = ({category, description, id, image, price, rating, title}) => {
return (<>
<div className={styles.title}>{title}</div>
<div className={styles.image}><img src={image.src} alt="" /></div>
<div className={styles.description}>{description}</div>
</>)
}

export default ShopItem;