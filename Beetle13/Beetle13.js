/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle13 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle13/costumes/beetle.svg", {
        x: 42.21083315419398,
        y: 37.47324475929122
      })
    ];

    this.sounds = [new Sound("pop", "./Beetle13/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Start normal" },
        this.whenIReceiveStartNormal
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveStartNormal() {
    this.visible = true;
    this.size = 20;
    this.goto(-130, 100);
    this.direction = 90;
    while (true) {
      this.move(10);
      if (this.touching(this.sprites["Maze"].andClones())) {
        if (this.random(1, 2) == 1) {
          this.direction += 90;
        } else {
          this.direction -= 90;
        }
      }
      if (this.touching(this.sprites["Player3inGame2"].andClones())) {
        this.broadcast("Player 3 dead");
        this.stage.vars.playersAlive += -1;
      }
      if (this.touching(this.sprites["Player2InGame"].andClones())) {
        this.broadcast("Player 2 dead");
        this.stage.vars.playersAlive += -1;
      }
      if (this.touching(this.sprites["Player1InGame"].andClones())) {
        this.broadcast("PLayer 1 dead");
        this.stage.vars.playersAlive += -1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
