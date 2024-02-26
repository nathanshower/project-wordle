import React from 'react';

import { range } from '../../utils';

function Guess( {guess} ) {

  return (
    <li className="guess" key={guess.id}>
      {
        range(5).map( (col) => (
          <span className="cell" key={col}>{guess.word.substring(col, col + 1)}</span>
        ))
      }
    </li>
  );
}

export default Guess;
