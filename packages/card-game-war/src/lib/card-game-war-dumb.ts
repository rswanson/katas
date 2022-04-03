export const enum Suit {
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
    this.suit = suit;
    this.value = value;
  }
}
export class Deck implements DeckType {
  cards: Array<Card> = [];
  currentPosition = 0;
  constructor() {
    // Uses % 13 + 2 for the value so that Ace is high
    for (let i = 0; i < 52; i++) {
      if (i < 13)
        this.cards[i] = new Card(Suit.Clubs,(i%13)+2);
      if ( i > 12  && i < 26)
        this.cards[i] = new Card(Suit.Diamonds,(i%13)+2);
      if ( i > 25  && i < 39)
        this.cards[i] = new Card(Suit.Hearts,(i%13)+2);
      if ( i > 38)
        this.cards[i] = new Card(Suit.Spades,(i%13)+2);
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