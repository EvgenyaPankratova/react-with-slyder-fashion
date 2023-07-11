import ImgLeftAndRigth from "../ImgLeftAndRigth/ImgLeftAndRigth";
import MySlider from "../MySlider/MySlider";
import styles from "./Main.module.css";

import imgRing from "../.././img/julia.png";
import imgSend from "../.././img/taisiia.png";
import imgDress from "../.././img/dress.png";
import imgFlower from "../.././img/flower.png";

const Main = () => {
  return (
    <main className={styles.main}>
      <ImgLeftAndRigth imgFirst={imgRing} imgSecond={imgSend} />
      <MySlider />
      <ImgLeftAndRigth imgFirst={imgDress} imgSecond={imgFlower} />
    </main>
  );
};

export default Main;
