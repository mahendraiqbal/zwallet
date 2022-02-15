import styles from "src/commons/styles/modaltopup.module.css";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { topUp } from "src/modules/utils/https/transactions";

function TopUp({ show, handleClose }) {
  const router = useRouter();
  const token = useSelector((state) => state.auth.userData.token);
  // console.log(token)

  const handleTopUp = (e) => {
    e.preventDefault();
    const body = {
      amount: e.target.amount.value,
    };
    topUp(body, token)
      .then((res) => {
            // console.log("res", res)
            // console.log(res.data.data.redirectUrl)
            setTimeout(() => {
                window.open(res.data.data.redirectUrl, '_blank')
            }, 3000);
        })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Topup</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter the amount of money and click submit</Modal.Body>
        <form onSubmit={handleTopUp}>
          <div className={styles.inputTopup}>
            <input
              className={styles["input-topup"]}
              type="number"
              name="amount"
              required
            />
          </div>
          <div className={styles["submitted"]}>
             <button className={`${styles["button-submit"]} btn btn-primary`} type="submit">Submit</button> 
          </div>
          
        </form>
      </Modal>
    </>
  );
}

const mapStateToPtops = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToPtops)(TopUp);
