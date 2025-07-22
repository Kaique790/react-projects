import React from "react";
import { PostInterface } from "../page";

export default async function PostDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const post: PostInterface = await response.json();

  return (
    <div className="flex flex-col gap-4 mx-2 mt-8">
      <div key={post.id} className="bg-gray-200 p-4 rounded-md">
        <h2 className="font-bold">{post.title}</h2>
        <hr className="my-2" />
        <p>{post.body}</p>
      </div>
    </div>
  );
}
