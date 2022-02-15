import styles from "src/commons/styles/Main.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
// import ModalTopUp from "src/commons/components/ModalTopUp";
import TopUp from "src/commons/components/TopUp"
import { useState } from "react";
import Swal from "sweetalert2";
import { connect, useDispatch } from "react-redux";
import { logoutAction } from "src/redux/actions/auth";
import { logout } from "src/modules/utils/https/auth";
import { useSelector } from "react-redux";

function LayoutMain(props) {
  // const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  // console.log(props)
  const token = props.token;
  const dispatch = useDispatch();

  const router = useRouter();
  const style = {
    marginRight: 10,
  };

  const logoutHandler = () => {
    Swal.fire({
      icon: "warning",
      title: "Do you want to logout?",
      showCancelButton: true,
      confirmButtonText: "Logout",
      cancelButtonText: `Cancel`,
    }).then((res) => {
      if (res.isConfirmed) {
        logout(token)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));

        dispatch(logoutAction());
        Swal.fire({
          title: "Logout Success",
          text: "Success Logout",
          icon: "success",
        });
        setTimeout(() => {
          window.location.reload(false);
        }, 4000);
        router.push("/");
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <aside className={styles.menu}>
      <div>
        <Link href="/mains/home" onClick={handleClick} style={style} passHref>
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-grid"></i>
            Dashboard
          </a>
        </Link>
      </div>
      <div>
        <Link
          href="/mains/transfer"
          onClick={handleClick}
          style={style}
          passHref
        >
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-arrow-up"></i>
            Transfer
          </a>
        </Link>
      </div>
      <div>
        {/* <Link href="/mains/topup" onClick={handleClick} style={style} passHref> */}
        <a onClick={handleShow}>
          <i className="bi bi-plus-lg"></i>
          Top up
        </a>
        {/* </Link> */}
      </div>
      <div>
        <Link
          href="/mains/profile"
          onClick={handleClick}
          style={style}
          passHref
        >
          <a pathname={router.pathname}>
            <i className="bi bi-person"></i>
            Profil
          </a>
        </Link>
      </div>

      <button className={styles.logout} onClick={logoutHandler}>
        <i className="bi bi-upload"></i>
        Logout
      </button>
      <TopUp show={show} handleClose={handleClose}/>
    </aside>
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

export default connect(mapStateToProps)(LayoutMain);