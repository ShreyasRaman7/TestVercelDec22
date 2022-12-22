import React, { useState } from 'react';

function CommentsSection() {
  // Use the `useState` hook to store the list of comments and a function to add new comments
  const [comments, setComments] = useState([]);

  // Define a function to add a new comment to the list
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div>
      {/* Display the list of comments */}
      {comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
      <br />
      {/* Add a form to allow users to submit new comments */}
      <form
        onSubmit={(event) => {
          // Prevent the default form submission behavior
          event.preventDefault();
          // Get the value of the text input field
          const comment = event.target.elements.comment.value;
          // Add the new comment to the list
          addComment(comment);
          // Clear the text input field
          event.target.elements.comment.value = '';
        }}
      >
        <input type="text" name="comment" />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

export default CommentsSection;
