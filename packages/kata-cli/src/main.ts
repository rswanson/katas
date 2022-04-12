#!/usr/bin/env node
import yargs = require('yargs/yargs');
import { hideBin } from 'yargs/helpers';
import { Deck } from '@katas/card-game-war';

yargs(hideBin(process.argv))
  .command({
    command: 'deal [numPlayers: number]',
    describe: 'deal out a game for numPlayers number of players',
    builder: (yargs) => {
      return yargs;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    handler: (argv) => {
      const deck = new Deck();
      deck.shuffle();
      const hands = deck.deal(1);
      let suitName: string;
      switch (hands[0].cards[0].suit) {
        case 0:
          suitName = 'Clubs';
          break;
        case 1:
          suitName = 'Diamonds';
          break;
        case 2:
          suitName = 'Hearts';
          break;
        case 3:
          suitName = 'Spades';
          break;
      }

      console.log(hands[0].cards[0].value + ' of ' + suitName);
    },
  })
  .command({
    command: 'play [handIndex]',
    describe: 'play a card from your hand',
    builder: (yargs) => {
      return yargs;
    },
    handler: (argv) => {
      console.log(argv.handIndex);
    },
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse();
