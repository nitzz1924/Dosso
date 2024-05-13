import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Wheel";

const FormularioTexto = () => {
  const inputList = [
    {
      id: uuidv4(),
      text: "?",
      value: "1456"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "2345"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "3456"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "4567"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "5678"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "6789"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "7894"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "8974"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "9874"
    },
    {
      id: uuidv4(),
      text: "?",
      value: "1111"
    },

  ];

  return (
    <div className="main-form">
      
      <Roulette data={inputList} />
      
    </div>
  );
};

export default FormularioTexto;
