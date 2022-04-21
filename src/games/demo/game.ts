import * as Phaser from 'phaser'
import MainScene from './scenes/MainScene'

class Game extends Phaser.Game {
  constructor(){
      super({
        title: 'Parcel-Boilerplate',
        url: 'https://github.com/digitsensitive/phaser3-typescript',
        version: '1.0',
        width: 800,
        height: 600,
        backgroundColor: 0x3a404d,
        type: Phaser.AUTO,
        parent: 'game',
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 },
          },
        },
        scene: [MainScene],
      })
  }
}

export default function start() {
  window.onload = () => {
    new Game()
  }
}
