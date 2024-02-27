import React from 'react';

function Banner({result, answer, guessNumber}) {
  
  const banner = {
    status: 'playing',
    message: '',
  };
  
  if ( 'win' === result ) {
    banner.message = <p><strong>Congratulations!</strong> You got it in {guessNumber} guess{guessNumber > 1 && 'es'}!</p>;
    banner.status = 'happy';
  } else if ( 'lose' === result ) {
    banner.message = <p>The correct answer was <strong>{answer}</strong>.</p>;
    banner.status = 'sad';
  }

  return (
    <div className={`banner ${banner.status !== 'playing' && banner.status}`}>
      {banner.message}
    </div>
  );
}

export default Banner;
