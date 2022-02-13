import { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "src/commons/styles/Dash.module.css";
import { getUser, getUserById } from "src/modules/utils/https/user";
import second from 'first'

function Balance(props) {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const id = props.id;
    const token = props.token;
    getUserById(token, id)
      .then((res) => console.log(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className={styles.ballanceInfo}>
        <div className="row w-100">
          <div className="col-11 col-sm-6 mx-auto">
            <p>Ballance</p>
            <h1>Rp.p</h1>
            <p>p</p>
          </div>
          <div className="col-11 col-sm-4 my-auto float-right">
            <button className="btn btn-block">
              <span>
                <i className="bi bi-arrow-up"></i>
              </span>
              Transfer
            </button>
            <button className="btn btn-block">
              <span>
                <i className="bi bi-plus-lg"></i>
              </span>
              Top up
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    userData: state.user.userData
  };
};


export default connect(mapStateToProps)(Balance);
