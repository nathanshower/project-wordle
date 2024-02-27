import React from 'react';

import { range } from '../../utils';

function Guess({ guess }) {

  console.log( guess );

  return (
    <li className="guess" data-key={guess.id} key={guess.id}>
      {
        range(5).map( (col) => (
          <span
            key={col}
            data-key={col}
            className={`cell ${guess.result ? guess.result[col].status : ''}`}
          >
            {guess.result ? guess.result[col].letter : ''}
          </span>
        ))
      }
    </li>
  );
}

export default Guess;
