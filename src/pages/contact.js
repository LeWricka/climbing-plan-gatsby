import React from 'react'
import withRoot from '../modules/withRoot'
import NavBar from '../modules/sections/NavBar'
import Helmet from 'react-helmet'
import ContactData from '../modules/sections/ContactData'
import styles from './contact.module.css'
import Footer from '../modules/sections/Footer'

class RootIndex extends React.Component {
  render() {
    return (
      <div className="root">
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Climbing Plan</title>
            <link rel="canonical" href="http://climbingplan.com" />
          </Helmet>
        </div>
        <section>
          <NavBar threshold={200}/>
          <ContactData />
          <Footer />
        </section>
      </div>
    )
  }
}

export default withRoot(RootIndex)