import { useContext } from "react";
import { Appcontext } from "../App";
function Letters({ letterposition, attemptsval}) {
  
  const {board}=useContext(Appcontext);
  const alphabet=board[attemptsval][letterposition]; // The block corresponsing to this location will get updated
  return (
    <>
      {" "}
      <div className="letter">{alphabet}</div>
    </>
  );
}

export default Letters;
