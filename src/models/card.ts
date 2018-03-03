import Rank from "./rank";
import Suit from "./suit";

class Card {
  private revealed: boolean;

  constructor(public suit: Suit, public rank: Rank) {
    this.revealed = false;
  }

  get isRevealed(): boolean {
    return this.revealed;
  }

  set isRevealed(reveal: boolean) {
    if (typeof reveal !== "boolean") {
      throw new TypeError();
    }

    this.revealed = reveal;
  }
}

export default Card;
