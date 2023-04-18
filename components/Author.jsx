import Image from "next/image";
import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
      <div className="absolute left-0 right-0 -top-12">
        <div className="flex justify-center rounded-full">
          <Image
            alt={author.name}
            unoptimized
            height={100}
            width={100}
            src={author.photo.url}
          />
        </div>
      </div>
      <h3 className="text-white mt-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
