import Link from "next/link";

export interface PostInterface {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostsResponse {
  posts: PostInterface[];
}

export default async function page() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: PostsResponse = await response.json();

  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-5">Todos os posts</h1>
      <div className="flex flex-col gap-4 mx-2">
        {data.posts.map((post) => (
          <Link
            href={`/posts/${post.id}`}
            key={post.id}
            className="bg-gray-200 p-4 rounded-md"
          >
            <h2 className="font-bold">{post.title}</h2>
            <hr className="my-2" />
            <p>{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
