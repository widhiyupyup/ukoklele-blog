import React, { useEffect, useState } from "react";
import { getRecentPosts, getSimilarPosts } from "@/services";
import Link from "next/link";
import moment from "moment";

const PostWidget = ({ categories, slug }) => {
  const [relatedPost, setRelatedPost] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => {
        setRelatedPost(res);
      });
    } else {
      getRecentPosts().then((res) => {
        setRelatedPost(res);
      });
    }
  }, [slug]);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Similar Posts" : "Recent Posts"}
      </h3>
      {relatedPost.map((post) => (
        <div key={post.title} className="flex items-center w-full mb-4">
          <img
            alt={post.title}
            height="64px"
            width="64px"
            className="align-middle rounded-full"
            src={post.featuredImage.url}
          />
          <div className="flex-grow ml-4">
            <p className="text-gray-500 text-sm">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link
              href={`/post/${post.slug}`}
              className="transition duration-500 ease hover:text-pink-600"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
