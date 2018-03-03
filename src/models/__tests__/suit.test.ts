import Suit from "../suit";

describe("Suit", () => {
  it("Should be type object", () => {
    expect(Suit).toBeType("object");
  });

  it("Should contain correct range of suits", () => {
    expect(Suit.clubs).toBe(0);
    expect(Suit.diamonds).toBe(1);
    expect(Suit.hearts).toBe(2);
    expect(Suit.spades).toBe(3);
  });

  it("Should be undefined when suit is out of bounds", () => {
    expect(Suit.cubs).toBe(undefined);
    expect(Suit.clubbs).toBe(undefined);
    expect(Suit.heart).toBe(undefined);
    expect(Suit.spade).toBe(undefined);
    expect(Suit.diamond).toBe(undefined);
  });
});
