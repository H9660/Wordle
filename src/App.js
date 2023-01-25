import "./App.css";
import Wordgrid from "./components/Wordgrid";
import Keyboard from "./components/Keyboard";
import { defaultState } from "./words";
import { useState, createContext } from "react";
import Gameover from "./components/Gameover";
export const Appcontext = createContext(); // this is used to access some of our variables globally

function App() {
  const [board, setBoard] = useState(defaultState);
  const [lpos, setLpos] = useState(0); // the current position of the cursor
  const [aval, setAval] = useState(0); // the current attempt value
  const [gameover, isgameover] =useState(true);
  const x=1;
  // Here we create functions for enter key, delete key and other alphabets key
  const deleteKey = () => {
    const newboard = [...board];
    if (lpos >= 0) {
      newboard[aval][lpos] = "";
      setBoard(newboard);
      setLpos(lpos - 1);
    } else return;
  };

  const enterKey = () => {
    if (aval == 5) return;
    if (lpos >= 4) {
      setAval(aval + 1);
      setLpos(0);
    }
  };

  const otherKey = (keyval) => {
    const newboard = [...board];
    if (lpos <= 4) {
      newboard[aval][lpos] = keyval;
      setBoard(newboard);
      setLpos(lpos + 1);
    }
    if (lpos > 4) setLpos(4);
  };

  // we have decalared the board useState so that it can be accessed globally
  return (
    <>
      <div className="Appnav">
        <nav>
          <h1>Wordle</h1>
          <hr></hr>
        </nav>
      </div>
      <Appcontext.Provider
        value={{
          board,
          setBoard,
          lpos,
          setLpos,
          aval,
          setAval,
          otherKey,
          deleteKey,
          enterKey,
          gameover
        }}
      >
        {/* using this we can access the usestate anywhere in the wordgrid, keyboard and letter component */}
        <Wordgrid />
        {/* {gameover ?<Keyboard /> : */}
        <Gameover />
      </Appcontext.Provider>
      {/* <Footer /> */}
    </>
  );
}
export default App;
