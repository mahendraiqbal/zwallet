import styles from 'src/commons/styles/addNumber.module.css';
import LayoutMain from 'src/commons/components/LayoutMain';
import Footer from 'src/commons/components/Footer';
import Header from 'src/commons/components/Header';


function addNumber() {
  return (
      <>
        <main className={`${styles["main-addNumber"]} row col-12 col-md-12`}>
            <Header />
            <div className="col-md-4">
                <LayoutMain />
            </div>
            <div className={`${styles["fill-Number"]} col-md-8`}>
                <div className={`${styles["fill-addNumber"]} row col-md-11`}>
                   <p className={styles["title-number"]}>Add Phone Number</p>
                   <p className={styles["word-number"]}>Add at least one phone number for the transfer <br />ID so you can start transfering your money to <br />another user.</p>
                    <input 
                        type="text"
                        className={styles["form-number"]}
                        placeholder="Enter your phone number"
                    />
                    <div className={styles["button-add"]}>
                       <button className={`${styles["button-addNumber"]} btn-secondary`}>Add Phone Number</button> 
                    </div>
                    
                </div>
            </div>
            <Footer />
        </main>
      </>
  );
}

export default addNumber;
