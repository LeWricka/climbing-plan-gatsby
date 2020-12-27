import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import NavBar from '../modules/sections/NavBar'
import styles from './assessment.module.css'

class Assessment extends React.Component {
  render() {
    return (
      <div style={{ margin: 0, backgroundColor: '#323232' }}>
        <NavBar />
        <ReactTypeformEmbed style={{ width: '100%', height: '100vh', backgroundColor: '#323232' }} url="https://xabiermarinelarena.typeform.com/to/oeaTuO" />
      </div>
    )
  }
}

export default Assessment