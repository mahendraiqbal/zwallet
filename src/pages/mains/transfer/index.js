import Image from "next/image";
// import clientpic from "src/assets/image/clientst.png";
import LayoutMain from "src/commons/components/LayoutMain";
import styles from "src/commons/styles/Transfer.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import LayoutTitle from "src/commons/components/LayoutTitle";

export default function Transfer() {
  return (
    <>
    <LayoutTitle title="Main | Transfer">
        <main className={`${styles["main-addNumber"]} row col-12 col-md-12`}>
        <Header />
        <div className="col-md-4">
          <LayoutMain />
        </div>
        <div className={`${styles["fill-Number"]} col-md-8`}>
          <div className={`${styles["fill-addNumber"]} row col-md-11`}>
            <div>
              <p>Search Reciver</p>
              <div>
                <form className={styles.search}>
                  <div className={`${styles["form-input-warpper"]} form-group`}>
                    <div
                      className={`${styles["style-input"]} d-flex justify-content-center`}
                    >
                      <i className="bi bi-search"></i>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Serach reciver here"
                      />
                    </div>
                  </div>
                </form>
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
                    <p className={styles.userName}>SUmail</p>
                    <p className={styles["transaction-description"]}>
                      +62 8123-1231-321
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </LayoutTitle>
      
    </>
  );
}
