import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import '../styles/Comments.css'

const CommentDetails = props => {
  const {
    author,
    body,
    comment_id,
    created_at,
    votes
  } = props.comment;

  return (
    <>
      <span>{body}</span>
      <p></p>
      <span className="comment-details">Posted by: {author}, posted {moment().from(created_at, true)} ago
        </span>
      {/* VOTES HERE */}
    </>
  );
};


export default CommentDetails;

CommentDetails.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  comment: PropTypes.object.isRequired,
  userId: PropTypes.string
};
