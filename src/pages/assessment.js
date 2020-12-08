import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import NavBar from '../modules/sections/NavBar'

class AssessmentIndex extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <ReactTypeformEmbed url="https://xabiermarinelarena.typeform.com/to/oeaTuO" />
      </div>
    )
  }
}

export default AssessmentIndex
