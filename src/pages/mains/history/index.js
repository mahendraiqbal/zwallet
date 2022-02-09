import styles from 'src/commons/styles/History.module.css';
import LayoutMain from 'src/commons/components/LayoutMain';
import Footer from 'src/commons/components/Footer';
import CardHistory from 'src/commons/components/CardHistory';
import Header from 'src/commons/components/Header';
import LayoutTitle from "src/commons/components/LayoutTitle";


function History() {
  return (
      <>
      <LayoutTitle title="Main | History">
          <main className={`${styles["main-history"]} row col-12 col-md-12`}>
            <Header />
            <div className="col-md-4">
                <LayoutMain />
            </div>
            <div className={`${styles["fill-transaction"]} col-md-8`}>
                <div className={`${styles["fill-history"]} row col-md-11`}>
                    <div className="col-md-8 ">
                        <p className={styles["title-transaction"]}>Transaction History</p>
                    </div>
                    <div className="col-md-4">
                        <button className={styles.dropdown}>--Select Filter--</button>
                    </div>
                    <CardHistory />
                </div>
            </div>
            <Footer />
        </main>
      </LayoutTitle>
        
      </>
  );
}

export default History;
