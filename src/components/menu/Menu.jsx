import Link from "next/link";
import styles from "./menu.module.css";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/menuCategories";
function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h2 className={styles.title}>Most Poplure</h2>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategories />
      <h2 className={styles.subtitle}>Chosen by the editor</h2>
      <h2 className={styles.title}>Editor Pick</h2>
      <MenuPosts withImage={true} />
    </div>
  );
}

export default Menu;
