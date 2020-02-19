import React from 'react';
import NavBar from './components/NavBar'

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      My workout tracker
      <div className={styles.box}>color1</div>
      <div className={styles.box2}>color2</div>
      <div className={styles.box3}>box3</div>
    </div>
  );
}

export default App;
