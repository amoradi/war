import Hand from "../hand";

describe("Hand", () => {
  it("Should have a cards property", () => {
    expect(new Hand()).toHaveProperty("cards");
  });
});
