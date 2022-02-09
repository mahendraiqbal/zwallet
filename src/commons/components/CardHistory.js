import styles from "src/commons/styles/CardHistory.module.css";
import Image from 'next/image';

function CardHistory() {
  return (
    <>
      <div className={`${styles["main-history"]} row col-md-12`}>
        <div className={`${styles["image-profileTr"]} col-md-2`}>
            <Image
              src={"/image-profile.png"}
              alt="image person"
              width={50}
              height={50}
              className={styles.image}
            />
        </div>
        <div className={`${styles["info-person"]} col-md-7`}>
            <p className={styles["name-profile"]}>Samuel Suhi</p>
            <p className={styles["info-profile"]}>Accept</p>
        </div>
        <div className={`${styles["transaction-price"]} col-md-3`}>
            <p className={styles["price"]}>+50.000</p>
        </div>
      </div>
      <div className={`${styles["main-history"]} row col-md-12`}>
        <div className={`${styles["image-profileTr"]} col-md-2`}>
            <Image
              src={"/netflix.png"}
              alt="image person"
              width={50}
              height={50}
              className={styles.image}
            />
        </div>
        <div className={`${styles["info-person"]} col-md-7`}>
            <p className={styles["name-profile"]}>Netflix</p>
            <p className={styles["info-profile"]}>Transfer</p>
        </div>
        <div className={`${styles["transaction-price"]} col-md-3`}>
            <p className={styles["price-out"]}>-149.000</p>
        </div>
      </div>
      <div className={`${styles["main-history"]} row col-md-12`}>
        <div className={`${styles["image-profileTr"]} col-md-2`}>
            <Image
              src={"/image-profile.png"}
              alt="image person"
              width={50}
              height={50}
              className={styles.image}
            />
        </div>
        <div className={`${styles["info-person"]} col-md-7`}>
            <p className={styles["name-profile"]}>Samuel Suhi</p>
            <p className={styles["info-profile"]}>Accept</p>
        </div>
        <div className={`${styles["transaction-price"]} col-md-3`}>
            <p className={styles["price"]}>+150.000</p>
        </div>
      </div>
    </>
  );
}

export default CardHistory;
