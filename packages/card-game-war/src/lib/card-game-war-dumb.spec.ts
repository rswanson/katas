import { cardGameDeckDumb, Deck, Suit, doesMyCardWin } from './card-game-war-dumb';

describe('the basics', () => {
  it('should work', () => {
    expect(cardGameDeckDumb()).toEqual('card-game-war');
  });
  it('should initialize a new 52 card deck without shuffling', () => {
    const deck = new Deck();
    expect(deck.cards.length).toBe(52);
    for (let i = 0; i < 52; i++)  {
      const val = (i % 13) + 2;
      expect(deck.cards[i].value).toEqual(val);
      if (i < 13)
        expect(deck.cards[i].suit).toEqual(Suit.Clubs);
      if ( i > 12  && i < 26)
        expect(deck.cards[i].suit).toEqual(Suit.Diamonds);
      if ( i > 25  && i < 39)
        expect(deck.cards[i].suit).toEqual(Suit.Hearts);
      if ( i > 38)
        expect(deck.cards[i].suit).toEqual(Suit.Spades);

    }
  });
  it('should draw a card', () => {
    const deck: Deck = new Deck();
    const dummyCard = deck.draw();
    expect(dummyCard).toHaveProperty("suit");
    expect(dummyCard).toHaveProperty("value");
  });
  it('should not match an unshuffled deck after shuffling', () => {
    const shuffledDeck: Deck = new Deck();
    shuffledDeck.shuffle();
    const unshuffledDeck: Deck = new Deck(); 
    expect(shuffledDeck.cards).not.toMatchObject(unshuffledDeck.cards)
  });

  it('should be able to tell you if your card wins or not', () => {
    const myCard = { "suit": Suit.Clubs, "value": 4};
    const enemyCard = { "suit": Suit.Clubs, "value": 2}
    expect(doesMyCardWin(myCard,enemyCard)).toBe(true)
  });
  // it('should tell me my card is bigger')
});

