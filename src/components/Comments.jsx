import React, { Component } from "react";
// import VoteCount from "./VoteCount";
import PropTypes from "prop-types";
// import CommentAdder from "./CommentAdder";
import * as api from "../api";
import "../styles/Comments.css";
import CommentDetails from "./CommentDetails";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    const { userId,
    } = this.props;

    // if (this.state.comments.length) {

    return (
      <main id='comment-list'>
        {this.state.comments.map(comment => {
          return (
            <div key={comment._id} className="comment-card">
              {/* <VoteCount parent={comment} type={"comment"} /> */}
              <i class="far fa-comment"></i>
              <CommentDetails
                userId={userId}
                deleteComment={this.deleteComment}
                comment={comment}
              />
              <div className="comment-divider" />
            </div>
          );
        })}
      </main>

      // } else {
      //   return (
      //     <span>BE THE FIRST TO COMMENT, MOTHERFUCKER</span>
      //)

    )
  }



  componentDidMount() {
    api.getCommentsByArticle(this.props._id).then(comments => {
      this.setState({
        comments
      });
    });
  }

  addComment = body => {
    api.postComment(body, this.props.userId, this.props.article_id).then(
      newComment => {
        this.setState({
          comments: [newComment, ...this.state.comments]
        });
      }
    );
  };

  deleteComment = commentId => {
    api.removeComment(commentId).then(removedComment => {
      this.setState({
        comments: this.state.comments.filter(
          comment => comment._id !== removedComment._id
        )
      });
    });
  };
}

Comments.propTypes = {
  comments: PropTypes.array,
  userId: PropTypes.string
};

export default Comments;
