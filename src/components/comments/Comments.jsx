"use client";
import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";
const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  );

  const [desc, setDesc] = useState("");
  const handleSubmit = async () => {
    await fetch("http://localhost:3000/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
    setDesc("");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            onChange={(e) => setDesc(e.target.value)}
            className={styles.input}
            placeholder="This is amazing Article !"
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to Comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          data?.map((item, index) => (
            <div className={styles.comment} key={index}>
              <div className={styles.user}>
                {item.user.image && (
                  <Image
                    src={item.user.image}
                    width={40}
                    height={40}
                    alt=""
                    className={styles.avatar}
                  />
                )}
                <div className={styles.userInfo}>
                  <span className={styles.username}>{item.user.name}</span>
                  <span className={styles.date}>
                    {item.createdAt.substring(0, 10)}
                  </span>
                </div>
              </div>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
