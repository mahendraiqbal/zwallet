import styles from "src/commons/styles/Header.module.css";
import Image from "next/image";
import { connect } from "react-redux";

function Header(props) {
  console.log(props)
  return (
    <>
      <div className={`${styles["header"]} row col-12 col-md-12`}>
        <div className={`${styles["icon-zwallet"]} col-md-8`}>Zwallet</div>
        <div className={`${styles["side-nav"]} row col-md-4`}>
          <div className="row col-md-12">
            <div className={`${styles["image-perrson"]} col-md-3`}>
              <Image
                src={"/profilee.png"}
                alt="image person"
                width={50}
                height={50}
              />
            </div>
            <div className={`${styles["name"]} col-md-6`}>
              <p className={styles["name-profile"]}></p>
              <p className={styles["phone-profile"]}></p>
            </div>
            <div className={`${styles["bell-icon"]} col-md-3`}>
              <Image 
                src={"/bell.png"}
                alt="bell"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
    user: state.user.data,
  };
};


export default connect(mapStateToProps)(Header);
