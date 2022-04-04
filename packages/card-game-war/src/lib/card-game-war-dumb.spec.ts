import exp = require('constants');
import { cardGameWarDumb, War, Card, Suit, doesMyCardWin } from './card-game-war-dumb';

describe('the basics', () => {
  it('should work', () => {
    expect(cardGameWarDumb()).toEqual('card-game-war');
  });
  it('should initialize a new 52 card deck without shuffling', () => {
    const deck = new War();
    expect(deck.cards.length).toBe(52);
    for (let i = 0; i < 52; i++)  {
      const val: number = (i % 13) + 2;
      expect(deck.cards[i].value).toEqual(val);
    }
  });
  it('should first draw an ace of spades in an unshuffled deck', () => {
    const deck: War = new War();
    const firstCard: Card = deck.draw();
    expect(firstCard.value).toEqual(14)
    expect(firstCard.suit).toEqual(Suit.Spades)
    const secondCard: Card = deck.draw();
    expect(secondCard.value).toEqual(13)
    expect(secondCard.suit).toEqual(Suit.Spades)
  });
  it('should be able to tell you if your card wins or not', () => {
    const myCard = { "suit": Suit.Clubs, "value": 4};
    const enemyCard = { "suit": Suit.Clubs, "value": 2}
    expect(doesMyCardWin(myCard,enemyCard)).toBe(true)
  });
  // it('should tell me my card is bigger')
});

