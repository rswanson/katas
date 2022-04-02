import { cardGameWarDumb } from './card-game-war-dumb';

describe('bigger card wins', () => {
  it('should work', () => {
    expect(cardGameWarDumb()).toEqual('card-game-war');
  });
});
