import classes from "./comment-list.module.css";
import { useEffect } from "react";

function CommentList(props) {
  console.log(props);
  const comments = props.comments;


  return (
    <ul className={classes.comments}>
      {comments && comments.map((comment) => {
        return (
          <li key={comment._id}>
            <p>{comment.text}</p>
            <div>
              by <address>{comment.name}</address>
            </div>
          </li>
        );
      })}
      {/* Render list of comments - fetched from API */}
    </ul>
  );
}

export default CommentList;
