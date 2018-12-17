import React, { Component } from 'react';
import '../styles/ArticleCard.css'
import PropTypes from 'prop-types'
import { Link } from '@reach/router';
import moment from 'moment';


class ArticleCard extends Component {

  state = {

  };

  render() {
    const {
      title,
      // votes,
      belongs_to,
      created_by,
      created_at,
      _id
    } = this.props.article;

    return (
      <div>
        <Link className="article-card-title" to={`/articles/${_id}`}>
          <span><i class="far fa-star"></i>{title}</span>
        </Link>
        <Link className="article-card-topic" to={`/topics/${belongs_to}`}>
          <span>Appears in: {belongs_to}</span>
        </Link>
        <span className="article-card-author">
          Posted By: {created_by.username}
        </span>

        <span className="article-card-time">
          {moment(created_at).fromNow()}
        </span>

      </div>
    )
  }
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  // votes: PropTypes.objectOf(PropTypes.number.isRequired),
  title: PropTypes.objectOf(PropTypes.string.isRequired),
  created_by: PropTypes.objectOf(PropTypes.string.isRequired),
  belongs_to: PropTypes.objectOf(PropTypes.string.isRequired),
  created_at: PropTypes.objectOf(PropTypes.string.isRequired),
  _id: PropTypes.objectOf(PropTypes.string.isRequired)
};


export default ArticleCard;
