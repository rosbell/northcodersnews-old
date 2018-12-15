import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import { Router } from "@reach/router";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Article from "./components/Article"
import Vote from "./components/Vote"
import * as api from "./api";

import 'typeface-montserrat';


class App extends Component {
  state = {
    topics: [],
    article: {}
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Nav topics={this.state.topics} />

        <Router>
          {/* Front page articles */}
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <Article path="/articles/:_id" />
          <NotFound path="/error" />
        </Router>
      </div >
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };

  fetchArticle = () => {
    api.getArticleById().then(article => {
      this.setState({
        article
      })
    })
  }

}

export default App;
