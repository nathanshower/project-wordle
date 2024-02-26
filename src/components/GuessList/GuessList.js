import React from 'react';

import Guess from '../Guess';

function GuessList({ guessList }) {

  return (
    <ul className="guess-list">
      {
        guessList.map( (data, row) => {
          const thisGuess = data;
          console.log( thisGuess );
          return <Guess guess={thisGuess} key={row}/>
        })
      }
    </ul>
  );
}

export default GuessList;
