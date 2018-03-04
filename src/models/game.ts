import Card from "./card";
import Deck from "./deck";
import Hand from "./hand";

class Game {
  deck: Deck;
  handA: Hand;
  handB: Hand;
  bountyCards: Card[];

  constructor() {
    this.deck = new Deck();
    const hands = this.deck.deal();
    this.handA = hands[0];
    this.handB = hands[1];
  }

  play(handACard: Card = this.handA.play(), handBCard: Card = this.handB.play()) {
    this.bountyCards.push(...[handACard, handBCard]);

    if (handACard === handBCard) {
      const handAWarCards: Card[] = this.handA.thisIsWar();
      const handBWarCards: Card[] = this.handB.thisIsWar();

      this.bountyCards.push(...[...handAWarCards, ...handBWarCards]);
      this.play(handAWarCards[1], handBWarCards[1]);
    }

    if (handACard > handBCard) {
      this.handA.cards.push(...this.getFaceDownBountyCards());
    }

    if (handACard < handBCard) {
      this.handB.cards.push(...this.getFaceDownBountyCards());
    }
  }

  private getFaceDownBountyCards() {
    this.bountyCards.forEach((card: Card) => {
      card.isRevealed = false;
    });

    return this.bountyCards;
  }
}

export default Game;

/*
If the cards are the same rank, it is War. Each player turns up one card face down and one card face up. The player with the higher cards takes both piles (six cards). If the turned-up cards are again the same rank, each player places another card face down and turns another card face up. The player with the higher card takes all 10 cards, and so on.
*/