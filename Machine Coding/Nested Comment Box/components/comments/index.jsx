import React, { useContext, useState } from "react";
import { getRandomUser } from "../../helpers";
import { AppContext } from "../../context";

import CommentMainBox from "../CommentMainBox";

const CommentsBox = ({ comments }) => {
  const [input, setInput] = useState("");
  const { submitComments } = useContext(AppContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please provide a comment");
      return;
    }

    const user = getRandomUser();

    const finalComment = {
      id: Date.now(),
      user: user.name,
      comment: input,
      replies: [],
      profileImage: user.userImage,
    };

    submitComments(finalComment);
    setInput("");
  };

  return (
    <div className="comments__main">
      <form className="comments__form" onSubmit={handleSubmit}>
        <textarea
          className="comments__box"
          placeholder="Write comments"
          onChange={handleChange}
          value={input}
          maxLength={200}
        />
        <button className="comments__btn" type="submit">
          Submit
        </button>
      </form>

      <div className="comments__list">
        {comments.map((comment) => (
          <div key={comment.id}>
            <CommentMainBox data={comment} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentsBox;
