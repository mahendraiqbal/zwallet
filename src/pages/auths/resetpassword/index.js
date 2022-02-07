import styles from "src/commons/styles/resetpassword.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "src/commons/components/LayoutAuth";

function ResetPassword() {
  return (
    <>
      <main className={`${styles["main-login"]} row col-12 col-md-12`}>
        <div className={`${styles["aside-auth"]} col-md-7`}>
          <Layout />
        </div>
        <div className="col-md-5">
          <div className={`${styles["form-data"]} col-md-10`}>
            <p className={styles.titleLogin}>
              Did You Forgot Your Password? Don’t Worry, You Can Reset Your
              Password In a Minutes.
            </p>
            <p className={styles.loginFill}>
              To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.
            </p>
            <input
              type="text"
              placeholder="Enter your e-mail"
              className={styles.email}
            />
            <button className={`${styles["button-confirm"]} btn`}>Confirm</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default ResetPassword;