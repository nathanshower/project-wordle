import React from 'react';

function Banner({result, answer, numGuesses}) {

  
  const bannerText = 'win' === result
    ? <p><strong>Congratulations!</strong> You got it in {numGuesses} guesses!</p>
    : <p>Sorry, the correct answer was <strong>{answer}</strong>.</p>;

  return (
    <div className="banner">
      {bannerText}
    </div>
  );
}

export default Banner;
