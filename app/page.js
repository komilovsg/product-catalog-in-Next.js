"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Pagination from "./pagination/pagination";

const POSTS_PER_PAGE = 20;

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const result = await res.json();
  return result;
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchData();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const currentPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
   <div className="main">
    <h1>Главная страница</h1>
    <div className="contant">
      {currentPosts.map(el => (
        <div key={el.id} className="post">
          <h2>{el.title}</h2>
          <p>{el.body}</p>
          <Link href={`/post/` + el.id}>Детальнее</Link>
        </div>
      ))}
    </div>
    <Pagination 
      currentPage={currentPage} 
      totalPages={totalPages} 
      onPageChange={setCurrentPage} 
    />
   </div>
  );
}
