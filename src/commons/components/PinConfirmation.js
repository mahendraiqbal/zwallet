import styles from "src/commons/styles/PinConfir.module.css"
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function PinConfirmation({ show, handleClose }) {
  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Topup</Modal.Title>
        </Modal.Header>
        <Modal.Body>Enter the amount of money and click submit</Modal.Body>
        <form>
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
  )
}

export default PinConfirmation;