import Card from "../card";
import Deck from "../deck";

describe("Deck", () => {
  it("Should initialize with 52 cards", () => {
    const myDeck = new Deck();

    expect(myDeck.cards.length).toBe(52);
  });

  it("Should initialize with 52 unique cards", () => {
    const myDeck = new Deck();
    const cardMembers = {
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 0,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
    };

    myDeck.cards.forEach((card: Card) => {
      cardMembers[card.rank] += 1;
    });

    expect(cardMembers).toHaveProperty("2", 4);
    expect(cardMembers).toHaveProperty("3", 4);
    expect(cardMembers).toHaveProperty("4", 4);
    expect(cardMembers).toHaveProperty("5", 4);
    expect(cardMembers).toHaveProperty("6", 4);
    expect(cardMembers).toHaveProperty("7", 4);
    expect(cardMembers).toHaveProperty("8", 4);
    expect(cardMembers).toHaveProperty("9", 4);
    expect(cardMembers).toHaveProperty("10", 4);
    expect(cardMembers).toHaveProperty("11", 4);
    expect(cardMembers).toHaveProperty("12", 4);
    expect(cardMembers).toHaveProperty("13", 4);
    expect(cardMembers).toHaveProperty("14", 4);
  });
});
