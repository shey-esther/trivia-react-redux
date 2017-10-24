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

const OptionsList = (quiz,index)
  const onOptionSelect = (e) => {
    let value = e.target.id;
    answere(value,index);
};

const TriviaApp = ({ title, model }) => {
  let optionList = '';
  let yourAnswers = '';
  const onSubmit = () => {
    console.log('onSubmit');
    // model.getReport () ;
  }
  const genReport = () => {
    let result = [];
    for (let i = 0; i < model.correctAnswers.length; i++) {
      let rpta = '';
      if (model.correctAnswers[i] === model.answers[i]) {
        rpta = <div>{model.questions[i]} {model.answers[i]}</div>;
      }
      else {
        rpta = <div>{model.questions[i]}  <strike>{model.answers[i]} </strike> - {model.correctAnswers[i]}</div>;
      }
      result.push(rpta);
    }
    return result;
  }
  if (model.getOptions()) {
    optionList = model.getOptions().map((option, index) => {
      return (<Option key={index} model={model} index={index} option={option} />);
    })
  } else {

    yourAnswers = (
      <div className="finish">
        <h2>  Here are your answers: </h2>
        <ol>
          {
            genReport().map((question, index) => <li key={index}> {question}  {model.answers[index]} </li>)
          }
        </ol>
        <button onClick={onSubmit}>submit</button>
      </div>
    );
  }



  return (
    <div className="count">
      <img src={'img/' + model.getImage()} />
      <div className="afterImg">
        <p>  {model.getQuestion()}  </p>
        <div>
          {
            optionList
          }
          {
            yourAnswers
          }

        </div>
      </div>
    </div>
  );
}

const TriviaApp = ({ title, model }) => {
  let optionList = '';
  let yourAnswers = '';
  const onSubmit = () => {
    console.log('onSubmit');
    // model.getReport () ;
  }
  const genReport = () => {
    let result = [];
    for (let i = 0; i < model.correctAnswers.length; i++) {
      let rpta = '';
      if (model.correctAnswers[i] === model.answers[i]) {
        rpta = <div>{model.questions[i]} {model.answers[i]}</div>;
      }
      else {
        rpta = <div>{model.questions[i]}  <strike>{model.answers[i]} </strike> - {model.correctAnswers[i]}</div>;
      }
      result.push(rpta);
    }
    return result;
  }
  if (model.getOptions()) {
    optionList = model.getOptions().map((option, index) => {
      return (<Option key={index} model={model} index={index} option={option} />);
    })
  } else {

    yourAnswers = (
      <div className="finish">
        <h2>  Here are your answers: </h2>
        <ol>
          {
            genReport().map((question, index) => <li key={index}> {question}  {model.answers[index]} </li>)
          }
        </ol>
        <button onClick={onSubmit}>submit</button>
      </div>
    );
  }



  return (
    <div className="count">
      <img src={'img/' + model.getImage()} />
      <div className="afterImg">
        <p>  {model.getQuestion()}  </p>
        <div>
          {
            optionList
          }
          {
            yourAnswers
          }

        </div>
      </div>
    </div>
  );
}

const mapToProps = ({ players, selectedPlayerIndex }) => ({ players, selectedPlayerIndex });

export default connect(mapToProps)(App);
