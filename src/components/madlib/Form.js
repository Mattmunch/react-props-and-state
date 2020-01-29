import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onReset, onSubmit, onChange, inputs }) => (
  <section className={styles.formSection}>
    <form className={styles.form} onSubmit={onSubmit}>
      <input value={inputs['0']} name="0" onChange={onChange} type="text" placeholder="adjective" />
      <input value={inputs['1']} onChange={onChange} name="1" type="text" placeholder="noun" />
      <input value={inputs['2']} onChange={onChange} name="2" type="text" placeholder="verb, past tense" />
      <input value={inputs['3']} onChange={onChange} name="3" type="text" placeholder="adverb" />
      <input value={inputs['4']} onChange={onChange} name="4" type="text" placeholder="adjective" />
      <input value={inputs['5']} onChange={onChange} name="5" type="text" placeholder="noun" />
      <input value={inputs['6']} onChange={onChange} name="6" type="text" placeholder="noun" />
      <input value={inputs['7']} onChange={onChange} name="7" type="text" placeholder="adjective" />
      <input value={inputs['8']} onChange={onChange} name="8" type="text" placeholder="verb" />
      <input value={inputs['9']} onChange={onChange} name="9" type="text" placeholder="adverb" />
      <input value={inputs['10']} onChange={onChange} name="10" type="text" placeholder="verb, past tense" />
      <input value={inputs['11']} onChange={onChange} name="11" type="text" placeholder="adjective" />
      <button>Create Madlib</button>
    </form>
    <button onClick={onReset}>Clear Entries</button>
  </section>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  inputs: PropTypes.object.isRequired
};

export default Form;
