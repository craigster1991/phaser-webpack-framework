import Phaser from 'phaser';

import loaderBg from '../assets/images/loader-bg.png';
import loaderBar from '../assets/images/loader-bar.png';

export default class extends Phaser.State {
  init() {
    this.stage.backgroundColor = '#EDEEC9';
  }

  preload() {
    this.load.image('loaderBg', loaderBg);
    this.load.image('loaderBar', loaderBar);
  }

  render() {
    this.state.start('Preloader');
  }
}
