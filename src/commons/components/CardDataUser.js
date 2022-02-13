import styles from 'src/commons/styles/CardUser.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

function CardDataUser({name, lastname, noTelp, onClickHandler, id}) {
  const router = useRouter();
  // const { id } = router.query
  
  return (
    <>
        <div
        className="col-10 col-sm-10 col-md-10 col-lg-12 my-4 d-flex"
        onClick={onClickHandler}
      >
        <Link href={`/mains/transfer/${id}`} passHref>
          <div className="mx-2">
            <Image src={"/image-profile.png"} alt="google" width={50} height={50} />
          </div>
        </Link>
        <div className="w-50 my-auto">
          <p className={styles.userName}>{name}{lastname}</p>
          <p className={styles["transaction-description"]}>{noTelp}</p>
          {/* <p>{id}</p> */}
        </div>
      </div>
    </>
  );
}

export default CardDataUser;