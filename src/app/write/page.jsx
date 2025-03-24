"use client";
import Image from "next/image";
import styles from "./write.module.css";
import { useState } from "react";
import dynamic from "next/dynamic"; // ✅ استخدم dynamic
import "react-quill/dist/quill.bubble.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// ✅ استيراد ReactQuill فقط في المتصفح
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const WritePage = () => {
  const { status } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  if (status === "loading")
    return <div className={styles.loading}>Loading...</div>;
  if (status === "unauthenticated") {
    router.push("/login");
    return null;
  }

  const slugify = (str) => {
    str = str.replace(/^\s+|\s+$/g, "").toLowerCase();
    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
    const to = "aaaaeeeeiiiioooouuuunc------";
    for (let i = 0; i < from.length; i++) {
      str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i));
    }
    return str
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  };

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        slug: slugify(title),
        catSlug: "travel",
      }),
    });
    console.log(res);
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        name="image"
        id="image"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ display: "none" }}
      />
      <input
        type="text"
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="start writing"
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
