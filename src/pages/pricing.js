import React from 'react'
import withRoot from '../modules/withRoot'
import NavBar from '../modules/sections/NavBar'
import Helmet from 'react-helmet'
import Pricing from '../modules/sections/Pricing'

class RootIndex extends React.Component {
  render() {
    return (
      <div>
        <div className="application">
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

export default withRoot(RootIndex)