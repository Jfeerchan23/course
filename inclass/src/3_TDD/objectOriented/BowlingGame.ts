export class BowlingGame {
  private pins: number[];

  private throws: number[];

  constructor() {
    this.throws = [];
  }

 public roll(pins: number): void {
    this.throws.push(pins);
    
  }

 public score(): number {

    let sum = 0;
    let firstRoll = 0;

    for (let i = 0; i < 10; i++) {
      if (this.isSpare(firstRoll)) {
        sum += 10 + this.throws[firstRoll + 2];
        firstRoll += 2;
      } else if (this.isStrike(firstRoll)) {
        sum += 10 + this.throws[firstRoll + 1] + this.throws[firstRoll + 2]
        firstRoll++
      } else {
        sum = sum + this.throws[firstRoll] + this.throws[firstRoll + 1];
        firstRoll = firstRoll + 2;
      }

    }
    return sum;
  }

  private isStrike(index: number) : boolean {
    return this.throws[index] == 10;
  }

  private isSpare(index: number):boolean {
    return (this.throws[index]
      + this.throws[index + 1]) == 10;
  }


}