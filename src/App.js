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
        <div className="socials">
          <a href="http://www.twitter.com/ros_bell"><i class="fab fa-twitter-square fa-2x"></i></a>
          <a href="https://www.linkedin.com/in/rosalind-bell-077b34b2/?originalSubdomain=uk"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>

        <Nav topics={this.state.topics} />
        <div>
          <Router>
            {/* Front page articles */}
            <Articles path="/" />
            <Articles path="/topics/:topic" />
            <Article path="/articles/:_id" />
            <NotFound path="/error" />
          </Router>
        </div>

      </div>

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
