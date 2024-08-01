import React from "react";
import PostForm from "../../components/PostForm";
import MainContainer from "@/app/components/MainContainer";

const AddPost: React.FC = () => {
  return (
    <MainContainer>
      <>
        <h1 className="text-center">Add a New Post</h1>
        <PostForm />
      </>
    </MainContainer>
  );
};

export default AddPost;
