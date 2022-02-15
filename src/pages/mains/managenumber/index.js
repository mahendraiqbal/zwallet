import styles from "src/commons/styles/ManageNum.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";
import Image from "next/image";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { connect } from "react-redux";

function ManageNum(props) {
  return (
    <>
      <LayoutTitle title="Main | Manage Number">
        <main className={`${styles["main-manageNum"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-Manage"]} col-md-8`}>
            <div className={`${styles["fill-manageNum"]} row col-md-11`}>
              <p className={styles["title-manage"]}>Manage Phone Number</p>
              <p className={styles["word-manage"]}>
                You can only delete the phone number and then <br /> you must
                add another phone number.
              </p>
              <div className={styles["card-manage"]}>
                <div>
                  <p className={styles["text-primary"]}>Primary</p>
                  <p className={styles["number-phone"]}>{props.user.noTelp}</p>
                </div>
                <div className={styles["image-wrapper"]}>
                  <Image
                    src={"/trash.png"}
                    alt="icon trash"
                    width={20}
                    height={20}
                  />
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

const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(ManageNum);
