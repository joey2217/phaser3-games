export class CloneCrystal extends Phaser.GameObjects.Image {
    constructor(aParams) {
        super(aParams.scene, aParams.x, aParams.y, aParams.texture);
        this.increaseAlpha = false;
        this.initImage();
        this.scene.add.existing(this);
    }
    initVariables() {
        this.increaseAlpha = false;
    }
    initImage() {
        this.setOrigin(0.5);
        this.setScale(2);
        this.setAlpha(1);
    }
    update() {
        this.updateAlphaOfCloneCrystal();
        this.checkIfAlphaOutOfRange();
    }
    updateAlphaOfCloneCrystal() {
        if (this.increaseAlpha) {
            this.alpha += 0.01;
        }
        else {
            this.alpha -= 0.01;
        }
    }
    checkIfAlphaOutOfRange() {
        if (this.alpha === 0) {
            this.increaseAlpha = true;
            this.alpha = 0;
        }
        else if (this.alpha === 1) {
            this.increaseAlpha = false;
            this.alpha = 1;
        }
    }
}
