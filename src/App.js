import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import logo from './logo.svg';
import './App.css';

const Option = ({ index, quiz }) => {
  return quiz.map((index, value) => {
    return (
      <div>
        <div className="options">
          <button>{value.options}</button>
        </div>
      </div>
    )
  })
};

const OptionsList = ({ quiz, index }) => {
  const onOptionSelect = (e) => {
    let value = e.target.val;
    answere(value, index);
  };
  const optionsAnswere = quiz[index].options.map((value, index) => {
    return (
      <li key={index}>
        <button onClick={onOptionSelect} val={value}>{value}</button>
      </li>
    )
  });
  return (
    <ul>{optionsAnswere}</ul>
  )
}
const TriviaApp = ({ index, quiz }) => {
  return (
    <div className="count">
      <img src={quiz[index].images} />
      <div className="afterImg">
        <p>  {quiz[index].questions}  </p>
        <div>
          {
            optionList
          }
          <OptionsList quiz={quiz} index={index}/>
          {/* {
            yourAnswers
          } */}
        </div>
      </div>
    </div>
  );
}



const mapToProps = ({ quiz, index }) => ({ quiz, index });

export default connect(mapToProps)(TriviaApp);
