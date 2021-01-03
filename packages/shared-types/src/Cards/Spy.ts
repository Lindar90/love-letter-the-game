import ICard from "../ICard";

export default class Spy implements ICard {
  name = 'card.spy.name';

  number = 2;

  onPlay() {
    //
  }
}