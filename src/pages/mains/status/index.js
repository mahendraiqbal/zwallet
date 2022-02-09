import styles from "src/commons/styles/Status.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";
import Image from "next/image";

function Status() {
  return (
    <>
      <main className={`${styles["main-addNumber"]} row col-12 col-md-12`}>
        <Header />
        <div className="col-md-4">
          <LayoutMain />
        </div>
        <div className={`${styles["fill-Number"]} col-md-8`}>
          <div className={`${styles["fill-addNumber"]} row col-md-11`}>
            <div className="container-fluid mx-auto my-5">
              <div>
                <i className="bi bi-check-circle-fill"></i> transfer success
              </div>
              <div className={styles.succesInformation}>
                <p className={styles.successTitles}>Amount</p>
                <p className={styles.successDescription}>Rp100.000</p>
                <p className={styles.successTitles}>Balance Left</p>
                <p className={styles.successDescription}>Rp20.000</p>
                <p className={styles.successTitles}>Date {"&"} time</p>
                <p className={styles.successDescription}>
                  May 11, 2020 - 12.20
                </p>
                <p className={styles.successTitles}>Notes</p>
                <p className={styles.successDescription}>
                  For buying some socks
                </p>
              </div>
              <p className={styles.userName}>Transfer to</p>
              <div>
                <div className="col-8 col-md-8 d-flex">
                  <div className="mx-2 ">
                    <Image
                      src={"/image-profile.png"}
                      alt="google"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="w-50 text-left my-auto">
                    <p className={styles.userName}>Samuel Suhi</p>
                    <p className={styles["transaction-description"]}>
                      +62 812-8492-9994
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles["button-success"]}>
                  <p></p>
                <button className={`${styles["back-home"]} btn btn-primary`}>back to home</button>
                <button className={`${styles["download-pdf"]}btn btn-secondary`}>
                  download pdf
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Status;
