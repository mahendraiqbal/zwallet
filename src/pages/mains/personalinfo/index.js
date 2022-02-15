import styles from "src/commons/styles/PersonalInfo.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { connect } from "react-redux";
import Link from "next/link";


function PersonalInfo(props) {
  // console.log(props);

  const handlerClick = (e) => {
    e.preventDefault();
    router.push(href);
  }
  return (
    <>
      <LayoutTitle title="Main | Personal Information">
        <main className={`${styles["main-personalInfo"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-transaction"]} col-md-8`}>
            <div className={`${styles["fill-personalInfo"]} row col-md-11`}>
              <p className={styles.title}>Personal Information</p>
              <p>
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </p>
              <form>
                <div className={styles["first-name"]}>
                  <p className={styles["label-fname"]}>First Name</p>
                  <p className={styles["input-fname"]}>
                    {props.user.firstName}
                  </p>
                </div>
                <div className={styles["last-name"]}>
                  <p className={styles["label-lname"]}>Last Name</p>
                  <p className={styles["input-lname"]}>{props.user.lastName}</p>
                </div>
                <div className={styles["verif-email"]}>
                  <p className={styles["label-email"]}>Verified Email</p>
                  <p className={styles["input-email"]}>{props.user.email}</p>
                </div>
                <div className={`${styles["phone-number"]}`}>
                  <p className={styles["label-phone"]}>Phone Number</p>
                  <div className={`${styles["number-phone"]} row col-md-12`}>
                    <p className={`${styles["input-phone"]} col-md-10`}>
                      {props.user.noTelp}
                    </p>
                    <Link href="/mains/managenumber" onClick={handlerClick} passHref>
                      <p className={`${styles["manage-number"]} col-md-2`}>
                        manage
                      </p>
                    </Link>
                  </div>
                </div>
              </form>
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

export default connect(mapStateToProps)(PersonalInfo);
