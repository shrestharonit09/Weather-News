import React, { useState, useEffect } from "react";

const CommentSection = ({ publishDate, logincomments }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingComment, setEditingComment] = useState(null);

  useEffect(() => {
    // Load comments from local storage when the component mounts
    const savedComments =
      JSON.parse(localStorage.getItem(`comments-${publishDate}`)) || [];
    setComments(savedComments);
  }, [publishDate]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const comment = {
      id: Date.now(),
      text: newComment,
    };
    const updatedComments = [...comments, comment];
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${publishDate}`,
      JSON.stringify(updatedComments)
    );
    setNewComment("");
    
  };

  const handleEditComment = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    setEditingComment(commentToEdit);
    setNewComment(commentToEdit.text);
   
  };

  const handleUpdateComment = () => {
    const updatedComments = comments.map((comment) =>
      comment.id === editingComment.id
        ? { ...comment, text: newComment }
        : comment
    );
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${publishDate}`,
      JSON.stringify(updatedComments)
    );
    setEditingComment(null);
    setNewComment("");

   
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
    localStorage.setItem(
      `comments-${publishDate}`,
      JSON.stringify(updatedComments)
    );
   
  };

  return (
    <div className="p-4">
      <h3 className="text-sm sm:text-base md:text-xl font-bold mb-2">Comments</h3>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex justify-between items-center mb-2"
        >
          <p>{comment.text}</p>
          <div className="flex gap-2">
            <button
              className="text-blue-500"
              onClick={() => handleEditComment(comment.id)}
            >
              Edit
            </button>
            <button
              className="text-red-500"
              onClick={() => handleDeleteComment(comment.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      {logincomments ? (
        <div className="flex mt-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border rounded-lg p-2 w-full"
            placeholder="Add a comment..."
          />
          <button
            onClick={editingComment ? handleUpdateComment : handleAddComment}
            className="bg-blue-500 text-white p-2 rounded-lg ml-2"
          >
            {editingComment ? "Update" : "Add"}
          </button>
        </div>
      ) : (
        <div className="flex mt-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border rounded-lg p-2 w-full"
            placeholder="Please log in to add a comment..."
            disabled
          />
          <button
            onClick={() => alert("Please log in to add a comment.")}
            className="bg-blue-500 text-white p-2 rounded-lg ml-2 hover:bg-blue-700"
            disabled
          >
            {editingComment ? "Update" : "Add"}
          </button>
        </div>
      )}

    </div>
  );
};

export default CommentSection;
