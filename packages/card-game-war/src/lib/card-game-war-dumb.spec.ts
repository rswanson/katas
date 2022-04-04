import { cardGameWarDumb, War, Suit, doesMyCardWin } from './card-game-war-dumb';

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
  it('should draw a card', () => {
    const deck: War = new War();
    const dummyCard = deck.draw();
    expect(dummyCard).toHaveProperty("suit");
    expect(dummyCard).toHaveProperty("value");
  });
  it('should not match an unshuffled deck after shuffling', () => {
    const shuffledDeck: War = new War();
    shuffledDeck.shuffle();
    const unshuffledDeck: War = new War(); 
    expect(shuffledDeck.cards).not.toMatchObject(unshuffledDeck.cards)
  });

  it('should be able to tell you if your card wins or not', () => {
    const myCard = { "suit": Suit.Clubs, "value": 4};
    const enemyCard = { "suit": Suit.Clubs, "value": 2}
    expect(doesMyCardWin(myCard,enemyCard)).toBe(true)
  });
  // it('should tell me my card is bigger')
});

