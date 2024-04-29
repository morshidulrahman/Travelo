import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Loader from "../loader/Loader";

const Blog = () => {
  const [loading, setloading] = useState(false);
  const [blog, setblog] = useState([]);

  useEffect(() => {
    setloading(true);
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/blogs`);
      const data = await res.json();
      setblog(data);
      setloading(false);
    };
    fetchdata();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center capitalize dark:text-white">
        Blogs
      </h1>
      <div className="py-16 grid lg:grid-cols-3 gap-8 md:gap-5 md:grid-cols-2 grid-cols-1">
        {blog.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
