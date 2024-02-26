import React from 'react';

import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({ guessList }) {

  return (
    <>
      {
        range(NUM_OF_GUESSES_ALLOWED).map( (index) => {
          
        })
      }
      <ul className="guess-list">
        {guessList.map(
          ({word, id}) => {
            return (
              <li className="guess" key={id} data-key={id}>
                {word}
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}

export default GuessList;
