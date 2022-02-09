import styles from "src/commons/styles/Dash.module.css";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";
import Header from "src/commons/components/Header";

function Home() {
  return (
    <>
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
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
