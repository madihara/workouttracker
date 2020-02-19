
import React from 'react'

import styles from './navbar.module.css'

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        logo
      </div>
      <div className={styles.date}>
        Tuesday, February 40th
      </div>
      <div className={styles.linksBox}>
        <div className={styles.link}>
          my account
        </div>
        <div className={styles.link}>
          log out
        </div>
      </div>
    </div>
  )
}

export default NavBar