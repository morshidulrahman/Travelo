import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center capitalize dark:text-white">
        Blogs
      </h1>
      <div className="py-16 grid grid-cols-3 gap-5">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
