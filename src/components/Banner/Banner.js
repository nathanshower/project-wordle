import React from 'react';

function Banner({gameStatus, guessNumber, answer }) {
  
  const banner = {
    status: 'guessing',
    message: '',
  };
  
  if ( 'win' === gameStatus ) {
    banner.status = 'happy';
    banner.message = <p><strong>Congratulations!</strong> You got it in {guessNumber} guess{guessNumber > 1 && 'es'}!</p>;
  } else if ( 'lose' === gameStatus ) {
    banner.status = 'sad';
    banner.message = <p>The correct answer was <strong>{answer}</strong>.</p>;
  }

  return (
    <>
      {
        banner.status !== 'guessing' && 
        <div
          key="result-banner"
          className={`banner ${banner.status !== 'guessing' && banner.status}`}
        >
          {banner.message}
          <button className="btn btn-restart">
            Restart
          </button>
        </div>
      }
    </>
  );
}

export default Banner;
