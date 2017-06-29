import 'pixi';
import 'p2';
import Phaser from 'phaser';

import BootState from './states/Boot';
import PreloaderState from './states/Preloader';
import GameState from './states/Game';

import config from './config';

class Game extends Phaser.Game {
  constructor() {
    super(config.gameWidth, config.gameHeight, Phaser.AUTO, 'content', null);

    this.state.add('Boot', BootState, false);
    this.state.add('Preloader', PreloaderState, false);
    this.state.add('Game', GameState, false);

    this.state.start('Boot');
  }
}

window.game = new Game();
