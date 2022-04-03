import { Random, MersenneTwister19937 } from "random-js";
const random = new Random(MersenneTwister19937.autoSeed());


enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades,
}
type CardType = {
  // name: string;
  suit: Suit;
  value: number;
}

type DeckType = {
  cards: Array<CardType>;
  currentPosition: number
}
export class Card implements CardType {
  suit: Suit;
  value: number;
  constructor(suit: Suit, value: number) {
    // this.name = name;
    this.suit = suit;
    this.value = value;
  }
}
export class Deck implements DeckType {
  cards: Array<Card> = [];
  currentPosition = 0;
  constructor() {
    let count = 0;
    for (let suit = 0; suit < 4; suit++) {
      for (let value = 2; value <= 14; value++) {
        if (suit == 0)
          this.cards[count] = new Card(Suit["Clubs"],value);
        if (suit == 1)
          this.cards[count] = new Card(Suit["Diamonds"],value);
        if (suit == 2)
          this.cards[count] = new Card(Suit["Hearts"],value);
        if (suit == 3)
          this.cards[count] = new Card(Suit["Spades"],value);
        count++
      }
    }
  }
};

// export function draw(deck: Deck, position: number): Card {
//   return deck[position];
// }

export function doesMyCardWin(myCard: Card, notMyCard: Card): boolean {
  return myCard["value"] > notMyCard["value"];
}

export function cardGameWarDumb(): string {
  return 'card-game-war';
}