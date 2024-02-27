import React from 'react';

import { range } from '../../utils';

function Guess({ guess, guessResult }) {

  return (
    <li className="guess" key={guess.id}>
      {
        range(5).map( (col) => (
          <span
            key={col}
            className={`cell ${guessResult && guessResult[col].status}`}
          >
            {guess.word.substring(col, col + 1)}
          </span>
        ))
      }
    </li>
  );
}

export default Guess;
