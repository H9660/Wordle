import React from "react";
import { useContext, Button} from "react";
import { Appcontext } from "../App";

export default function Gameover() {
  const { gameover, aval } = useContext(Appcontext);
  const playagain =() =>{
    window. location. reload(false);
  }
  return (
    <div class="gameover">
      {gameover ? (
        <h1>Voila You guessed the word correctly!</h1>
      ) : (
        <h1> You couldnt guess the word. Try again!</h1>
      )}


      {gameover ? (
        <h2>You took {aval} attempts to guess the word correctly!</h2>
      ) : (
        <h2>You exhausted all your attempts.</h2>
      )}

      <button class="reset" onClick={playagain}>Play Again</button>

    </div>
  );
}
