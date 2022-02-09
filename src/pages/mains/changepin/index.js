import styles from "src/commons/styles/changePin.module.css"
import Header from "src/commons/components/Header";
import LayoutMain from "src/commons/components/LayoutMain";
import Footer from "src/commons/components/Footer";


function ChangePin() {
  return (
      <>
        <main className={`${styles["main-history"]} row col-12 col-md-12`}>
            <Header />
            <div className="col-md-4">
                <LayoutMain />
            </div>
            <div className={`${styles["fill-transaction"]} col-md-8`}>
                <div className={`${styles["fill-history"]} row col-md-11`}>
                    
                </div>
            </div>
            <Footer />
        </main>
      </>
  );
}

export default ChangePin;