import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import NavBar from '../modules/sections/NavBar'

class Assessment extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#323232'}}>
        <NavBar />
        <ReactTypeformEmbed style={{width: '100%', height: '100vh', backgroundColor: '#323232'}} url="https://xabiermarinelarena.typeform.com/to/oeaTuO" />
      </div>
    )
  }
}

export default Assessment