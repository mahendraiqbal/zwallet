import styles from "src/commons/styles/PersonalInfo.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";

function PersonalInfo() {
  return (
    <>
      <main className={`${styles["main-personalInfo"]} row col-12 col-md-12`}>
        <Header />
        <div className="col-md-4">
          <LayoutMain />
        </div>
        <div className={`${styles["fill-transaction"]} col-md-8`}>
          <div className={`${styles["fill-personalInfo"]} row col-md-11`}>
            <p className={styles.title}>Personal Information</p>
            <p>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, contact our support.
            </p>
            <form>
              <div className={styles["first-name"]}>
                <p className={styles["label-fname"]}>First Name</p>
                <input type="text" disabled value="Robert" className={styles["input-fname"]}></input>
              </div>
              <div className={styles["last-name"]}>
                <p className={styles["label-lname"]}>Last Name</p>
                <input type="text" disabled value="Chandler" className={styles["input-lname"]}></input>
              </div>
              <div className={styles["verif-email"]}>
                <p className={styles["label-email"]}>Verified Email</p>
                <input type="text" disabled value="pewdiepie1@gmail.com" className={styles["input-email"]}></input>
              </div>
              <div className={styles["phone-number"]}>
                <p className={styles["label-phone"]}>Phone Number</p>
                <input type="text" disabled value="+62 813-9387-7946" className={styles["input-phone"]}></input>
              </div>
            </form>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default PersonalInfo;
