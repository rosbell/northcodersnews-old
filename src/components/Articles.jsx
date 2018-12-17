import React, { Component } from 'react';
import * as api from '../api';
import ArticlesCard from './ArticlesCard';
import '../styles/Articles.css'
// import Vote from './Vote'


class Articles extends Component {

  state = {
    articles: []
  };

  render() {
    return (
      <div className="main">
        <ul>
          {this.state.articles.map(article => (
            <ArticlesCard article={article} key={article._id} />
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    api.getArticles(this.props.topic).then(articles => {
      console.error('OI' + JSON.stringify(articles));
      this.setState({
        articles: articles.articleDetails
      });
    });
  };

  fetchCommentsByArticle = () => {
    api.getCommentsByArticle(this.props.article_id).then(comments => {
      this.setState({
        comments
      });
    });
  }
}

export default Articles;