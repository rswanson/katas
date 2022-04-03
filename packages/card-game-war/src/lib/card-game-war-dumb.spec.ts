import exp = require('constants');
import { cardGameWarDumb, Deck, Card } from './card-game-war-dumb';

describe('the basics', () => {
  it('should work', () => {
    expect(cardGameWarDumb()).toEqual('card-game-war');
  });
  // it('should give a number between 2 and 14 (inclusive)', ()=> {
  //   const drawResult = draw()
  //   expect(drawResult >= 2)
  //   expect(drawResult <= 14)
  // });
  it('should have a deck that actually has cards in it', () => {
    const deck = new Deck();  
    expect(deck.cards[0].value == 2)
  });
  // it('should tell me my card is bigger')
});

