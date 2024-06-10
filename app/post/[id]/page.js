import Link from "next/link";

async function fetchData(id){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    const result = await res.json();
    return result;
  }

const Post = async ({params: {id}}) => {
    const posts = await fetchData(id);
  return (
    <div className="card-container-info">
      <Link href="/">Home</Link>
      <h2>{posts.title}</h2>
      <p>{posts.body}</p>
      <strong>User ID: {posts.userId}</strong>
    </div>
  )
}

export default Post
