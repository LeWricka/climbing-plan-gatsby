import React from 'react'
import withRoot from '../modules/withRoot'
import HomeBanner from '../modules/sections/HomeBanner'
import NavBar from '../modules/sections/NavBar'
import Services from '../modules/sections/Services'
import ProgramPreview from '../modules/sections/ProgramPreview'
import Helmet from 'react-helmet'
import Footer from '../modules/sections/Footer'

class RootIndex extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="application">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Climbing Plan</title>
            <link rel="canonical" href="http://climbingplan.com" />
          </Helmet>
        </div>
        <section>
          <NavBar />
          <HomeBanner />
          <Services />
          <ProgramPreview />
          <Footer />
        </section>
        {/*<ProductValues />*/}
        {/*<ProductCategories />*/}
        {/*<ProductHowItWorks />*/}
        {/*<ProductCTA />*/}
        {/*<ProductSmokingHero />*/}
        {/*<AppFooter />*/}
      </React.Fragment>
    )
  }
}

export default withRoot(RootIndex)