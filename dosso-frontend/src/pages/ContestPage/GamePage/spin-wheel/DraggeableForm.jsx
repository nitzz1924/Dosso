import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Wheel";

const FormularioTexto = () => {
  const inputList = [
    {
      id: uuidv4(),
      text: "1"
    },
    {
      id: uuidv4(),
      text: "2"
    },
    {
      id: uuidv4(),
      text: "3"
    },
    {
      id: uuidv4(),
      text: "4"
    },
    {
      id: uuidv4(),
      text: "5"
    },
    {
      id: uuidv4(),
      text: "6"
    },
    {
      id: uuidv4(),
      text: "7"
    },
    {
      id: uuidv4(),
      text: "8"
    },
    {
      id: uuidv4(),
      text: "9"
    },
    {
      id: uuidv4(),
      text: "10"
    },

  ];

  return (
    <div className="main-form">
      
      <Roulette data={inputList} />
      
    </div>
  );
};

export default FormularioTexto;
