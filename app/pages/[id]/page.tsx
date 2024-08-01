"use client";

import React from "react";
import PostDetails from "@/app/components/PostDetails";
import MainContainer from "@/app/components/MainContainer";

const PostDetail: React.FC = () => {
  return (
    <MainContainer>
      <>
        <h1 className="text-center"> Post Details</h1>
        <PostDetails />
      </>
    </MainContainer>
  );
};

export default PostDetail;
