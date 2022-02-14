import styles from "src/commons/styles/CardUser.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { detailTransfer } from "src/redux/actions/transfer";

function CardUserById(props, dispatch) {
  console.log(props);
  // console.log(props.firstname)
  const router = useRouter();
  // const { id } = router.query
  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      amount: e.target.amount.value,
      notes: e.target.notes.value,
      id: props.id,
      firstname: props.firstname,
      lastname: props.lastname,
      phone: props.phone,
    };
    console.log(data);
    props.dispatch(detailTransfer(data));
    router.push("/mains/transfer/confirmation");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div
          className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex"
          key={props.id, props.firstname, props.lastame, props.phone}
        >
          {/* <p>{id}</p> */}
          <div className="mx-2">
            <Image
              src={"/image-profile.png"}
              alt="google"
              width={50}
              height={50}
            />
          </div>
          <div className="w-50 my-auto">
            <p className={styles.userName}>
              {props.firstname}
              {props.lastname}
            </p>
            <p className={styles["transaction-description"]}>
              {props.noTelp !== null ? props.noTelp : "-"}
            </p>
            {/* <p>{id}</p><p>{id}</p> */}
            <p>
              Type the amount you want to transfer and then <br />
              press continue to the next steps.
            </p>
            <input
              type="number"
              placeholder="0.00"
              name="amount"
              className={styles["amount-input"]}
            />
            <p>Rp120000</p>
            <input type="text" placeholder="Add some notes" name="notes" />
            <button
              className={`${styles["button-continue"]} btn-primary`}
              type="submit"
            >
              Continue
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

const mapStateToProps = (state) => {
  // Promise.resolve(true)
  // console.log(state)
  return {
    // token: state.auth.userData.token,
    // id: state.auth.userData.id,
    // user: state.user.data,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     dispatch: (data) => {
//       console.log(data)
//       props.dispatch(detailTransfer(data));
//     },
//   };
// };


export default connect(mapStateToProps)(CardUserById);
