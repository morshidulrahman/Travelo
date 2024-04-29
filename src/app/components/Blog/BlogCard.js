import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-lg bg-gray-100">
      <div className="overflow-hidden h-[250px] w-full rounded-t-lg relative">
        <img
          src={blog.bg_image}
          alt="images"
          className="w-full h-full duration-300 hover:scale-105 transition-all"
        />
      </div>
      <div className="p-5">
        <p
          className="text-[#F26f55] pt-3 font-semibold
      "
        >
          Tour Guide
        </p>
        <p className="font-semibold py-3 text-lg h-[70px] overflow-hidden mb-2">
          {blog.bio}
        </p>
        <div className="flex items-center justify-between py-2">
          <img
            src={blog.image}
            alt="profile"
            className="w-10 h-10 rounded-full bg-gray-700 "
          />
          <p className="font-semibold">{blog.time} Min Read</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
