import Card from "./card";

class Hand {
  defeated: boolean = false;

  constructor(public cards: Card[]) {}

  play(): Card {
    const nextCard = this.cards.shift();

    nextCard.isRevealed = true;
    return nextCard;
  }

  thisIsWar(): Card[] {
    const revealCard = this.cards.shift();

    revealCard.isRevealed = true;
    return [this.cards.shift(), revealCard];
  }
}

export default Hand;
