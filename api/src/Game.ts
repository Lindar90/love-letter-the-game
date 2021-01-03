import Player from "./Player";

export enum NUMBER_OF_PLAYERS {
  THREE = 3,
  FOUR = 4,
}

export default class Game {
  readonly code: string;

  players: Player[] = [];

  numberOfPlayers: NUMBER_OF_PLAYERS;

  constructor(numberOfPlayers: NUMBER_OF_PLAYERS) {
    this.numberOfPlayers = numberOfPlayers;
    this.code = 
  }

  addPlayer(player: Player) {
    this.players.push(player);
  }
}