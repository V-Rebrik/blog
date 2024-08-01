"use client";

import MainContainer from "@/app/components/MainContainer";
import PostsList from "./components/PostsList";
import { useBlogContext, BlogProvider } from "./context/BlogContext";

export default function Home() {
  const { posts } = useBlogContext() ?? {};

  if (!posts) {
    return;
  }

  return (
    <div className="bg-white">
      <MainContainer>
        <>
          <h1 className="text-center">Simple Blog Application</h1>
          <PostsList posts={posts} />
        </>
      </MainContainer>
    </div>
  );
}
