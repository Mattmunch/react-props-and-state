import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import styles from './Madlib.css';

export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    inputs: {
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
      '11': '' }
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    this.setState(state => ({
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
    this.handleReset();
  }
  handleChange = ({ target }) => {
    this.setState(state => ({
      ...state,
      inputs:{ ...state.inputs,  [target.name]: target.value }
    }));
  }
  handleReset = () => {
    this.setState(state => ({
      ...state, inputs: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '10': '',
        '11': ''
      } }));
  }
  
  render() {
    const { showResult } = this.state;
    return (
      <section className={styles.madlib}>
        {!showResult && <Form onReset={this.handleReset} inputs={this.state.inputs} onChange={this.handleChange} onSubmit={this.handleSubmit} />}
        {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
      </section>
    );
  }
}
