import Head from "next/head";
import Image from "next/image";
import styles from "/src/commons/styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import LayoutTitle from "src/commons/components/LayoutTitle";
// import { useEffect, useState } from 'react'

export default function Home() {
  const router = useRouter();
  const onClickHandlerLogin = () => {
    router.push("/auths/login");
  };
  const onClickHandlerRegister = () => {
    router.push("/auths/signup");
  };
  return (
    <>
      <LayoutTitle title="Zwallet Landing Page">
        <main className={styles.main}>
          <div className={styles.jumbotron}>
            <div className={styles.icon}>
              <p>Zwallet</p>
              <button className={styles.login} onClick={onClickHandlerLogin}>
                Login
              </button>
              <button
                className={styles.register}
                onClick={onClickHandlerRegister}
              >
                Sign Up
              </button>
            </div>
            <div className="row col-12 col-md-12">
              <p className={styles["title-jumbotron"]}>
                Awesome App <br /> For Saving Time.
              </p>
              <p className={styles["fill-jumbotron"]}>
                We bring you a mobile app for banking problems that <br />{" "}
                oftenly wasting much of your times
              </p>
              <div className={styles["jumbotron-button"]}>
                <button className={styles["button-jumbotron"]}>
                  Try it Free
                </button>
              </div>
            </div>
          </div>
          <div className={styles["zwallet-choose"]}>
            <p className={styles["title-choose"]}>Why Choose Zwallet</p>
            <p className={styles["fill-choose"]}>
              We have some great features from the application and it{" '"}{" "}
              totally free <br /> to use by all users around the world
            </p>
            <div className={`${styles["choose-section"]} row col-12`}>
              <div className={`${styles.cardChoose} col-md-4`}>
                <p className={styles["title-cardChoose"]}>24/7 Support</p>
                <p className={styles["fill-cardChoose"]}>
                  We have 24/7 contact support so you <br />
                  can contact us whenever you want <br />
                  and we will respond it.
                </p>
              </div>
              <div className={`${styles.cardChooseMid} col-md-4`}>
                <p className={styles["title-cardChoose"]}>Data Privacy</p>
                <p className={styles["fill-cardChoose"]}>
                  We make sure your data is safe in our <br /> database and we
                  will encrypt any <br /> data you submitted to us.
                </p>
              </div>
              <div className={`${styles.cardChoose} col-md-4`}>
                <p className={styles["title-cardChoose"]}>Easy Download</p>
                <p className={styles["fill-cardChoose"]}>
                  Zwallet is 100% totally free to use it’s <br />
                  now available on Google Play Store <br /> and App Store.
                </p>
              </div>
            </div>
          </div>
          <div className={`${styles["icon-reserved"]} row col-12`}>
            <Image
              src={"/brand.png"}
              width={1440}
              height={100}
              alt="icon brand"
            />
          </div>
          <div className={`${styles["transfer-landing"]} col-12`}>
            <p className={`${styles["transfer-price"]} col-md-12`}>
              Rp. 390.736.500
            </p>
            <p className={styles["money-transfered"]}>
              Money has Been Transfered
            </p>
            <p className={styles["word-money"]}>
              That amount of money has been transfered from all users. We still{" "}
              <br /> counting and going strong!
            </p>
          </div>
          <div className={`${styles["great-section"]} col-12`}>
            <div className="row">
              <Image
                src={"/phoneFix.png"}
                alt="iamge phone"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className={`${styles["testimoni-user"]} col-12`}></div>
          <div className={`${styles["footer-landing"]} col-12`}>
            <div className="col-10 mx-auto container-fluid">
              <div className={styles.description}>
                <h1 className={styles["icon-footer"]}>Zwallet</h1>
                <p className="col mx-0">
                  Simplify financial needs and saving <br /> much time in
                  banking needs with
                  <br /> one single app.
                </p>
              </div>
              <div className={`${styles.info} row`}>
                <div className="col-12 col-sm-8 col-md-5">
                  <p>2020 Zwallet. All right reserved.</p>
                </div>
                <div className="col-10 col-sm-5 col-md-4">
                  <p className={styles.right}>+62 5637 8882 9901</p>
                </div>
                <div className="col-10 col-sm-5 col-md-3">
                  <p className={styles.right}>contact@zwallet.com</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </LayoutTitle>
    </>
  );
}
