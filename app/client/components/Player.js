import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

class Player extends Component {
  componentDidMount() {
    const socket = io();

    const initPlayerInterval = setInterval(() => {
      const { YT } = window;

      if (YT && YT.Player) {
        clearInterval(initPlayerInterval);

        this.initPlayer();
      }
    }, 0);
  }

  initPlayer() {
    const { YT } = window;

    this.player = new YT.Player('player-container', {
      videoId: 'hzdIoghbFzg',
      playerVars: {
        modestbranding: 1,
        rel: 0,
        iv_load_policy: 3
      },
      events: {
        onReady(event) {
          console.log(event);
        },
        onStateChange(event) {
          console.log(event);
        }
      }
    });
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <div>{user.name}</div>

        <div id="player-container"></div>
      </div>
    )
  }
}

export default connect(({ user }) => ({
  user
}))(Player);
