import React, { Component } from "react";
import PropTypes from "prop-types";
import * as api from "../api";
import Comments from './Comments'
import Vote from "./Vote"
import "../styles/Article.css";
import { navigate } from "@reach/router/lib/history";


class Article extends Component {
  state = {
    article: {},
    comments: [],

  };

  render() {
    const {
      title,
      votes,
      body,
      _id
    } = this.state.article;

    if (this.state.article.title) {
      return (
        <>
          <span><h2>Like it? Hate it? Vote here</h2></span>
          <Vote
            className={"article-card-votes"}
            votes={votes}
            _id={_id}
            type={"articles"}
            collection={"articles"}
          />
          <main className="article-container">
            <span className="article-header">

              <h2 className="article-title">{title}</h2>
            </span>{" "}
            <p className="article-body">{body}</p>

            <div className="body-divider" />
            <Comments
              id="comments" name="comments"
              comments={this.state.comments}
              userId={this.props.userId}
              _id={this.props._id}
            />
          </main>
        </>
      );
    }
    else {
      return <span> Loading... </span>
    }
  }

  componentDidMount() {
    api.getArticleById(this.props._id).then(article => {
      // console.warn('HEY YOU ' + JSON.stringify(article)); << what the app thinks the current state is
      this.setState({ article: article });
    })
      .catch(
        err =>
          console.log(window) ||
          navigate('/NotFound', {
            state: { errMsg: err.response.data.msg, goBackTo: '/articles' },
            replace: true
          })
      )
  }
}

Article.propTypes = {
  _id: PropTypes.string,
  userId: PropTypes.string
};

export default Article;
