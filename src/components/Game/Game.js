import React from 'react';

import { range, sample } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import Banner from '../Banner';
import GuessList from '../GuessList';
import Input from '../Input';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {

  /**
   * The result from a single guess. If all correct, you win.
   */
  const [gameStatus, setGameStatus] = React.useState('guessing');

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

    const nextGuessList = guessList;
    nextGuessList[guessNumber] = newGuess;
    setGuessList( nextGuessList );

    const nextGameStatus = guessNumber + 1 === NUM_OF_GUESSES_ALLOWED
      ? ( guessInput === answer ? 'win' : 'lose' )
      : guessInput === answer ? 'win' : 'guessing';
    setGameStatus( nextGameStatus );
    
    if ( guessNumber < NUM_OF_GUESSES_ALLOWED ) {
      setGuessNumber( guessNumber + 1 );
    }
  }

  return (
    <>
      <Banner
        gameStatus={gameStatus}
        guessNumber={guessNumber}
        answer={answer}
      />
      <GuessList
        guessList={guessList}
      />
      <Input
        gameStatus={gameStatus}
        handleNewGuess={handleNewGuess}
      />
    </>
  );
}

export default Game;
