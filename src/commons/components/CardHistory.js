import styles from "src/commons/styles/CardHistory.module.css";
import { getHistory } from "src/modules/utils/https/transactions";
import Image from "next/image";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

function CardHistory(props) {
  // console.log(props)
  const [history, setHistory] = useState();
  
  useEffect(() => {
    const query = "?page=1&limit=3&filter=WEEK";
    const token = props.token;
    getHistory(query, token)
      .then((res) => setHistory(res.data.data))
      .catch((err) => console.error(err));
  },[]);

  return (
    <>
      {Array.isArray(history) &&
        history.length > 0 &&
        history.map((lists, id) => (
          <div key={id}>
            <div className={`${styles["main-history"]} row col-md-12`}>
              <div className={`${styles["image-profileTr"]} col-md-2`}>
                <Image
                  src={"/man.png"}
                  alt="image person"
                  width={50}
                  height={50}
                  className={styles.image}
                />
              </div>
              <div className={`${styles["info-person"]} col-md-7`}>
                <p className={styles["name-profile"]}>{lists.fullName}</p>
                <p className={styles["info-profile"]}>{lists.type}</p>
              </div>
              <div className={`${styles["transaction-price"]} col-md-3`}>
                <p className={styles["price"]}>{lists.amount}</p>
              </div>
            </div>
          </div>
        ))}
      {/* <div className={`${styles["image-profileTr"]} col-md-2`}>
            <Image
              src={"/man.png"}
              alt="image person"
              width={50}
              height={50}
              className={styles.image}
            />
        </div>
        <div className={`${styles["info-person"]} col-md-7`}>
            <p className={styles["name-profile"]}>Samuel Suhi</p>
            <p className={styles["info-profile"]}>Accept</p>
        </div>
        <div className={`${styles["transaction-price"]} col-md-3`}>
            <p className={styles["price"]}>+50.000</p>
        </div> */}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.userData.token,
    id: state.auth.userData.id,
  };
};

export default connect(mapStateToProps)(CardHistory);
