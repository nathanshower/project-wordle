import React from 'react';

import { range, sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessList from '../GuessList';
import Input from '../Input';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  const [guessNumber, setGuessNumber] = React.useState(0);
  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map( (row) => {
      return ({
        word: '',
        status: 'empty',
        id: crypto.randomUUID(),
      })
    }
  ));

  function handleNewGuess( newGuess ) {
    const nextGuessNumber = guessNumber;

    const nextGuessList = guessList;
    nextGuessList[nextGuessNumber] = newGuess;
    setGuessList( nextGuessList );
    setGuessNumber( nextGuessNumber + 1 );
  }

  return (
    <>
      <GuessList
        guessNumber={guessNumber}
        guessList={guessList}
        answer={answer}
      />
      <Input
        guessNumber={guessNumber}
        handleNewGuess={handleNewGuess}
      />
    </>
  );
}

export default Game;
