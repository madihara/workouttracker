import React from 'react';
import NavBar from './components/NavBar'
import WaterTracker from './components/Water/Water'
import AddButton from './components/AddButton/AddButton'
import MoodTracker from './components/Mood/MoodTracker'
import ProteinTracker from './components/Protein/ProteinTracker'

import styles from './app.module.css'

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <AddButton />
      <WaterTracker />
      <MoodTracker />
      <ProteinTracker />



    </div>
  );
}

export default App;
