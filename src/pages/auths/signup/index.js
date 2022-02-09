import styles from "src/commons/styles/Signup.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "src/commons/components/LayoutAuth";
import { register } from "src/modules/utils/https/auth"
import { useRouter } from 'next/router';
import LayoutTitle from "src/commons/components/LayoutTitle";


function SignUp() {
  const router = useRouter();

  const submitRegister = (e) => {
    e.preventDefault()
    const body = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    register(body)
    .then((res) => {
      const registerRes = res.data.result;
      setTimeout(() => {
        router.push("/auths/login");
      }, 3000);
    })
  }

  return (
    <>
    <LayoutTitle title="Auth | Register">
      <main className={`${styles["main-login"]} row col-12 col-md-12`}>
        <div className={`${styles["aside-auth"]} col-md-7`}>
          <Layout />
        </div>
        <div className="col-md-5">
          <form onSubmit={submitRegister}>
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
                name="firstName"
                // id="email"
                placeholder="Enter your Firstname"
                className={styles.firstname}
              />
              <input
                type="text"
                name="lastName"
                // id="email"
                placeholder="Enter your Lastname"
                className={styles.lastname}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your e-mail"
                className={styles.email}
              />
              <input
                type="password"
                name="passowrd"
                id="password"
                placeholder="Create your password"
                className={styles.password}
              />
              <button
                className={`${styles["button-signup"]} btn`}
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <p className={styles["account-login"]}>
            Already have an account? Let{" ' "}s Sign Up
          </p>
        </div>
      </main>
    </LayoutTitle>
      
    </>
  );
}

export default SignUp;
