import classes from "./comment-list.module.css";
import { useEffect } from "react";

function CommentList(props) {
  const comments = props.comments;
  console.log(props);

  return (
    <ul className={classes.comments}>
      {/* {comments.length > 0 && comments.map((comment) => {
        return (
          <li key={comment.commentId}>
            <p>{comment.text}</p>
            <div>
              by <address>{comment.name}</address>
            </div>
          </li>
        );
      })} */}
      {/* Render list of comments - fetched from API */}
    </ul>
  );
}

export default CommentList;
