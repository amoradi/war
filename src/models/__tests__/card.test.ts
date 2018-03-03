import Card from '../card';
import Rank from '../rank';
import Suit from '../suit';

var myCard: Card;

describe("Card", () => {
  beforeEach(() => {
    myCard = new Card(Suit.clubs, Rank.ace);
  });
  it("Should initialize as a Card", () => {
    expect(myCard).toBeInstanceOf(Card);
  });

  it("Should init with a suit of type number", () => {
    expect(myCard.suit).toBeType("number");
    expect(myCard.suit).toBe(0);
  });

  it("Should init with a rank of type number", () => {
    expect(myCard.rank).toBeType("number");
    expect(myCard.rank).toBe(14);
  });

  it("Should not be revealed by default", () => {
    expect(myCard.isRevealed).toBe(false);
  });

  it("Should get / set boolean values on isRevealed", () => {
    myCard.isRevealed = true;
    expect(myCard.isRevealed).toBe(true);

    myCard.isRevealed = false;
    expect(myCard.isRevealed).toBe(false);
  });

  it("Should throw a type error when getting / setting non-Booleans for isRevealed", () => {
    expect(() => { myCard.isRevealed = "friends" }).toThrow(TypeError);
  });
});
