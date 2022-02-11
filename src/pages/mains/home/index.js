import styles from "src/commons/styles/Dash.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { getHistory } from "src/modules/utils/https/transactions";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function Home(props) {
  // console.log("cek", props);
  const [history, setHistory] = useState();

  useEffect(() => {
    const query = "?page=1&limit=6&filter=WEEK";
    const token = props.token
    getHistory(query, token)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.error(err));
  }),[];

  return (
    <>
      <LayoutTitle title="Main | Home">
        <main className={`${styles["main-history"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-transaction"]} col-md-8`}>
            <div className={`${styles["fill-history"]} row col-md-11`}>
              <section className={styles.ballanceInfo}>
                <div className="row w-100">
                  <div className="col-11 col-sm-6 mx-auto">
                    <p>Ballance</p>
                    <h1>Rp.120.000</h1>
                    <p>+62 813-9387-7946</p>
                  </div>
                  <div className="col-11 col-sm-4 my-auto float-right">
                    <button className="btn btn-block">
                      <span>
                        <i className="bi bi-arrow-up"></i>
                      </span>
                      Transfer
                    </button>
                    <button className="btn btn-block">
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
                  transactions
                </div>
              </section>
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
  };
};

export default connect(mapStateToProps)(Home);
