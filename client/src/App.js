import React from 'react';

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container}>
      My workout tracker
      <div className={styles.box}>color1</div>
      <div className={styles.box2}>color2</div>
    </div>
  );
}

export default App;
