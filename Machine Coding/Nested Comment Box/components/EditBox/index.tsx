import React, { useContext, useState } from "react";
import { AppContext } from "../../context";

const EditBox = ({ data, handleClose, isReply }) => {
  const [input, setInput] = useState(data.comment);
  const { editComments, traverseTree } = useContext(AppContext);
  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) {
      alert("Please edit a comment");
      return;
    }

    let finalComment = {
      ...data,
      comment: input,
    };

    traverseTree(finalComment, data.id, "edit");

    setInput("");
    handleClose();
  };

  return (
    <div className="comments__main" style={{ marginTop: "20px" }}>
      <form className="comments__form" onSubmit={handleSubmit}>
        <p>Edit Comments</p>

        <textarea
          className="comments__box"
          placeholder="Write comments"
          onChange={handleChange}
          value={input}
          maxLength={200}
        />
        <button className="comments__btn" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditBox;
