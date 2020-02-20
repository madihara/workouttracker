import React, { useState } from 'react'
import WorkoutCard from './WorkoutCard'

import styles from './workoutgallery.module.css'

const WorkoutGallery = () => {
  return (
    <div className={styles.container}><WorkoutCard /></div>
  )
}

export default WorkoutGallery