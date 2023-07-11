import styles from "./MySlider.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chain from "../.././img/1.png";
import box from "../.././img/2.png";
import girl from "../.././img/3.png";
import rings from "../.././img/4.png";
import pendant from "../.././img/5.png";
import girl2 from "../.././img/6.png";
import massager from "../.././img/7.png";
import earrings from "../.././img/8.png";

const MySlider = () => {
  const settings = {
    slidesToShow: 4.2,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    initialSlide: 0,
    lazyLoad: "ondemand",
    vertical: false,
    centerMode: true,
    centerPadding: "130px",
    responsive: [
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1.2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "55px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.2,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "55px",
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "5px",
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3.8,
          infinite: true,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          initialSlide: 0,
          lazyLoad: "ondemand",
          vertical: false,
          centerMode: true,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className={styles.slider}>
      <div className={styles.slider__title}>Lorem ipsum dolor sit amet</div>

      <Slider {...settings} className={styles.slider__cards}>
        <div className={styles.slider__cards_item}>
          <img
            src={chain}
            alt="chain"
            className={styles.slider__cards_item_img}
          />
        </div>
        <div className={styles.slider__cards_item}>
          <img src={box} alt="box" className={styles.slider__cards_item_img} />
        </div>
        <div className={styles.slider__cards_item}>
          <img
            src={girl}
            alt="girl"
            className={styles.slider__cards_item_img}
          />
        </div>
        <div className={styles.slider__cards_item}>
          <img
            src={rings}
            alt="rings"
            className={styles.slider__cards_item_img}
          />
        </div>
        <div className={styles.slider__cards_item}>
          <img
            src={pendant}
            alt="pendant"
            className={styles.slider__cards_item_img}
          />
        </div>
        <div className={styles.slider__cards_item}>
          <img
            src={girl2}
            alt="girl2"
            className={styles.slider__cards_item_img}
          />
        </div>
        <div className={styles.slider__cards_item}>
          <img
            src={massager}
            alt="massager"
            className={styles.slider__cards_item_img}
          />
        </div>
        <div className={styles.slider__cards_item}>
          <img
            src={earrings}
            alt="earrings"
            className={styles.slider__cards_item_img}
          />
        </div>
      </Slider>
    </div>
  );
};

export default MySlider;
