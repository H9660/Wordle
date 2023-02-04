import { useContext } from "react";
import { Appcontext } from "../App";
function Letters({ letterposition, attemptsval }) {
  const { board, colorstate} = useContext(Appcontext);
  const alphabet=board[attemptsval][letterposition];
  const state=colorstate[attemptsval][letterposition];
  return (
    <>
      {" "}
      <div className="letter" id={state}>
        {alphabet}
      </div>
    </>
  );
}

export default Letters;
