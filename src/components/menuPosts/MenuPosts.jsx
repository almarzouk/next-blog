import Image from "next/image";
import Link from "next/link";
import styles from "./menuPosts.module.css";
export const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} fill className={styles.image} alt="test" />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>The best travel destinations</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2025</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} fill className={styles.image} alt="test" />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Culture
          </span>
          <h3 className={styles.postTitle}>The best Culture destinations</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2025</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} fill className={styles.image} alt="test" />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Food</span>
          <h3 className={styles.postTitle}>The best Food destinations</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2025</span>
          </div>
        </div>
      </Link>
      <Link className={styles.item} href="/">
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src={"/p1.jpeg"} fill className={styles.image} alt="test" />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>The best Fashion destinations</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}> - 10.03.2025</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
