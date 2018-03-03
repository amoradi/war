import Rank from "./rank";
import Suit from "./suit";

class Card {
  private revealed: boolean;

  constructor(private suit: Suit, private rank: Rank) {
    this.revealed = false;
  }

  // override to use comparison operators
  valueOf() {
    return this.rank;
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
