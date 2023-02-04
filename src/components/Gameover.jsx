import React from "react";
import { useContext} from "react";
import { Appcontext } from "../App";

export default function Gameover() {
  const { aval, correctword, isGameover } = useContext(Appcontext);
  const playagain = () => {
    window.location.reload(false);
  };
  return (
    <div class="gameover">
      {isGameover.win ? (
        <h1>Voila! You guessed the word correctly!</h1>
      ) : (
        <h2>
          {" "}
          You couldn't guess the word.<br></br> <br></br>
          Correct word: {correctword.toUpperCase()}.
        </h2>
      )}

      {isGameover.win ? (
        <h2>Number of attempts taken: {aval}</h2>
      ) : (
        <h2>Try again.</h2>
      )}

      <button class="reset" onClick={playagain}>
        Play Again
      </button>
    </div>
  );
}
