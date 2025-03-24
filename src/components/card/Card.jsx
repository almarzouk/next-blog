import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";
function Card({ key, item }) {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image className={styles.image} src="/p1.jpeg" alt="test" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p className={styles.desc}>{item.desc.substring(0, 30)}</p>
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
