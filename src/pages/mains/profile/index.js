/* eslint-disable @next/next/link-passhref */
import styles from "src/commons/styles/Profile.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
// import CardHistory from 'src/commons/components/CardHistory';
import Header from "src/commons/components/Header";
import Image from "next/image";
import Link from "next/link";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutAction } from "src/redux/actions/auth"
import { logout } from "src/modules/utils/https/auth"


function Profile(props) {
  const router = useRouter();
  const dispatch = useDispatch();
  const token = props.token;
  // console.log(token)

  const logoutHandler = () => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: `Cancel`,
    }).then((res) => {
      if (res.isConfirmed) {
        logout(token)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

        dispatch(logoutAction());
        Swal.fire({
          title: "Logout Success",
          text: "Success Logout",
          icon: "success"
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 4000);
        router.push("/")
      }
    })
  }

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
              <p className={styles["name-profile"]}>{props.user.firstName} {props.user.lastName}</p>
              <p className={styles["number-profile"]}>{props.user.noTelp}</p>
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
                <button className={styles.logout} onClick={logoutHandler}>Logout</button>
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
  console.log(state)
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(Profile);
