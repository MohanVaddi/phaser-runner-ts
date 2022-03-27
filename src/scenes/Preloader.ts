import * as Phaser from 'phaser';
import TextureKeys from './../consts/Texturekeys';
import SceneKeys from '../consts/SceneKeys';
import AnimationKeys from '../consts/AnimationKeys';

import backgroundImg from '../../house/bg_repeat_340x640.png';
import mouseHoleImg from '../../house/object_mousehole.png';
import window1Img from '../../house/object_window1.png';
import window2Img from '../../house/object_window2.png';
import bookCaseImg1 from '../../house/object_bookcase1.png';
import bookCaseImg2 from '../../house/object_bookcase2.png';
import laserEndImg from '../../house/object_laser_end.png';
import laserImg from '../../house/object_laser.png';
import coinImg from '../../house/object_coin.png';
import rocketMouseImg from '../../characters/rocket-mouse.png';

import rocketMouseJson from '../../characters/rocket-mouse.json';

// This is also true of loaded assets like images and atlases.
// Once they are loaded, they can be accessed by any Scene.

export default class Preloader extends Phaser.Scene {
    constructor() {
        super(SceneKeys.Preloader);
    }

    preload() {
        // * load background
        this.load.image(TextureKeys.Background, backgroundImg);

        // * load mouseHole
        this.load.image(TextureKeys.MouseHole, mouseHoleImg);

        // * load windows
        this.load.image(TextureKeys.Window1, window1Img);
        this.load.image(TextureKeys.Window2, window2Img);

        // * load bookcases
        this.load.image(TextureKeys.Bookcase1, bookCaseImg1);
        this.load.image(TextureKeys.Bookcase2, bookCaseImg2);

        // * load lasers
        this.load.image(TextureKeys.LaserEnd, laserEndImg);
        this.load.image(TextureKeys.LaserMiddle, laserImg);

        // * load coin image
        this.load.image(TextureKeys.Coin, coinImg);

        //* sprite sheets are loaded as atlas
        this.load.atlas(
            TextureKeys.RocketMouse,
            rocketMouseImg,
            rocketMouseJson
        );
    }
    create() {
        // * create mouse run animation
        this.anims.create({
            key: AnimationKeys.RocketMouseRun,
            frames: this.anims.generateFrameNames(TextureKeys.RocketMouse, {
                start: 1,
                end: 4,
                prefix: 'rocketmouse_run',
                zeroPad: 2,
                suffix: '.png',
            }),
            frameRate: 10,
            repeat: -1,
        });

        // * create fall animation
        this.anims.create({
            key: AnimationKeys.RocketMouseFall,
            frames: [
                {
                    key: TextureKeys.RocketMouse,
                    frame: 'rocketmouse_fall01.png',
                },
            ],
        });

        // * create fly animation
        this.anims.create({
            key: AnimationKeys.RocketMouseFly,
            frames: [
                {
                    key: TextureKeys.RocketMouse,
                    frame: 'rocketmouse_fly01.png',
                },
            ],
        });

        // * create flames animation
        this.anims.create({
            key: AnimationKeys.RocketFlamesOn,
            frames: this.anims.generateFrameNames(TextureKeys.RocketMouse, {
                start: 1,
                end: 2,
                prefix: 'flame',
                suffix: '.png',
            }),
            frameRate: 10,
            repeat: -1,
        });
        this.scene.start(SceneKeys.Game);

        // * create rocket-mouse dead animation
        this.anims.create({
            key: AnimationKeys.RocketMouseDead,
            frames: this.anims.generateFrameNames(TextureKeys.RocketMouse, {
                start: 1,
                end: 2,
                prefix: 'rocketmouse_dead',
                zeroPad: 2,
                suffix: '.png',
            }),
            frameRate: 10,
            repeat: -1,
        });

        // * starting game scene
        this.scene.start(SceneKeys.Game);
    }
}
