import React, { Component } from 'react';
import * as api from '../api.jsx';

class Vote extends Component {

  state = {
    vote: this.props.votes
  };



  render() {
    const { votes, _id, collection } = this.props;
    const vote = this.state.vote;
    console.warn('votes' + this.props.votes)


    return (
      <div>
        <button id='up' onClick={this.click}>
          Vote up
</button>
        <h1>{vote}</h1>
        <button id='down' onClick={this.click} >
          Vote Down
</button>
      </div>
    )
  }


  click = (e) => {
    this.handleVote(e.target.id, this.props._id, this.props.collection);
  }

  handleVote = (updown, _id, collection) => {
    api.makeVote(updown, _id, collection);
    let curvote = this.state.vote;
    this.setState({
      vote: updown === 'up' ? curvote + 1 : curvote - 1
    })
  }
};


export default Vote;