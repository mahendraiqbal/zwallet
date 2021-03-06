import styles from "src/commons/styles/Dash.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import CardHistory from "src/commons/components/CardHistory";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { getHistory } from "src/modules/utils/https/transactions";
import { connect, useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getUser, getUserById } from "src/modules/utils/https/user";
import { userProfile } from "src/redux/actions/user";
import { Router } from "next/router";
import TopUp from "src/commons/components/TopUp";

function Home(props) {
  const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  const token = props.token;
  const id = props.id;
  const [show, setShow] = useState(false)

  // console.log(id)

  // console.log(props);
  // console.log(state)
  const [userData, setUserData] = useState({});
  useEffect(() => {
    // const id = props.id;
    // const token = props.token;
    getUserById(token, id)
      .then((res) => {
        setUserData({ ...res.data.data });
        const data = {
          ...res.data.data,
        };
        // console.log(res)
        props.userDispatch(data);
        // dispatch(userProfile(data))
      })
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerClick = (e) => {
    e.preventDefault();
    router.push(href);
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <LayoutTitle title="Main | Home">
        <main className={`${styles["main-history"]} row col-12 col-md-12`}>
          <Header />
          <div className={`${styles["layout-main"]} col-md-4`}>
            <LayoutMain />
          </div>
          <div className={`${styles["fill-transaction"]} col-md-8`}>
            <div className={`${styles["fill-history"]} row col-md-11`}>
              <section className={styles.ballanceInfo}>
                <div className="row w-100">
                  <div className="col-11 col-sm-6 mx-auto">
                    <p className={styles.balance}>Ballance</p>
                    <h1 className={styles["balance-rupiah"]}>Rp.</h1>
                    <p className={styles["contact-person"]}></p>
                  </div>
                  <div className="col-11 col-sm-4 my-auto float-right">
                    <Link href="/mains/transfer" onClick={handlerClick} passHref>
                      <button className="btn btn-block">
                        <span>
                          <i className="bi bi-arrow-up"></i>
                        </span>
                        Transfer
                      </button>
                    </Link>
                    <button className="btn btn-block" onClick={handleShow}>
                      <span>
                        <i className="bi bi-plus-lg"></i>
                      </span>
                      Top up
                    </button>
                  </div>
                </div>
              </section>
              <section className={`${styles["info-dashboard"]} row col-12`}>
                <div className={`${styles["chart-dashborad"]} col-md-6`}>
                  charts
                </div>
                <div className={`${styles["transactions-history"]} col-md-6`}>
                  <div className="d-flex justify-content-between">
                    <p>Transaction History</p>
                    <Link href="/mains/history" passHref>
                      <a>
                        <p className={styles["see-all"]}>see all</p>
                      </a>
                    </Link>
                  </div>
                  <CardHistory />
                </div>
              </section>
            </div>
            <TopUp show={show} handleClose={handleClose}/>
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

const mapDispatchToProps = (dispatch) => {
  return {
    userDispatch: (data) => {
      console.log(data);
      dispatch(userProfile(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
