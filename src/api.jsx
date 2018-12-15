import axios from 'axios';

const BASE_URL = `https://northcoders-news-rb.herokuapp.com/api/`;

// TOPICS


export const getTopics = () => {
  return axios.get(`${BASE_URL}/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getTopicById = id => {
  return axios.get(`${BASE_URL}/topics/${id}`).then(({ data }) => {
    return data.topic;
  });
};

//ARTICLES 

export const getArticles = async topic => {
  const URL = topic
    ? `${BASE_URL}topics/${topic}/articles`
    : `${BASE_URL}articles`;
  console.log(URL)
  const { data } = await axios.get(URL);
  console.log(data);
  return data;
};

export const getArticleById = id => {
  return axios.get(`${BASE_URL}/articles/${id}`).then(({ data }) => {
    console.log(data.article)
    return data.article;
  });
};

export const getArticlesByTopic = id => {
  return axios.get(`${BASE_URL}/topics/${id}/articles`).then(({ data }) => {
    return data.articles;
  });
};

export const postArticle = (body, title, userId, topic) => {
  return axios
    .post(`${BASE_URL}/topics/${topic}/articles`, {
      body,
      title,
      created_by: userId
    })
    .then(({ data }) => {
      return data;
    });
};

// COMMENTS
export const getCommentsByArticle = id => {
  return axios.get(`${BASE_URL}/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

export const postComment = (body, userId, articleId) => {
  return axios
    .post(`${BASE_URL}/articles/${articleId}/comments`, {
      body,
      created_by: userId
    })
    .then(({ data }) => {
      return data;
    });
};

export const removeComment = id => {
  return axios.delete(`${BASE_URL}/comments/${id}`).then(({ data }) => {
    return data;
  });
};

// VOTES help, {type?}

export const makeVote = (updown, id, collection) => {
  return axios
    .patch(`${BASE_URL}${collection}/${id}?vote=${updown}`)
    .then(({ data }) => data[collection]);
};
