import styles from 'src/commons/styles/ChangePass.module.css';
import LayoutMain from 'src/commons/components/LayoutMain';
import Footer from 'src/commons/components/Footer';
import Header from 'src/commons/components/Header';


function ChangePass() {
  return (
      <>
        <main className={`${styles["main-changePass"]} row col-12 col-md-12`}>
            <Header />
            <div className="col-md-4">
                <LayoutMain />
            </div>
            <div className={`${styles["fill-Pass"]} col-md-8`}>
                <div className={`${styles["fill-changePass"]} row col-md-11`}>
                    <p className={styles["title-changePass"]}>Change Password</p>
                    <p className={styles["word-changePass"]}>You must enter your current password and then <br />type your new password twice.</p>
                    <form className={styles["form-changePass"]}>
                        <input 
                            className={styles["input-currentPass"]}
                            type="password"
                            name="currentPass"
                            placeholder="Current Password"
                        />
                        <input 
                            className={styles["input-newPass"]}
                            type="password"
                            name="currentPass"
                            placeholder="New Password"
                        />
                        <input 
                            className={styles["input-repeatPass"]}
                            type="password"
                            name="currentPass"
                            placeholder="Repeat new Password"
                        />
                    </form>
                </div>
            </div>
            <Footer />
        </main>
      </>
  );
}

export default ChangePass;
