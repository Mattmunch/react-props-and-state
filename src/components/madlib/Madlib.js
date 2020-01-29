import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    inputs:[]
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    this.setState(state => ({
      inputs:{},
      words: [
        state.inputs['0'],
        state.inputs['1'],
        state.inputs['2'],
        state.inputs['3'],
        state.inputs['4'],
        state.inputs['5'],
        state.inputs['6'],
        state.inputs['7'],
        state.inputs['8'],
        state.inputs['9'],
        state.inputs['10'],
        state.inputs['11']
      ]
    }));
  }
  handleChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      inputs:{ ...state.inputs,  [target.name]: target.value }
    }));
  }
  
  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onChange={this.handleChange} onSubmit={this.handleSubmit} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </>
    );
  }
}
