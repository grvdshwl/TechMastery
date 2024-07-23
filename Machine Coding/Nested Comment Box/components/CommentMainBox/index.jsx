import React, { useContext, useState } from "react";
import Modal from "../Modal";
import EditBox from "../EditBox";
import ReplyBox from "../ReplyBox";
import { AppContext } from "../../context";

const CommentMainBox = ({ data, isReply, parentId }) => {
  const [editModal, setEditModal] = useState(false);
  const [editData, setEditData] = useState(null);
  const [replyModal, setReplyModal] = useState(false);
  const [replyData, setReplyData] = useState(null);
  const { deleteComments, traverseTree } = useContext(AppContext);
  const handleEdit = (data) => {
    setEditModal(true);
    setEditData(data);
  };

  const handleReply = (data) => {
    setReplyModal(true);
    setReplyData(data);
  };

  const closeModal = () => {
    setEditModal(false);
    setEditData(null);
    setReplyModal(false);
    setReplyData(null);
  };

  const handleDelete = () => {
    if (!isReply) {
      deleteComments(data.id);
    } else {
      traverseTree(data, parentId, "delete");
    }
  };

  return (
    <>
      <div
        className="comment"
        style={{
          marginTop: isReply ? "12px" : "0px",
          background: isReply ? "red" : "aqua",
        }}
      >
        <div style={{display:"flex",flexDirection:"row",alignItems:"center",gap:"12px"}}>
        <div>
          <img src={data.profileImage} width="100px" height="100px" style={{borderRadius:"50%"}}/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
          <div>{data.user}</div>
          <div>{data.comment}</div>
        </div>
        </div>
        <div className="comment__btn--container ">
          <div className="comment__btn--main" onClick={handleDelete}>
            Delete
          </div>
          <div className="comment__btn--main" onClick={() => handleEdit(data)}>
            Edit
          </div>
          <div className="comment__btn--main" onClick={() => handleReply(data)}>
            Reply
          </div>
        </div>

        {editModal && editData && (
          <Modal isVisible={editModal} handleClose={closeModal}>
            <EditBox data={editData} handleClose={closeModal} isReply={isReply} />
          </Modal>
        )}

        {replyModal && replyData && (
          <Modal isVisible={replyModal} handleClose={closeModal}>
            <ReplyBox data={replyData} handleClose={closeModal} />
          </Modal>
        )}
      </div>
      <div style={{ marginLeft: "60px" }}>
        {data.replies.map((replyComment) => (
          <CommentMainBox
            key={replyComment.id}
            data={replyComment}
            parentId={data.id}
            isReply={true}
          />
        ))}
      </div>
    </>
  );
};

export default CommentMainBox;
