import styles from "src/commons/styles/Main.module.css"

function LayoutMain() {
  return (
      <>
        <div className={`${styles["main-layout"]} col-md-12 `}>
            <ul>
              <li className={styles.list}>Dashboard</li>
              <li className={styles.list}>Transfer</li>
              <li className={styles.list}>Top up</li>
              <li className={styles.list}>Profile</li>
              <li className={styles.listLogout}>Logout</li>
            </ul>
        </div>
      </>
  );
}

export default LayoutMain;
