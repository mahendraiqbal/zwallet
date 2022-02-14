import Image from "next/image";
import LayoutMain from "src/commons/components/LayoutMain";
import styles from "src/commons/styles/Transfer.module.css";
import Header from "src/commons/components/Header";
import Footer from "src/commons/components/Footer";
import LayoutTitle from "src/commons/components/LayoutTitle";
import { getUser } from "src/modules/utils/https/user";
import { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { useRouter } from "next/router";
import CardDataUser from "src/commons/components/CardDataUser";

function Transfer(props) {
  const state = useSelector((state) => state.auth);
  console.log(props)
  const [searchUser, setSearchUser] = useState();
  const router = useRouter();

  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const token = props.token;
    const query = "?page=1&limit=4&search=&sort=firstName DESC";
    // console.log(query)
    
    getUser(token, query)
      .then((res) => {
        // console.log(res.data.data)
        // console.log(query)
        setUserList(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const onClickHandler = (id) => {
    router.push(`/mains/transfer/${id}`);
    // console.log(`/mains/transfer/${id}`);
    // console.log(transferId)
  };
  
  const handleSearch = (e) => {
    const newSearch = {
      ...searchUser,
      search: e.target.value
    }
  }

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
              <p>
                <strong>Search Receiver</strong>
              </p>
              <div className={styles.search}>
                <form>
                  <div className="form-group">
                    <div
                      className={`${styles["style-input"]} d-flex justify-content-center`}
                    >
                      <i className="bi bi-search"></i>
                      <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput2"
                        placeholder="Serach receiver here"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <section className="w-100">
                {Array.isArray(userList) &&
                  userList.length > 0 &&
                  userList.map((List, idx) => (
                    <CardDataUser
                      name={List.firstName}
                      lastname={List.lastName}
                      phone={List.noTelp}
                      id={List.id}
                      key={idx}
                      onClickHandler={() => onClickHandler()}
                    />
                  ))}
              </section>
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
    transfer: state.transfer.data,
    user: state.user.data,
  };
};

export default connect(mapStateToProps)(Transfer);
