import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h2 className={styles.logoText}>Blog</h2>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis
          nesciunt perferendis debitis natus recusandae porro alias similique
          officiis eum!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" width={18} height={18} alt="" />
          <Image src="/instagram.png" width={18} height={18} alt="" />
          <Image src="/tiktok.png" width={18} height={18} alt="" />
          <Image src="/youtube.png" width={18} height={18} alt="" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
