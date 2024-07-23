import React, { createContext, useEffect, useState } from "react";

const traverseDelete = (id, parentId, comments) => {
  return comments.map(comment => {
    if (comment.id === parentId) {
      return { ...comment, replies: comment.replies.filter(data => data.id !== id) };
    } else if (comment.replies && comment.replies.length) {
      return { ...comment, replies: traverseDelete(id, parentId, comment.replies) };
    }
    return comment;
  });
};

const traverseReply = (parentId, comments, newComment) => {
  return comments.map(comment => {
    if (comment.id === parentId) {
      return { ...comment, replies: [...comment.replies, newComment] };
    } else if (comment.replies && comment.replies.length) {
      return { ...comment, replies: traverseReply(parentId, comment.replies, newComment) };
    }
    return comment;
  });
};

const traverseEdit = ( comments, newComment) => {

  let finalComments = comments.map(comment => {
    if (comment.id === newComment.id) {
      return newComment
    } else if (comment.replies && comment.replies.length) {
      return { ...comment, replies: traverseEdit( comment.replies,newComment) };
    }
    return comment;
  });

  return [...finalComments]
};


const getComments = () => {
  const storedComments = localStorage.getItem("comments");
  const parsedComments = JSON.parse(storedComments);
  return parsedComments || [];
};

export const AppContext = createContext(getComments());

const AppProvider = ({ children }) => {
  const [comments, setComments] = useState(getComments());

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const submitComments = (comment) => {
    setComments(prev => [...prev, comment]);
  };

  const deleteComments = (id) => {
    setComments(prev => traverseDelete(id, null, prev.filter(data => data.id !== id)));
  };

  const editComments = (editData) => {
    setComments(prev => prev.map(data => (data.id === editData.id ? editData : data)));
  };

  const replyComment = (comment, commentId) => {
    setComments(prev => traverseReply(commentId, prev, comment));
  };

  const traverseTree = (data, parentId, operation) => {
    if (operation === "delete") {
      setComments(prev => traverseDelete(data.id, parentId, prev));
    }
    if (operation === "reply") {
      setComments(prev => traverseReply(parentId, prev, data));
    }

    if (operation === "edit") {
      setComments(prev => traverseEdit(prev, data));
    }
  };

  const contextData = {
    comments,
    submitComments,
    deleteComments,
    editComments,
    replyComment,
    traverseTree
  };

  return (
    <AppContext.Provider value={contextData}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
