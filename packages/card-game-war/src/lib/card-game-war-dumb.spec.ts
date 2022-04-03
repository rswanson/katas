import { assert, Console } from 'console';
import exp = require('constants');
import { cardGameWarDumb, Deck, Card, Suit, doesMyCardWin } from './card-game-war-dumb';

describe('the basics', () => {
  it('should work', () => {
    expect(cardGameWarDumb()).toEqual('card-game-war');
  });
  // it('should give a number between 2 and 14 (inclusive)', ()=> {
  //   const drawResult = draw()
  //   expect(drawResult >= 2)
  //   expect(drawResult <= 14)
  // });
  it('should initialize a new 52 card deck without shuffling', () => {
    const deck = new Deck();
    // expect(deck.cards.length).toBe(52);
    for (let i = 0; i < 52; i++)  {
      const val: number = (i % 13) + 2;
      expect(deck.cards[i].value).toEqual(val);
    }
  });
  it('should be able to tell you if your card wins or not', () => {
    const myCard = new Card(Suit["Clubs"],4)
    const enemyCard = new Card(Suit["Spades"],2)
    expect(doesMyCardWin(myCard,enemyCard)).toBe(true)
  });
  // it('should tell me my card is bigger')
});

