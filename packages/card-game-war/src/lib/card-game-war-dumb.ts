export enum Suit {
  Clubs,
  Diamonds,
  Hearts,
  Spades,
}
type Card = {
  name?: string;
  suit: Suit,
  value: number,
}

type Hand = {
  cards: Array<Card>
}

interface BasicDeck {
  cards: Array<Card>;
  draw: () => Card;
  shuffle: () => void;
}

export class Deck implements BasicDeck {
  cards: Array<Card> = [];
  constructor() {
    let count = 0;
    for (let suit = 0; suit < 4; suit++) {
      for (let value = 2; value <= 14; value++) {
        if (suit == 0)
          this.cards[count] = { "suit": Suit.Clubs, "value": value};
        if (suit == 1)
          this.cards[count] = { "suit": Suit.Diamonds, "value": value};
        if (suit == 2)
          this.cards[count] = { "suit": Suit.Hearts, "value": value};
        if (suit == 3)
          this.cards[count] = { "suit": Suit.Spades, "value": value};
        count++
      }
    }
  };

  draw(): Card {
    const drawCard = this.cards[this.cards.length-1];
    this.cards.pop()
    return drawCard;
  }

  shuffle(): void {
    let currentIndex = this.cards.length,  randomIndex;

      // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [this.cards[currentIndex], this.cards[randomIndex]] = [
        this.cards[randomIndex], this.cards[currentIndex]];
    }
  };
};

export function doesMyCardWin(myCard: Card, notMyCard: Card): boolean {
  return myCard.value > notMyCard.value;
}

export function cardGameDeckDumb(): string {
  return 'card-game-war';
}