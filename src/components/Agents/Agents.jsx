import React from 'react';
import styles from './Agents.module.css';

const Agents = ({ agents }) => {
  return (
    <div className={styles.agents}>
      <strong>Агент: </strong>
      <div>{agents.first_name}</div>
      <div>{agents.middle_name}</div>
      <div>{agents.last_name}</div>
    </div>
  );
};

export default Agents;
