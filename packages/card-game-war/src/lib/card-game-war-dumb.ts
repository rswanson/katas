import { Random, MersenneTwister19937 } from "random-js";
const random = new Random(MersenneTwister19937.autoSeed());


type Card = {
  name: string;
  value: number;
};

export function draw(): number {
  return random.integer(2, 14);
}

export function cardGameWarDumb(): string {
  console.log( draw())
  return 'card-game-war';
}