import "./App.css";
import { useEffect, useState, createContext } from "react";
import { defaultState, generateWordSet } from "./words";
import Keyboard from "./components/Keyboard";
import Wordgrid from "./components/Wordgrid";
import Gameover from "./components/Gameover";
import Themesetter from "./components/Themesetter";
export const Appcontext = createContext(); // this is used to access some of our variables globally

function App() {
  const [board, setBoard] = useState(defaultState);
  const [lpos, setLpos] = useState(0); // the current position of the cursor
  const [aval, setAval] = useState(0); // the current attempt value
  const [wordSet, setWordSet] = useState(new Set()); // this is to store the list of words that can be generated
  const [correctword, setCorrectWord] = useState("");
  const [disabledLetters, setDisabledLetters] = useState([]); // this stores the letters that are incorrect
  const [wordformed, setwordformed] = useState("");
  const newboard = [...board];
  const [countnos, setNos] = useState(new Map());
  const [gameover, isGameover] = useState({ win: false, loose: false }); // used to check if the game is over or not
  // this matrix is used to set colors
  const [colorstate, setColorstate] = useState([
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
    ["incorrect", "incorrect", "incorrect", "incorrect", "incorrect"],
  ]);

  const changeWordSet = (words) => {
    setWordSet(words.wordSet);
    setCorrectWord(words.todaysWord.toLowerCase());
    countnos.clear();
    setNos(countnos);
    process(words.todaysWord.toLowerCase());
  };
  // this function generates a new word everytime the page loads
  useEffect(() => {
    generateWordSet().then((words) => {
      setWordSet(words.wordSet);
      setCorrectWord(words.todaysWord);
      countnos.clear();
      setNos(countnos);
      process(words.todaysWord);
    });
    
  }, []);

  // the process function counts the frequency of each character in the word and stores them in a map
  const process = (word) => {
    for (let i = 0; i < 5; i++) {
      let oldfreq = countnos.get(word[i]);
      countnos.set(word[i], oldfreq ? oldfreq + 1 : 1);
      setNos(countnos);
      console.log(word[i] + " " + countnos.get(word[i]));
    }
  };

  // Here we create functions for enter key, delete key and other alphabets key

  const deleteKey = () => {
    if (lpos == 0) return;
    newboard[aval][lpos - 1] = "";
    setLpos(lpos - 1);
    setBoard(newboard);
    if (lpos < 0) setLpos(0);
  };

  // this works fine
  const enterKey = () => {
    if (aval == 5 && lpos > 4) {
      setcolors(aval);
      if (!isGameover.win) isGameover.loose = true;
    }
    if (aval == 0 && lpos > 4) {
      var elements = document.getElementsByClassName("first-row");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = "flip-letter 0.8s linear";
      }
    }

    if (aval == 1 && lpos > 4) {
      var elements = document.getElementsByClassName("second-row");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = "flip-letter 0.8s linear";
      }
    }

    if (aval == 2 && lpos > 4) {
      var elements = document.getElementsByClassName("third-row");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = "flip-letter 0.8s linear";
      }
    }

    if (aval == 3 && lpos > 4) {
      var elements = document.getElementsByClassName("fourth-row");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = "flip-letter 0.8s linear";
      }
    }

    if (aval == 4 && lpos > 4) {
      var elements = document.getElementsByClassName("fifth-row");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = "flip-letter 0.8s linear";
      }
    }

    if (aval == 5 && lpos > 4) {
      var elements = document.getElementsByClassName("sixth-row");
      for (var i = 0; i < elements.length; i++) {
        elements[i].style.animation = "flip-letter 0.8s linear";
      }
    }

    if (lpos > 4 && lpos > 4) {
      // if (wordSet.has({wordformed})) {
      setcolors(aval);
      setAval(aval + 1);
      setLpos(0);
      // }  else {
      //   alert("Word not found");
      // }
    }

    // console.log(correctword); //for testing purposes
  };

  // this works fine
  const otherKey = (keyval) => {
    if (lpos <= 4) {
      newboard[aval][lpos] = keyval;
      setBoard(newboard);
      setLpos(lpos + 1);
      return;
    }
  };

  // APPLE
  // SJDFH
  
  // here we will set the colors of the letters
  const setcolors = (aval) => {
    const tempfreqs = new Map([...countnos]);
    let totalcorrectletters = 0; // to store the total correct letters
    setwordformed("");
    for (let i = 0; i < 5; i++) {
      const alphabet = board[aval][i]; // The block corresponsing to this location will get updated
      const correct = correctword[i] === alphabet.toLowerCase();
      if (correct) {
        totalcorrectletters++;
        tempfreqs.set(correctword[i], tempfreqs.get(correctword[i]) - 1);
        setNos(countnos);
      }
      setwordformed(wordformed + alphabet.toLowerCase());
      const almost =
        !correct &&
        alphabet != "" &&
        correctword.includes(alphabet.toLowerCase()) &&
        tempfreqs.get(alphabet.toLowerCase()) != 0;
      // here for it to be almost correct it cant be correct and it cant be empty as well
      // also it should be present in the correctword
      const newcolorstate = [...colorstate];
      newcolorstate[aval][i] = correct
        ? "correctpos"
        : almost
          ? "incorrectpos"
          : "incorrect";
      setColorstate(newcolorstate);
    }
    setwordformed(wordformed);
    // countnos.clear();
    // setNos(countnos);
    // console.log(wordformed);
    // if (wordformed === correctword) isGameover.win = true;
    if (totalcorrectletters == 5) isGameover.win = true;
  };

  // console.log(gameover);
  // we have decalared the board useState so that it can be accessed globally
  return (
    <>
      <div className="Appnav">
        <nav>
          <h1>Wordle</h1>
        </nav>
        {/* hr is the line that seperates the header and the main content */}
        <hr></hr>
        <Themesetter changeWordSet={changeWordSet} />
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
          setDisabledLetters,
          disabledLetters,
          correctword,
          colorstate,
          setcolors,
          isGameover,
        }}
      >
        {/* using this we can access the usestate anywhere in the wordgrid, keyboard and letter component */}
        <Wordgrid />
        {/* this is the grid */}
        {isGameover.win || isGameover.loose ? <Gameover /> : <Keyboard />}
        {/* <Footer /> */}
      </Appcontext.Provider>
    </>
  );
}
export default App;

// const gameover =  document.querySelector(".gameover")
