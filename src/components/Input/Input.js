import React from 'react';

function Input({ handleNewGuess }) {
  const [input, setInput] = React.useState('');

  function handleGuess(event) {
    event.preventDefault();
    handleNewGuess(input);
    setInput('');
    document.getElementById('guess-input').focus();
  }

  return (
    <form key="guessForm" className="guess-input-wrapper" onSubmit={handleGuess}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input type="text"
        required={true}
        id="guess-input"
        name="guess"
        value={input}
        pattern="\w{5}"
        title="A guess is exactly 5 letters long."
        onChange={
          (event) => {
            if (event.target.value.length > 5 ) {
              return;
            }
            setInput(event.target.value.toUpperCase())
          }
        }
      />
    </form>
  );
}

export default Input;
