import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import LayoutMain from "src/commons/components/LayoutMain";
import LayoutTitle from "src/commons/components/LayoutTitle";
import Image from "next/image";
import styles from "src/commons/styles/addNumber.module.css";
// import CardDataUser from "src/commons/components/CardDataUser";
import CardUserById from "src/commons/components/CardUserById";
import { getUserById } from "src/modules/utils/https/user";
import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import Router, { useRouter } from "next/router";

function TransferId(props) {
  const [userList, setUserList] = useState({});
  const router = useRouter();
  // console.log(Router)
  // const dispatch = useDispatch();
  const id = router.query.transferId;
  // console.log(id)
  // console.log(props)

  useEffect(() => {
    const token = props.token;
    // console.log(token)
    const id = router.query.transferId;
    if (Object.keys(router.query).includes("transferId")) {
      getUserById(token, id)
        .then((res) => {
          setUserList(
            res.data.data
          );
          // console.log(res)
        })
        .catch((err) => console.log(err));
    }
  },[]);

  return (
    <>
      <LayoutTitle title="Main | Transfer">
        <main className={`${styles["main-addNumber"]} row col-12 col-md-12`}>
          <Header />
          <div className="col-md-4">
            <LayoutMain />
          </div>
          <div className={`${styles["fill-Number"]} col-md-8`}>
            <div className={`${styles["fill-addNumber"]} row col-md-11`}>
              <p>Transfer Money</p>
              <div className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex">
                <CardUserById
                firstname={userList.firstName}
                lastname={userList.lastName}
                phone={userList.noTelp}
                balance={userList.balance}
                key={id}
                />
              </div>
              <p>
                Type the amount you want to transfer and then <br />
                press continue to the next steps.
              </p>
              <form>
                <input type="number" placeholder="0.00" />
                <p>Rp122222</p>
                <input type="text" placeholder="Add some notes" />
                <button className={`${styles["button-continue"]} btn-primary`}>
                  Continue
                </button>
              </form>
            </div>
          </div>
          <Footer />
        </main>
      </LayoutTitle>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    userData: state.user.userData,
  };
};

export default connect(mapStateToProps)(TransferId);
