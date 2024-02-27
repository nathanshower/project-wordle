import React from 'react';

import { range, sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import GuessList from '../GuessList';
import Input from '../Input';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  /**
   * The results from a single guess. If all correct, you win.
   */
  const [result, setResult] = React.useState('');

  /**
   * The current guess.
   */
  const [guessNumber, setGuessNumber] = React.useState(0);

  /**
   * The guesses.
   */
  const [guessList, setGuessList] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map( (row) => {
      return ({
        word: '',
        guess: [],
        status: 'empty',
        id: crypto.randomUUID(),
      })
    }
  ));

  function handleNewGuess( guessInput ) {
    const newGuess = {
      word: guessInput,
      result: checkGuess( guessInput, answer ),
      status: 'guessed',
      id: crypto.randomUUID(),
    };
    const nextGuessNumber = guessNumber;

    const nextGuessList = guessList;
    nextGuessList[nextGuessNumber] = newGuess;
    setGuessList( nextGuessList );
    setGuessNumber( nextGuessNumber + 1 );
  }

  return (
    <>
      <GuessList
        guessList={guessList}
      />
      <Input
        guessNumber={guessNumber}
        handleNewGuess={handleNewGuess}
      />
    </>
  );
}

export default Game;
