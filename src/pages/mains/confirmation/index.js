import styles from "src/commons/styles/Conf.module.css";
import Image from "next/image";
import LayoutMain from "src/commons/components/LayoutMain";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import LayoutTitle from "src/commons/components/LayoutTitle";

function Confirmation() {
  return (
    <>
      <LayoutTitle title="Main | Confirmation">
        <main className={`${styles["main-changePass"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-Pass"]} col-md-8`}>
            <div className={`${styles["fill-changePass"]} row col-md-11`}>
              <div className="container-fluid mx-auto w-100 my-5">
                <p className={styles.userName}>Transfer to</p>
                <div>
                  <div className="col-8 col-md-8 d-flex">
                    <div className="mx-2 ">
                      <Image
                        src={"/image-profile.png"}
                        alt="image profile"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="w-50 text-left my-auto">
                      <p className={styles.userName}>Sumail</p>
                      <p className={styles["transaction-description"]}>
                        +62 9123-123-123
                      </p>
                    </div>
                  </div>
                  <div className={styles.succesInformation}>
                    <p className={styles.userName}>Details</p>
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
                </div>
                <button className="btn btn-primary d-flex align-items-end justify-content-end">
                  continue
                </button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </LayoutTitle>
    </>
  );
}

export default Confirmation;
