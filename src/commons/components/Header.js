import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";

function Header() {
  return (
    <>
      <div className={`${styles["header"]} row col-12 col-md-12`}>
        <div className={`${styles["icon-zwallet"]} col-md-8`}>Zwallet</div>
        <div className={`${styles["side-nav"]} row col-md-4`}>
          <div className="row col-md-12">
            <div className={`${styles["image-perrson"]} col-md-3`}>
              <Image
                src={"/profilee.png"}
                alt="image person"
                width={50}
                height={50}
              />
            </div>
            <div className={`${styles["name"]} col-md-6`}>
              <p className={styles["name-profile"]}>Robert Chandler</p>
              <p className={styles["phone-profile"]}>+62 8139 3877 7946</p>
            </div>
            <div className={`${styles["bell-icon"]} col-md-3`}>
              <Image 
                src={"/bell.png"}
                alt="bell"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
