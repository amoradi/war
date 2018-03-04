import Card from "./card";

class Hand {
  constructor(public cards: Card[]) {}

  play(): Card {
    const nextCard = this.cards.shift();

    if (nextCard !== undefined) { nextCard.isRevealed = true; }
    return nextCard;
  }

  thisIsWar(): Card[] {
    const killCard = this.cards.shift();
    const revealCard = this.cards.shift();

    if (revealCard !== undefined) { revealCard.isRevealed = true; }
    return [killCard, revealCard];
  }
}

export default Hand;
