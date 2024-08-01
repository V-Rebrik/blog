"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getPosts,
  addPost,
  deletePosts,
  updatePost,
  Posts,
  Post,
} from "../utils/api";

interface BlogContextType {
  posts: Posts;
  addNewPost: (post: Post) => void;
  removePosts: (id: string) => void;
}

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const BlogProvider = ({ children }: Props) => {
  const [posts, setPosts] = useState<Posts>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);

  const addNewPost = async (post: Post) => {
    // const newPost = await addPost(post);
    const newPost = post;
    setPosts([...posts, newPost]);
  };

  const removePosts = async (id: string) => {
    //   await deletePosts(id);

    const newPosts = posts.filter((post) => post.id !== id);
    setPosts(newPosts);
  };

  //   const editPost = async (id, update) => {
  //     const updated = await updatePost(update, id);

  //     const updatedPosts = posts.map((post) => (post.id === id ? updated : post));
  //     setPosts(updatedPosts);
  //   };

  return (
    <BlogContext.Provider value={{ posts, addNewPost, removePosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);
  return context;
};
