import React from "react";
import { useState } from "react";
import Select from "react-select";
import { generateAnimalset, generateCitiesSet, generateWordSet } from "./words";

function Themesetter(props) {
  var themes = {
    Animals: {
      color: "green",
      getWordSet: generateAnimalset,
    },
    Cities: {
      color: "orange",
      getWordSet: generateCitiesSet,
    },
    General: {
      color: "cyan",
      getWordSet: generateWordSet,
    },
  };
  var colors = [
    {
      value: 1,
      label: "cyan",
      name: "General",
    },
    {
      value: 2,
      label: "green",
      name: "Animals",
    },
    {
      value: 3,
      label: "orange",
      name: "Cities",
    },
  ];

  var [bgimage, setbgimage] = useState("black");
  var bgimagehandler = async (e) => {
    var theme = themes[e.label];
    setbgimage(theme.color);
    var newWordSet = await theme.getWordSet();
    props.changeWordSet(newWordSet);
  };
  return (
    <div id="selectbutton">
      <style>{"#body {background-color:" + bgimage + " ;}"}</style>
      <center>
        <Select
          options={Object.keys(themes).map((key) => ({
            label: key,
            value: key.toLowerCase(),
          }))}
          onChange={bgimagehandler}
          placeholder="Select your theme"
          styles={{
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isSelected ? "white" : "black",
            }),
          }}
        ></Select>
      </center>
    </div>
  );
}

export default Themesetter;
