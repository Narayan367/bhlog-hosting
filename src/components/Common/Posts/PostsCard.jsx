import React from "react";
import { readTime } from "../../../utils/helper";
import moment from "moment/moment";
import SavedPost from "./Actions/SavedPost";
import { Blog } from "../../../Context/Context";
import Actions from "./Actions/Actions";
import { useNavigate } from "react-router-dom";

const PostsCard = ({ post }) => {
  const { title, desc, created, postImg, id: postId, userId, username } = post;
  const { currentUser } = Blog();

  const navigate = useNavigate();

  return (
    <section>
      <div className="flex">

      <div
        onClick={() => navigate(`/post/${postId}`)}
        className="flex flex-col sm:flex-row gap-4 cursor-pointer ">
        <div className="flex-[2.5]">
          <p className="pb-2 font-semibold capitalize">{username}</p>
          <h2 className="text-xl font-bold line-clamp-2 leading-6 capitalize">
            {title}
          </h2>
          <div
            className="py-[2px] text-gray-500 line-clamp-2 leading-5 w-[500px]"
            dangerouslySetInnerHTML={{ __html: desc }}
          />
        </div>
        {postImg && (
          <div className=" ">
            <img
              src={postImg}
              alt="postImg"
              className="h-[8rem] object-cover"
            />
          </div>
        )}
      </div>
      </div>
      <div className="flex items-center justify-between w-full md:w-[70%] mt-[2rem] md:mt-0">
        <p className="text-xs text-gray-600">
          {readTime({ __html: desc })} min read .
          {moment(created).format("MMM DD")}
        </p>
        <div className="flex items-center gap-3 pt-2">
          <SavedPost post={post} />
          {currentUser?.uid === userId && (
            <Actions postId={postId} title={title} desc={desc} />
          )}
        </div>
      </div>
      <hr />
    </section>
  );
};

export default PostsCard;
