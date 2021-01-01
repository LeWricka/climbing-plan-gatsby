import React from 'react'
import withRoot from '../modules/withRoot'
import NavBar from '../modules/sections/NavBar'
import styles from './pricing.module.css'
import Helmet from 'react-helmet'
import Pricing from '../modules/sections/Pricing'

class PricingIndex extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Climbing Plan</title>
            <link rel="canonical" href="http://climbingplan.com" />
          </Helmet>
        </div>
        <section>
          <NavBar />
          <Pricing />
        </section>
      </div>
    )
  }
}

export default withRoot(PricingIndex)