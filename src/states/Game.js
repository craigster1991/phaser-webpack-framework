import Phaser from 'phaser';
import Mushroom from '../sprites/Mushroom';

export default class extends Phaser.State {
  // init() {}
  // preload() {}

  create() {
    const bannerText = 'Phaser + ES6 + Webpack!';
    const banner = this.add.text(this.world.centerX, this.game.height - 80, bannerText);
    banner.padding.set(10, 16);
    banner.fontSize = 40;
    banner.fill = '#19BFA3';
    banner.smoothed = false;
    banner.anchor.setTo(0.5);

    this.mushroom = new Mushroom({
      game: this,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'mushroom',
    });

    this.game.add.existing(this.mushroom);
  }
}
