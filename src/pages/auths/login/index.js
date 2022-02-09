import styles from "src/commons/styles/login.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "src/commons/components/LayoutAuth";
import Image from "next/image";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { connect } from "react-redux";
import { loginAction } from "src/redux/actions/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Login(props) {
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    props.loginDispatch(body)
  }
  useEffect(() => {
    
    if (props.auth.isFulfilled) {
        setTimeout(() => {
          router.push("/mains/home");
        }, 1000);
        console.log(props)
    }
    
  });
  

  return (
    <>
      <LayoutTitle title="Auth | Login">
        <main className={`${styles["main-login"]} row col-12 col-md-12`}>
          <div className={`${styles["aside-auth"]} col-md-7`}>
            <Layout />
          </div>
          <div className="col-md-5">
            <form className={styles["login-form"]} onSubmit={submitHandler}>
              <div className={`${styles["form-data"]} col-md-10`}>
                <p className={styles.titleLogin}>
                  Start Accessing Banking Needs With All Devices and All
                  Platforms With 30.000+ Users
                </p>
                <p className={styles.loginFill}>
                  Transfering money is eassier than ever, you can access Zwallet
                  wherever you are. Desktop, laptop, mobile phone? we cover all
                  of that for you!
                </p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your e-mail"
                  className={styles.email}
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className={styles.password}
                />
                <p className={styles.forgot}>Forgot password?</p>
                <button className={`${styles["button-login"]} btn`} type="submit">
                  Login
                </button>
              </div>
            </form>

            <p className={styles["account-login"]}>
              Don{" ' "}t have an account? Let{" ' "}s Sign Up
            </p>
          </div>
        </main>
      </LayoutTitle>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginDispatch: (body) => {
      dispatch(loginAction(body))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
