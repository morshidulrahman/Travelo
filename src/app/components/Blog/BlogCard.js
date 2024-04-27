import React from "react";

const BlogCard = () => {
  return (
    <div className="rounded-lg bg-gray-100">
      <div className="overflow-hidden h-[250px] w-full rounded-t-lg relative">
        <img
          src="https://i.ibb.co/QXTvJZ7/banner4.jpg"
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
        <p className="font-semibold py-5 text-lg">
          The World is a Book and Those Who do not Travel Read Only One Page.
        </p>
        <div className="flex items-center justify-between">
          <img
            src="https://i.ibb.co/3cXqr9P/profile1.png"
            alt="profile"
            className="w-10 h-10 rounded-full bg-gray-700 p-2"
          />
          <p className="font-semibold">10 Min Read</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
