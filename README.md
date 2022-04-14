# Katas

### card-game-war

**Usage:** _Run all commands from the root directory of the project_

- Setup Locally:
  `npm i `

- Build:
  `nx run card-game-war:build`

- Tests:
  `nx run card-game-war:test`

**TODO**

- ~Create first unit tests~
- ~Create definition for card type~
- ~Create definition of deck type~
- ~implement unshuffled deck~
- ~implement Deck.shuffle()~
- ~implement Deck.draw()~
- ~implement Hand type~
- ~implement card compare logic~
- ~finish implementing Deck.deal()~
- implement kata-cli (using the library yargs)
  - figure out e2e tests for kata-cli
  - implement "play war" function?
    - Need either a semi-persistent data store to keep state in or I need to make the war command interactive for the duration of the game
- ~implement github actions for build and test~
- make README way more detailed for all the little nuances and how stuff works together -> wiki?
