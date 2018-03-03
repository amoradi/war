import Rank from "../rank";

describe("Rank", () => {
  it("Should be type object", () => {
    expect(Rank).toBeType("object");
  });

  it("Should contain correct range of ranks", () => {
    expect(Rank.two).toBe(2);
    expect(Rank.three).toBe(3);
    expect(Rank.four).toBe(4);
    expect(Rank.five).toBe(5);
    expect(Rank.six).toBe(6);
    expect(Rank.seven).toBe(7);
    expect(Rank.eight).toBe(8);
    expect(Rank.nine).toBe(9);
    expect(Rank.ten).toBe(10);
    expect(Rank.jack).toBe(11);
    expect(Rank.queen).toBe(12);
    expect(Rank.king).toBe(13);
    expect(Rank.ace).toBe(14);
  });

  it("Should be undefined when rank is out of bounds", () => {
    expect(Rank.one).toBe(undefined);
    expect(Rank.joker).toBe(undefined);
    expect(Rank[0]).toBe(undefined);
    expect(Rank.zero).toBe(undefined);
    expect(Rank[15]).toBe(undefined);
    expect(Rank[52]).toBe(undefined);
  });
});
