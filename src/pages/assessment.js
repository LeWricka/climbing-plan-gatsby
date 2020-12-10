import React from 'react'
import { ReactTypeformEmbed } from 'react-typeform-embed'
import NavBar from '../modules/sections/NavBar'

class Assessment extends React.Component {
  render() {
    return (
      <div>
        {/*<div dangerouslySetInnerHTML={{ __html: "https://xabiermarinelarena.typeform.com/to/oeaTuO"}} />*/}
        <NavBar />
        <ReactTypeformEmbed style={{width: '100%', height: '100vh' }} url="https://xabiermarinelarena.typeform.com/to/oeaTuO" />
      </div>
    )
  }
}

export default Assessment