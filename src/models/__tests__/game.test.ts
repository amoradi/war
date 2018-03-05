import Game from "../game";

describe("Game", () => {
  it("Should initialize with 2 hands of 26 cards", () => {
    const myGame = new Game();

    expect(myGame.handA.cards.length).toBe(26);
    expect(myGame.handB.cards.length).toBe(26);
  });

  // it("Should grant handA two cards on play when handA's card > handB's card", () => {

  // });

  // it("Should grant handA two cards on play when handB's card > handA's card", () => {

  // });

  // it("Should call play a second time when hands are tied", () => {

  // });

  // it("Should grant next winning hand 6 cards when first hand is tied", () => {

  // });

  // it("Should call resetBountyCards upon non tie hands", () => {

  // });

  // it("Should call isGameOver upon non tie hands", () => {

  // });

  // it("Should call gameOver when either hand is length 0", () => {

  // });
});
