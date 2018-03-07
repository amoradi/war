import Card from "./card";
import Deck from "./deck";
import Hand from "./hand";

export class Game {
  handA: Hand;
  handB: Hand;
  bountyCards: Card[];
  winner: Hand | Hand[];

  constructor() {
    const hands = new Deck().deal();
    this.handA = hands[0];
    this.handB = hands[1];
  }

  gameOver(): void {
    const handALen = this.handA.cards.length;
    const handBLen = this.handB.cards.length;

    if (handALen > handBLen) {
      this.winner = this.handA;
    }

    if (handALen < handBLen) {
      this.winner = this.handB;
    }

    if (handALen === handBLen) {
      this.winner = [this.handA, this.handB];
    }
  }

  play(handACard: Card = this.handA.play(), handBCard: Card = this.handB.play()): void {
    if (handACard === undefined || handBCard === undefined ) {
      this.gameOver();
    }

    this.bountyCards.push(...[handACard, handBCard]);

    if (handACard == handBCard) {
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

    this.resetBountyCards();
    this.isGameOver();
  }

  private getFaceDownBountyCards(): Card[] {
    this.bountyCards.forEach((card: Card) => {
      card.isRevealed = false;
    });

    return this.bountyCards;
  }

  private resetBountyCards(): void {
    this.bountyCards = [];
  }

  private isGameOver(): void {
    if (this.handA.cards.length === 0 || this.handB.cards.length === 0) {
      this.gameOver();
    }
  }
}
