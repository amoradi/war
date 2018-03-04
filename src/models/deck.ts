import Card from "./card";
import Rank from "./rank";
import Suit from "./suit";

class Deck {
  private theCards: Card[] = [];

  constructor() {
    Object.keys(Rank).filter((key) => isNaN(Number(key))).forEach((rank) => {
      Object.keys(Suit).filter((key) => isNaN(Number(key))).forEach( (suit) => {
        this.theCards.push(new Card(Suit[suit], Rank[rank]));
      });
    });
  }

  deal() {
    // const hands = this.cut();
    // return 2 Hands of 26
    // return [new Hand(hands[0]), new Hand(hands[1])];
  }

  shuffle() {
    // randomize items in the deck
  }

  get cards(): Card[] {
    return this.theCards;
  }

  private cut() {
    // return an array of len 2
    //
  }
}

export default Deck;
