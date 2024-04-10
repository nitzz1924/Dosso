import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Roulette from "./Wheel";

const FormularioTexto = () => {
  const inputList = [
    {
      id: uuidv4(),
      text: "10"
    },
    {
      id: uuidv4(),
      text: "20"
    },
    {
      id: uuidv4(),
      text: "30"
    },
    {
      id: uuidv4(),
      text: "40"
    },
    {
      id: uuidv4(),
      text: "50"
    },
    {
      id: uuidv4(),
      text: "60"
    },
    {
      id: uuidv4(),
      text: "70"
    },
    {
      id: uuidv4(),
      text: "80"
    },
    {
      id: uuidv4(),
      text: "90"
    },
    {
      id: uuidv4(),
      text: "100"
    },
    { 
      
      id: uuidv4(), 
      text: '150', 
      style: { 
        backgroundColor: 'green', 
        textColor: 'white' 
      }
    },
    { 
      
      id: uuidv4(), 
      text: '200', 
      style: { 
        backgroundColor: 'green', 
        textColor: 'white' 
      }
    },

  ];

  return (
    <div className="main-form">
      
      <Roulette data={inputList} />
      
    </div>
  );
};

export default FormularioTexto;
