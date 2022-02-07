import styles from "src/commons/styles/Signup.module.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "src/commons/components/LayoutAuth";

function SignUp() {
  return (
    <>
      <main className={`${styles["main-login"]} row col-12 col-md-12`}>
        <div className={`${styles["aside-auth"]} col-md-7`}>
            <Layout />
        </div>
        <div className="col-md-5">
          <div className={`${styles["form-data"]} col-md-10`}>
            <p className={styles.titleLogin}>
              Start Accessing Banking Needs With All Devices and All Platforms
              With 30.000+ Users
            </p>
            <p className={styles.loginFill}>
              Transfering money is eassier than ever, you can access Zwallet
              wherever you are. Desktop, laptop, mobile phone? we cover all of
              that for you!
            </p>
            <input
              type="text"
              placeholder="Enter your Firstname"
              className={styles.firstname}
            />
            <input
              type="text"
              placeholder="Enter your Lastname"
              className={styles.lastname}
            />
            <input
              type="text"
              placeholder="Enter your e-mail"
              className={styles.email}
            />
            <input
              type="password"
              placeholder="Create your password"
              className={styles.password}
            />
            <button className={`${styles["button-signup"]} btn`}>Sign Up</button>
            <p className={styles["account-login"]}>
              Already have an account? Let{" ' "}s Sign Up
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp;
