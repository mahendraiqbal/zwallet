import styles from 'src/commons/styles/History.module.css';
import LayoutMain from 'src/commons/components/LayoutMain';


function History() {
  return (
      <>
        <main className={`${styles["main-history"]} row col-12 col-md-12`}>
            <div className="col-md-4">
                <LayoutMain />
            </div>
            <div className="col-md-8">
                <div className={`${styles["fill-history"]} row col-md-11`}>
                    <div className="col-md-8 ">
                        <p>Transaction History</p>
                    </div>
                    <div className="col-md-4 ">
                        <button>--Select Filter--</button>
                        <p>+Rp50.000</p>
                        <p>+Rp149.000</p>
                        <p>+Rp150.000</p>
                        <p>+Rp249.000</p>
                        <p>+Rp50.000</p>
                        <p>+Rp50.000</p>
                    </div>
                </div>
            </div>
        </main>
      </>
  );
}

export default History;
