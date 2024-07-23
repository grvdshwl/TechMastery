import React, { useContext, useState } from "react";
import { AppContext } from "../../context";
import { getRandomUser } from "../../helpers";

const ReplyBox = ({ data, handleClose }) => {
  const [input, setInput] = useState("");
  const { traverseTree } = useContext(AppContext);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please write a comment");
      return;
    }

    const user = getRandomUser();

    const finalComment = {
      id: Math.floor(Math.random() * 100000),
      user: user.name,
      comment: input,
      replies: [],
      profileImage: user.userImage
    };

    traverseTree(finalComment, data.id, "reply");

    setInput("");
    handleClose();
  };

  return (
    <div className="comments__main" style={{ marginTop: "20px" }}>
      <form className="comments__form" onSubmit={handleSubmit}>
        <p>Reply Comments</p>
        <textarea
          className="comments__box"
          placeholder="Write comments"
          onChange={handleChange}
          value={input}
          maxLength={200}
        />
        <button className="comments__btn" type="submit">
          Reply
        </button>
      </form>
    </div>
  );
};

export default ReplyBox;
