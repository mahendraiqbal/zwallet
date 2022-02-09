import styles from "src/commons/styles/Footer.module.css"
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <>
      <div className={`${styles.footer} row col-12 col-md-12`}>
        <div className={`${styles["brand-year"]} col-md-6`}>2020 Zwallet. All right reserved</div>
        <div className={`${styles["phone-footer"]} col-md-6`}>+62 5837 8882 9901 contact@zwallet.com</div>
      </div>
    </>
  );
}

export default Footer;
