import { BowlingGame } from "./BowlingGame";


describe('A bowling game', () => {
    
  let game:BowlingGame
  beforeEach(() => {
    game = new BowlingGame()
  });


  it('can roll a ball', () => {
    game.roll(0);
  })


  it('should calculate score with all zero', () => {
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0)
  });

  it('should calculate score with all one', () => {
    rollMany(game, 20, 1);

    expect(game.score()).toBe(20)
  });
  it('can roll a spare ', () => {
    rollSpare(game);
    game.roll(4)
    rollMany(game, 17, 0)
    expect(game.score()).toBe(18)
   
  });

  it('can roll a strike', () => {
    game.roll(10)
    game.roll(1)
    game.roll(1)
    rollMany(game, 16, 0)
    expect(game.score()).toBe(14)
  
  });
  it('can roll a perfect game', () => {
    rollMany(game, 12, 10);

    expect( game.score() ).toBe(300);
  })

});
function rollMany(game: BowlingGame, rolls: number, pins: number) {
  for (let i = 0; i < rolls; i++) {
    game.roll(pins);
  }

}

function rollSpare(game: BowlingGame) {
  game.roll(5);
  game.roll(5);
}
