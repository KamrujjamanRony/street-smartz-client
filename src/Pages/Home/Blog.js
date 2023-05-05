import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container mx-auto px-5">
      <h1 className="text-5xl font-bold tracking-widest text-primary text-center m-5 uppercase">
        Popular Blogs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 mb-20">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog}></BlogCard>
        ))}
      </div>
    </div>
  );
};

export default Blog;
