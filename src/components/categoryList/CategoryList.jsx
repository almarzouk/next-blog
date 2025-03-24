"use client"; // Ensures this runs as a Client Component

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./categoryList.module.css";

const CategoryList = () => {
  const [categories, setCategories] = useState([]); // Stores category data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/categories", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Runs once when the component mounts

  // ✅ Handle loading state
  if (loading) return <p>Loading categories...</p>;

  // ✅ Handle API errors
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories.length > 0 ? (
          categories.map((category) => (
            <Link
              key={category._id}
              href={`/blog?cat=${category.slug}`} // Dynamically link categories
              className={`${styles.category} ${styles[category.slug] || ""}`}
            >
              <Image
                src={category.img}
                alt={category.title || "Category"}
                width={32}
                height={32}
                className={styles.image}
              />
              {category.title || "Unnamed Category"}
            </Link>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
