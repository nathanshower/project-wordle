import React from 'react';

import Guess from '../Guess';
import { checkGuess } from '../../game-helpers';

function GuessList({ guessList, answer }) {

  return (
    <ul className="guess-list">
      {
        guessList.map( (data, row) => {
          const thisGuess = data;
          const guessResult = checkGuess( thisGuess.word, answer );
          console.log( thisGuess, answer, guessResult );
          return (
            <Guess
              guess={thisGuess}
              guessResult={guessResult}
              key={row}
            />
          )
        })
      }
    </ul>
  );
}

export default GuessList;
