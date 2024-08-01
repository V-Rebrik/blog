import React from "react";
import Link from "next/link";
import { Posts } from "../utils/api";

type Props = {
  posts: Posts;
};

const PostsList = ({ posts }: Props) => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 px-5 pt-10 sm:pt-3 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts?.map((post) => (
        <div className="rounded border border-gray-200 p-3" key={post.id}>
          <Link href={`pages/${post.id}`}>
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="absolute inset-0" />
                  {post.title}
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <span className="absolute inset-0" />
                    {post.name}
                  </p>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default PostsList;
