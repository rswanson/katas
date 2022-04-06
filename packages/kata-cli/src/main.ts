#!/usr/bin/env node
import yargs = require('yargs/yargs');
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
  .command(
    'deal [numPlayers]',
    'deal out a game for numPlayers number of players',
    (yargs) => {
      return yargs;
    },
    (argv) => {
      console.log('done');
    }
  )
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging',
  })
  .parse();
