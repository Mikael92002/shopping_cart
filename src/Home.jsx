import styles from "./home.module.css";
import Marquee from "react-fast-marquee";
import rolex from "./assets/rolex_logo.png";
import prada from "./assets/prada.png";
import givenchy from "./assets/givenchy.png";
import chanel from "./assets/chanel.png";
import lv from "./assets/lv.png";
import coach from "./assets/coach.png";
import hermes from "./assets/hermes.png";
import adOne from "./assets/ad_one.jpg";
import adTwo from "./assets/ad_two.jpg";
import adThree from "./assets/ad_three.jpg";
import adFour from "./assets/ad_four.jpg";
import adFive from "./assets/ad_five.jpg";
import adSix from "./assets/ad_six.jpg";
import adSeven from "./assets/ad_seven.jpg";
import adEight from "./assets/ad_eight.jpg";
import adNine from "./assets/ad_nine.jpg";
import adTen from "./assets/ad_ten.jpg";
import EmblaCarousel from "./EmblaCarousel.jsx";
import { Link } from "react-router";

const Home = () => {
  const OPTIONS = { dragFree: true };
  const SLIDES = [adOne, adTwo, adFour, adThree, adNine];
  const SLIDES2 = [adFive, adSix, adSeven, adEight, adTen];
  return (
    <>
      <div className={styles.discount}>
        Now For A Limited Time All Brands 50% Off!{" "}
        <Link to="/shop">SHOP NOW</Link>
      </div>
      <Marquee gradient={true} gradientColor="aliceblue" autoFill={true}>
        <img src={rolex} alt="" className={styles.marquee_image} />
        <img src={prada} alt="" className={styles.marquee_image} />
        <img src={givenchy} alt="" className={styles.marquee_image} />
        <img src={chanel} alt="" className={styles.marquee_image} />
        <img src={lv} alt="" className={styles.marquee_image} />
        <img src={coach} alt="" className={styles.marquee_image} />
        <img src={hermes} alt="" className={styles.marquee_image} />
      </Marquee>

      <div className={styles.carousel_section}>
        <Link to="/shop" className={styles.shop_now}>
          SHOP NOW
        </Link>
        <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
        <EmblaCarousel slides={SLIDES2}></EmblaCarousel>
      </div>
    </>
  );
};

export default Home;
