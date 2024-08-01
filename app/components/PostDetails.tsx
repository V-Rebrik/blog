"use client";

import React from "react";
import { useBlogContext } from "../context/BlogContext";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

const PostDetail: React.FC = () => {
  const { posts, removePosts } = useBlogContext() ?? {};
  const { id } = useParams();
  const router = useRouter();

  if (!posts || !removePosts) {
    return;
  }
  const post = posts?.find((post) => post?.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const { name, title, description } = post;

  const handelRemove = () => {
    removePosts(post.id);
    router.push("/");
  };

  return (
    <div className="mt-6 border-t border-gray-100 p-4">
      <dl className="divide-y divide-gray-100">
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">
            Full name
          </dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {name}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Title</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {title}
          </dd>
        </div>
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {description}
          </dd>
        </div>
      </dl>
      <button
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handelRemove()}
      >
        Delete
      </button>
    </div>
  );
};

export default PostDetail;
