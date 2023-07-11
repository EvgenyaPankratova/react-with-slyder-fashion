import styles from "./ImgLeftAndRigth.module.css";

const ImgLeftAndRigth = ({ imgFirst, imgSecond }) => {
  return (
    <div className={styles.ImgLeftAndRigth__container}>
      <div className={styles.ImgLeftAndRigth__title_block}>
        <h1 className={styles.ImgLeftAndRigth__title}>
          ut aliquip ex ea commodo consequat
        </h1>
      </div>
      <div className={styles.ImgLeftAndRigth__left_img_block}>
        <div className={styles.ImgLeftAndRigth__left_img_inner_block}>
          <img
            className={styles.ImgLeftAndRigth__left_img_image}
            src={imgFirst}
            alt="fashion"
          />
        </div>
        <div className={styles.ImgLeftAndRigth__left_img_inner_text_block}>
          <div className={styles.ImgLeftAndRigth__left_img_inner_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div className={styles.ImgLeftAndRigth__left_img_inner_text}>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>

      <div className={styles.ImgLeftAndRigth__right_img_block}>
        <div className={styles.ImgLeftAndRigth__right_img_inner_text_block}>
          <div className={styles.ImgLeftAndRigth__right_img_inner_subtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
          <div className={styles.ImgLeftAndRigth__right_img_inner_text}>
            Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
        <div className={styles.ImgLeftAndRigth__right_img_inner_block}>
          <img
            className={styles.ImgLeftAndRigth__right_img_image}
            src={imgSecond}
            alt="fashion"
          />
        </div>
      </div>
    </div>
  );
};

export default ImgLeftAndRigth;
