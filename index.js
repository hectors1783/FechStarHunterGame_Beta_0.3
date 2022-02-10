import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Lobby from "./Lobby/Lobby.js";
import Player1InLobby from "./Player1InLobby/Player1InLobby.js";
import Player2InLobby from "./Player2InLobby/Player2InLobby.js";
import Player3InLobby2 from "./Player3InLobby2/Player3InLobby2.js";
import News from "./News/News.js";
import ChangeGameModeButton from "./ChangeGameModeButton/ChangeGameModeButton.js";
import Maze from "./Maze/Maze.js";
import Player1InGame from "./Player1InGame/Player1InGame.js";
import Player2InGame from "./Player2InGame/Player2InGame.js";
import Player3inGame from "./Player3inGame/Player3inGame.js";
import Star from "./Star/Star.js";
import Beetle from "./Beetle/Beetle.js";
import Beetle2 from "./Beetle2/Beetle2.js";
import YouLose from "./YouLose/YouLose.js";
import Ghost from "./Ghost/Ghost.js";
import MazeTag from "./MazeTag/MazeTag.js";
import Player1TagIngame from "./Player1TagIngame/Player1TagIngame.js";
import Player2InGameTag from "./Player2InGameTag/Player2InGameTag.js";
import Player3inGame2 from "./Player3inGame2/Player3inGame2.js";
import P1Race from "./P1Race/P1Race.js";
import P2Race from "./P2Race/P2Race.js";
import RaceWinScreen from "./RaceWinScreen/RaceWinScreen.js";
import PlayersOne from "./PlayersOne/PlayersOne.js";
import PlayersTwo from "./PlayersTwo/PlayersTwo.js";
import PlayersThree from "./PlayersThree/PlayersThree.js";
import Score from "./Score/Score.js";
import Win from "./Win/Win.js";
import PlayerWhoIsItTag from "./PlayerWhoIsItTag/PlayerWhoIsItTag.js";
import Beetle3 from "./Beetle3/Beetle3.js";
import Beetle4 from "./Beetle4/Beetle4.js";
import Beetle5 from "./Beetle5/Beetle5.js";
import Beetle6 from "./Beetle6/Beetle6.js";
import Beetle7 from "./Beetle7/Beetle7.js";
import Beetle8 from "./Beetle8/Beetle8.js";
import Beetle9 from "./Beetle9/Beetle9.js";
import Beetle10 from "./Beetle10/Beetle10.js";
import ReleseShower from "./ReleseShower/ReleseShower.js";
import Beetle11 from "./Beetle11/Beetle11.js";
import Beetle12 from "./Beetle12/Beetle12.js";
import Beetle13 from "./Beetle13/Beetle13.js";
import TiredMeter from "./TiredMeter/TiredMeter.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Beetle14 from "./Beetle14/Beetle14.js";
import Beetle15 from "./Beetle15/Beetle15.js";
import Beetle16 from "./Beetle16/Beetle16.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Lobby: new Lobby({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1InLobby: new Player1InLobby({
    x: 69,
    y: -90,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player2InLobby: new Player2InLobby({
    x: -16,
    y: -62,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player3InLobby2: new Player3InLobby2({
    x: 191,
    y: -76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  News: new News({
    x: -166,
    y: -65,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  ChangeGameModeButton: new ChangeGameModeButton({
    x: -18,
    y: 118,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Maze: new Maze({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1InGame: new Player1InGame({
    x: -65,
    y: 3.999999999999992,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player2InGame: new Player2InGame({
    x: -30,
    y: 49.000000000000014,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player3inGame: new Player3inGame({
    x: -55,
    y: 16,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Star: new Star({
    x: 6,
    y: 83,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Beetle: new Beetle({
    x: 43,
    y: 64,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle2: new Beetle2({
    x: -216,
    y: 152,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  YouLose: new YouLose({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Ghost: new Ghost({
    x: -174.8128459296498,
    y: -54.36691634501095,
    direction: 32.11350530629943,
    costumeNumber: 1,
    size: 36,
    visible: false
  }),
  MazeTag: new MazeTag({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Player1TagIngame: new Player1TagIngame({
    x: -25,
    y: -25,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player2InGameTag: new Player2InGameTag({
    x: -45,
    y: -81,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Player3inGame2: new Player3inGame2({
    x: 145,
    y: 66,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  P1Race: new P1Race({
    x: 276,
    y: 103,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  P2Race: new P2Race({
    x: 276,
    y: -85,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  RaceWinScreen: new RaceWinScreen({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersOne: new PlayersOne({
    x: 2,
    y: 24,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersTwo: new PlayersTwo({
    x: 128,
    y: 21,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayersThree: new PlayersThree({
    x: 70,
    y: -28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Score: new Score({
    x: -213,
    y: 143,
    direction: 90,
    costumeNumber: 7,
    size: 25,
    visible: false
  }),
  Win: new Win({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  PlayerWhoIsItTag: new PlayerWhoIsItTag({
    x: -182,
    y: 137,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  Beetle3: new Beetle3({
    x: -221,
    y: -72,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle4: new Beetle4({
    x: -218,
    y: 81,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle5: new Beetle5({
    x: 176,
    y: -154,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle6: new Beetle6({
    x: 50,
    y: 155,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle7: new Beetle7({
    x: -65,
    y: 15,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle8: new Beetle8({
    x: -85,
    y: -160,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle9: new Beetle9({
    x: -217,
    y: 64,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle10: new Beetle10({
    x: 229,
    y: 139,
    direction: 0,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  ReleseShower: new ReleseShower({
    x: -82,
    y: 116,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Beetle11: new Beetle11({
    x: 66,
    y: 156,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle12: new Beetle12({
    x: -9.999999999999993,
    y: -50,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle13: new Beetle13({
    x: -40,
    y: -50,
    direction: 90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  TiredMeter: new TiredMeter({
    x: 184,
    y: 149,
    direction: 90,
    costumeNumber: 9,
    size: 50,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: 31,
    y: 11,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Beetle14: new Beetle14({
    x: -223,
    y: -26,
    direction: 180,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle15: new Beetle15({
    x: -211,
    y: 148,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  }),
  Beetle16: new Beetle16({
    x: -240,
    y: 6,
    direction: -90,
    costumeNumber: 1,
    size: 20,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
