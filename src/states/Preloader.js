import Phaser from 'phaser';
import centreGameObjects from '../utils';

import MushroomImg from '../assets/images/mushroom2.png';

export default class extends Phaser.State {
  // init() {}

  preload() {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg');
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar');
    centreGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    this.load.image('mushroom', MushroomImg);
  }

  create() {
    this.state.start('Game');
  }
}
