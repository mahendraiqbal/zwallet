import styles from "src/commons/styles/Conf.module.css";
import Image from "next/image";
import LayoutMain from "src/commons/components/LayoutMain";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { transfer } from 'src/modules/utils/https/transactions';
import { useEffect } from "react";

function Confirmation(props) {
  console.log(props)
  const router = useRouter();
  const balanceTransfer = (e) => {
    e.preventDefault();
    const body = {
      id: props.transfer.id,
      amount: props.transfer.amount,
      notes: props.transfer.notes,
      firstname: props.firstName,
      lastname: props.lastName,
      phone: props.phone,
    };
    const token = props.token;
    console.log(token)
    transfer(body, token)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    // useEffect(() => {

    // })
  }
  return (
    <>
      <LayoutTitle title="Main | Confirmation">
        <main className={`${styles["main-changePass"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-Pass"]} col-md-8`}>
            <div className={`${styles["fill-changePass"]} row col-md-11`}>
              <div className="container-fluid mx-auto w-100 my-5">
                <p className={styles.userName}>Transfer to</p>
                <form onSubmit={balanceTransfer}>
                <div>
                  <div className="col-8 col-md-8 d-flex">
                    <div className="mx-2 ">
                      <Image
                        src={"/image-profile.png"}
                        alt="image profile"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="w-50 text-left my-auto">
                      <p className={styles.userName}>{props.transfer.firstame}{props.transfer.lastname}</p>
                      <p className={styles["transaction-description"]}>
                        {props.transfer.noTelp !== null ? props.transfer.noTelp : "-"}
                      </p>
                    </div>
                  </div>
                  

                  <div className={styles.succesInformation}>
                    <p className={styles.userName}>Details</p>
                    <p className={styles.successTitles}>Amount</p>
                    <p className={styles.successDescription}>Rp{props.transfer.amount}</p>
                    <p className={styles.successTitles}>Balance Left</p>
                    <p className={styles.successDescription}>Rp20.000</p>
                    <p className={styles.successTitles}>Date {"&"} time</p>
                    <p className={styles.successDescription}>
                      May 11, 2020 - 12.20
                    </p>
                    <p className={styles.successTitles}>Notes</p>
                    <p className={styles.successDescription}>
                      {props.transfer.notes}
                    </p>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary d-flex align-items-end justify-content-end">
                  continue
                </button>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </main>
      </LayoutTitle>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    pin: state.auth.userData.pin,
    transfer: state.transfer.data,
    user: state.user.data,
  };
};


export default connect(mapStateToProps)(Confirmation);