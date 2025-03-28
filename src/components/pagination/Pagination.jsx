"use client";
import { useRouter } from "next/navigation";
import styles from "./pagination.module.css";
function Pagination({ page, hasPrev, hasNext }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <button
        disabled={!hasPrev}
        className={styles.button}
        onClick={() => router.push(`?page=${page - 1}`)}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => router.push(`?page=${page + 1}`)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
