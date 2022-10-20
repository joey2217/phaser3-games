export class OriginalCrystal extends Phaser.GameObjects.Image {
    constructor(aParams) {
        super(aParams.scene, aParams.x, aParams.y, aParams.texture);
        if (aParams.alpha != null) {
            this.initVariables(aParams.alpha);
        }
        this.initImage();
        this.scene.add.existing(this);
    }
    initVariables(alpha) {
        this.randomAlpha = alpha;
    }
    initImage() {
        this.setOrigin(0.5);
        this.setScale(2);
        this.setAlpha(this.randomAlpha);
    }
}
