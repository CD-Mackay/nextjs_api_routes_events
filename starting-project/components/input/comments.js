import { useState, useEffect } from 'react';


import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();

  useEffect(() => {
    console.log("runnning comments useeffect");
    if (showComments) {
      fetch(`/api/events/${eventId}/commentId`)
      .then(response => response.json())
      .then(data => {
        // const eventComments = data.comments.filter(comment => comment.eventId === eventId)
        setComments(data.comments);
      })
      
    }
  }, [showComments])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // send data to API
    const commentId = new Date().toISOString();
    fetch(`/api/events/${eventId}/${commentId}`, {
      method: "POST",
      body: JSON.stringify(commentData),
      headers: {
        "Content-Type": "application/json",
      },
      
      // fetch user input (state or refs)
      // optional: validate input
      // send valid data to API
    })
    .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
  {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
