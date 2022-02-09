import { useState } from "react";
import LayoutAuth from "src/commons/components/LayoutAuth";
import Layout from "src/commons/components/LayoutAuth";
import styles from "src/commons/styles/pin.module.css";
import LayoutTitle from "src/commons/components/LayoutTitle";

const Pin = () => {
  const [pin, setPin] = useState({});
  const inputPin = (event) => {
    if (event.target.value) {
      const pinNext = document.getElementById(
        `pin-${parseInt(event.target.name, 10) + 1}`
      );
      if (pinNext !== null) {
        pinNext.focus();
      }
    }
    setPin = { ...pin, [`pin${event.target.name}`]: event.target.value };
  };

  const submitHandler = () => {
    const allPin =
      pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
  };
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
                <p className={styles["word-pin"]}>
                  Secure Your Account, Your Wallet,
                  <br />
                  and Your Data With 6 Digits PIN <br />
                  That You Created Yourself.
                </p>
                <p className={styles["fill-pin"]}>
                  Create 6 digits pin to secure all your money and your data in{" "}
                  <br />
                  Zwallet app. Keep it secret and don’t tell anyone about your{" "}
                  <br /> Zwallet account password and the PIN.
                </p>
                <div className={styles["form-inputPin"]}>
                  <div className="col-1">
                    <input
                      className={`${styles["input-pin"]}`}
                      maxLength="1"
                      name="1"
                      id="pin-1"
                      onChange={(event) => inputPin(event)}
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className={`${styles["input-pin"]}`}
                      maxLength="1"
                      name="2"
                      id="pin-2"
                      onChange={(event) => inputPin(event)}
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className={`${styles["input-pin"]}`}
                      maxLength="1"
                      name="3"
                      id="pin-3"
                      onChange={(event) => inputPin(event)}
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className={`${styles["input-pin"]}`}
                      maxLength="1"
                      name="4"
                      id="pin-4"
                      onChange={(event) => inputPin(event)}
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className={`${styles["input-pin"]}`}
                      maxLength="1"
                      name="5"
                      id="pin-5"
                      onChange={(event) => inputPin(event)}
                    />
                  </div>
                  <div className="col-1">
                    <input
                      className={`${styles["input-pin"]}`}
                      maxLength="1"
                      name="6"
                      id="pin-6"
                      onChange={(event) => inputPin(event)}
                    />
                  </div>
                </div>
                <button className={`${styles["button-pin"]} btn`} type="submit">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </main>
      </LayoutTitle>
    </>
  );
};

export default Pin;
