import React from "react";
import { useState } from "react";
import Select from "react-select";
import { generateAnimalset, generateCitiesSet, generateWordSet } from "./words";

function Themesetter() {
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
  var bgimagehandler = (e) => {
    setbgimage(e.label);
  };
  return (
    <div id="selectbutton">
      <style>{"body {background-color:" + bgimage + " ;}"}</style>
      <center>
        <Select
          options={colors}
          onChange={bgimagehandler}
          placeholder="Select your theme"
        ></Select>
      </center>
    </div>
  );
}

export default Themesetter;
