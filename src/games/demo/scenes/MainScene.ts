import * as Phaser from 'phaser'
import Redhat from '../model/Redhat'
import redhat from '../assets/images/redhat.png'
import red from '../assets/images/red.png'

export default class MainScene extends Phaser.Scene {
  private myRedhat!: Redhat
  constructor() {
    super({ key: 'MainScene' })
  }

  preload(): void {
    this.load.image('redhat', redhat.src)
    this.load.image('redParticle', red.src)
  }

  create(): void {
    const particles = this.add.particles('redParticle')

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 0.5, end: 0 },
      blendMode: 'ADD',
    })

    this.myRedhat = new Redhat({
      scene: this,
      x: 400,
      y: 300,
      texture: 'redhat',
    })

    emitter.startFollow(this.myRedhat)
  }
}