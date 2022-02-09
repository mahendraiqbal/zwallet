/* eslint-disable @next/next/link-passhref */
import styles from "src/commons/styles/Profile.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
// import CardHistory from 'src/commons/components/CardHistory';
import Header from "src/commons/components/Header";
import Image from "next/image";
import Link from "next/link";
import LayoutTitle from "src/commons/components/LayoutTitle";

function Profile() {
  return (
    <>
      <LayoutTitle title="Main | Profile">
        <main className={`${styles["main-profile"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-transaction"]} col-md-8`}>
            <div className={`${styles["fill-profile"]} row col-md-11`}>
              <div className={styles["image-profile"]}>
                <Image
                  src={"/profilee.png"}
                  width={70}
                  height={70}
                  alt="image profile"
                />
              </div>
              <div className={styles["button-editInfo"]}>
                <button className={styles["button-edit"]}>edit</button>
              </div>
              <p className={styles["name-profile"]}>Robert Chandler</p>
              <p className={styles["number-profile"]}>+62 813-9387-7946</p>
              <div className={styles["button-personal"]}>
                <Link href="/mains/personalinfo">
                  <button className={styles["personal-info"]}>
                    Personal Information
                  </button>
                </Link>
              </div>
              <div className={styles["button-changePass"]}>
                <Link href="/mains/changepass">
                  <button className={styles["change-password"]}>
                    Change Password
                  </button>
                </Link>
              </div>
              <div className={styles["button-changePin"]}>
                <button className={styles["change-pin"]}>Change PIN</button>
              </div>
              <div className={styles["button-logout"]}>
                <button className={styles.logout}>Logout</button>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </LayoutTitle>
    </>
  );
}

export default Profile;
