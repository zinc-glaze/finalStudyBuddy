import React, { Component } from 'react';
import Sound from 'react-sound';
import shufflesound from './mp3/shuffle02.mp3'
import failsound1 from './mp3/fail01.mp3'
import failsound2 from './mp3/fail02.mp3'
import failsound3 from './mp3/fail03.mp3'
import bellring from './mp3/correct02.mp3'
import completed1 from './mp3/completed01.mp3'
import completed2 from './mp3/completed02.mp3'
import completed3 from './mp3/completed03.mp3'

const failsounds = [failsound1, failsound2, failsound3];
const completedsounds = [completed1, completed2, completed3];

class ShuffleSound extends Component {
  render() {
    return (
      <Sound
      url={shufflesound}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      volume={100}
      />
    );
  }
}

class FailSound extends Component {
  
  getArrayRandomElement = (arr) => {
    if (arr && arr.length) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }

  render() {
    return (
      <Sound
      url={this.getArrayRandomElement(failsounds)}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      volume={75}
      />
    );
  }
}

class BellSound extends Component {
  render() {
    return (
      <Sound
      url={bellring}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      volume={75}
      />
    );
  }
}

class DoneSound extends Component {

  getArrayRandomElement = (arr) => {
    if (arr && arr.length) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }

  render() {
    return (
      <Sound
      url={this.getArrayRandomElement(completedsounds)}
      playStatus={Sound.status.PLAYING}
      autoLoad={true}
      volume={75}
      />
    );
  }
}

export { ShuffleSound, FailSound, BellSound, DoneSound };