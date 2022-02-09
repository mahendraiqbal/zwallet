import Image from 'next/image';
import styles from 'src/commons/styles/Auth.module.css';

function LayoutAuth() {
  return (
      <>
        <p className={styles["title-login"]}>Zwallet</p>
          <div className={`${styles["image-phone"]} col col-md-12`}>
            <Image
              src={"/phoneFix.png"}
              alt="image phone"
              width={450}
              height={500}
              className={styles.phone}
            />
          </div>
          <p className={styles["word-login"]}>App that Covering Banking Needs.</p>
          <p className={styles["fill-word"]}>
            Zwallet is an application that focussing in banking needs for all
            users in the world. Always updated and always following world
            trends. 5000+ users registered in Zwallet everyday with worldwide
            users coverage.
          </p>
      </>
  );
}

export default LayoutAuth;
