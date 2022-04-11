#!/usr/bin/env node
import yargs = require('yargs/yargs');
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command({
    command: 'deal [numPlayers]',
    describe: 'deal out a game for numPlayers number of players',
    builder: (yargs) => {
      return yargs;
    },
    handler: (argv) => {
      console.log(argv.numPlayers);
    }
  })
  .command({
    command: 'play [handIndex]',
    describe: 'play a card from your hand',
    builder: (yargs) => {
      return yargs;
    },
    handler: (argv) => {
      console.log(argv.handIndex);
    }
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse();
