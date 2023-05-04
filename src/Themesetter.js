import React from "react";
import { useState } from "react";
import Select from "react-select";
import { generateAnimalset, generateCitiesSet, generateWordSet } from "./words";

function Themesetter() {
  var colors = [
    {
      value: 1,
      label: generateWordSet,
      name: "General",
      bgimage,
    },
    {
      value: 2,
      label: generateAnimalset,
      name: "Animals",
    },
    {
      value: 3,
      label: generateCitiesSet,
      name: "Cities",
    },
  ];

  var [bgimage, setbgimage] = useState(colors.label);
  var bgimagehandler = (e) => {
    setbgimage(e.label);
  };
  return (
    <div id="selectbutton">
      <style>
        {".selectbutton {color: black;}"}
      </style>
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
