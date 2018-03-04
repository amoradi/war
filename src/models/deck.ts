import Card from "./card";
import Hand from "./hand";
import Rank from "./rank";
import Suit from "./suit";

class Deck {
  cards: Card[] = [];

  constructor() {
    Object.keys(Rank).filter((key) => isNaN(Number(key))).forEach((rank: string) => {
      Object.keys(Suit).filter((key) => isNaN(Number(key))).forEach((suit: string) => {
        this.cards.push(new Card(Suit[suit], Rank[rank]));
      });
    });
  }

  deal() {
    const hands = (() => {
      this.shuffle();

      return this.cut();
    })();

    return [new Hand(hands[0]), new Hand(hands[1])];
  }

  shuffle() {
    const cardsClone: Cards[] = this.cards.slice(0);
    const copy: Cards[] = [];
    let n: number = cardsClone.length;
    let i: number;

    while (n) {
      i = Math.floor(Math.random() * cardsClone.length);

      if (i in cardsClone) {
        copy.push(cardsClone[i]);
        delete cardsClone[i];
        n--;
      }
    }

    this.cards = copy;
    return this.cards;
  }

  cut() {
    return [this.cards.slice(0, 26), this.cards.slice(26)];
  }
}

export default Deck;
