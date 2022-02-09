import styles from "src/commons/styles/Main.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function LayoutMain() {
    const router = useRouter();
    const style = {
      marginRight: 10,
      // color: router.asPath === href ? 'red' : 'black',
    }
  
    const handleClick = (e) => {
      e.preventDefault()
      router.push(href)
    }
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
        <Link href="/mains/transfer" onClick={handleClick} style={style} passHref>
          <a pathname={router.pathname}>
            {" "}
            <i className="bi bi-arrow-up"></i>
            Transfer
          </a>
        </Link>
      </div>

      <div>
        <Link href="/mains/topup" onClick={handleClick} style={style} passHref>
          <a pathname={router.pathname}>
            <i className="bi bi-plus-lg"></i>
            Top up
          </a>
        </Link>
        </div>
        <div>
          <Link href="/mains/profile" onClick={handleClick} style={style} passHref>
            <a pathname={router.pathname}>
              <i className="bi bi-person"></i>
              Profil
            </a>
          </Link>
        </div>

        <button className={styles.logout}>
          <i className= "bi bi-upload"></i>
          Logout
        </button>
    </aside>
  );
}
