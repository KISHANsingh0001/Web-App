import React from "react";
import img2 from "../../assets/Frame62.png"

function BlogCard({ img =img2, title ="tilte", description ="description", link = "https://blog.leeza.app/" }) {
  return (
    <>
      <div className="flex justify-center items-center mb-20 md:w-[70%] "> 
      <div className=" mt-10 min-w-[40%] mx-8 sm:p-2 sm:m-2 md:ml-36 p-4 flex md:flex-row overflow-hidden border-black shadow-xl flex-col gap-4 m-4 border rounded-3xl">
        <span className="overflow-hidden p-4 max-w-[350px] flex justify-center items-center ">
          <img
            src={img2}
            alt="img"
            className=" "
          />
        </span>
        <span className="p-4 flex flex-col gap-7 m-7 md:max-w-[50%]">
          <span className="font-poppins text-xl md:text-4xl">{title}</span>
          <span className="font-poppins text-sm text-slate-500">{description}</span>
        <a href={link} className="text-sm text-blue-600 cursor-pointer font-bold">  Read more</a>
        </span>
      </div>
      </div>
    </>
  );
}

export default BlogCard;
