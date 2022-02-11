import styles from "src/commons/styles/modaltopup.module.css";
import { connect } from "react-redux";
import { topUp } from "src/modules/utils/https/transactions"

function ModalTopUp(props) {
    if (!props.showModal) {
        return null;
    }
    // console.log(props)

    const handleTopUp = (e) => {
        e.preventDefault();
        const body = {
            amount: e.target.amount.value
        }
        const token = props.token;
        // console.log(props.token)
        topUp(body,token)
        .then((res) => {
            // console.log("res", res)
            // console.log(res.data.data.redirectUrl)
            setTimeout(() => {
                window.open(res.data.data.redirectUrl, '_blank')
            }, 3000);
        })
        .catch((err) => console.log(err))
    }
  return (
      <>
        <div className={styles["background-modal"]}>
            <div className={styles["modal-container"]}>
                <button> X </button>
                <div className={styles["modal-title"]}>
                    <p className={styles["word-topup"]}>Topup</p>
                </div>
                <div className={styles["modal-body"]}>
                    <p>Enter the amount of money, and click <br/> submit</p>
                </div>
                <form onSubmit={handleTopUp}>
                    <div>
                      <input 
                        type="number"
                        name="amount"
                        required
                    /> 
                    </div>
                    <button className={`${styles["button-submit"]} btn btn-success`}>Submit</button>
                </form>
            </div>
        </div>
      </>
  );
}

const mapStateToPtops = (state) => {
    return {
        token: state.auth.userData.token,
        id: state.auth.userData.id,
    }
}

export default connect(mapStateToPtops)(ModalTopUp);
