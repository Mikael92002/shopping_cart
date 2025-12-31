import styles from "./home.module.css";
import Marquee from "react-fast-marquee";
import rolex from "./assets/rolex_logo.png";
import prada from "./assets/prada.png";
import givenchy from "./assets/givenchy.png";
import ferrari from "./assets/ferrari.png";
import chanel from "./assets/chanel.png";
import lv from "./assets/lv.png";
import adOne from "./assets/ad_one.jpg";
import adTwo from "./assets/ad_two.jpg";
import adThree from "./assets/ad_three.jpg";
import EmblaCarousel from "./EmblaCarousel.jsx";

const Home = () => {
  const OPTIONS = { dragFree: true, containScroll: "trimSnaps" };
  const SLIDES = [adOne, adTwo, adThree];
  return (
    <>
      <div className={styles.discount}>
        Now For A Limited Time All Brands 50% Off!
      </div>
      <Marquee gradient={true} gradientColor="aliceblue" autoFill={true}>
        <img src={rolex} alt="" className={styles.marquee_image} />
        <img src={prada} alt="" className={styles.marquee_image} />
        <img src={givenchy} alt="" className={styles.marquee_image} />
        <img src={ferrari} alt="" className={styles.marquee_image} />
        <img src={chanel} alt="" className={styles.marquee_image} />
        <img src={lv} alt="" className={styles.marquee_image} />
      </Marquee>

      <EmblaCarousel slides={SLIDES} options={OPTIONS}></EmblaCarousel>
    </>
  );
};

export default Home;
