import axios from "axios";

const API_URL = "https://66aab2e2636a4840d7c86091.mockapi.io/posts";

export type Post = {
  name: string;
  title: string;
  description: string;
  id: string;
};

export type Posts = Post[];

export const getPosts = async () => {
  const response = await axios.get(API_URL);

  return response.data;
};

export const getPostsById = async (id: string) => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data;
};

export const addPost = async (post: Post) => {
  const response = await axios.post(API_URL, post);

  return response.data;
};
export const deletePosts = async (id: string) => {
  const response = await axios.delete(`${API_URL}/${id}`);

  return response.data;
};

export const updatePost = async (post: Post, id: string) => {
  const response = await axios.put(`${API_URL}/${id}`, post);

  return response.data;
};
