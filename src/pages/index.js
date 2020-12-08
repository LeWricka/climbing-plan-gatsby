import React from 'react'
import withRoot from '../modules/withRoot'
import HomeBanner from '../modules/sections/HomeBanner'
import NavBar from '../modules/sections/NavBar'
import Services from '../modules/sections/Services'
import ProgramPreview from '../modules/sections/ProgramPreview'
import Helmet from 'react-helmet'

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


// import React from 'react'
// import { graphql } from 'gatsby'
// import get from 'lodash/get'
// import { Helmet } from 'react-helmet'
// import Hero from '../components/hero'
// import Layout from '../components/layout'
// import ArticlePreview from '../components/article-preview'
//
// class RootIndex extends React.Component {
//   render() {
//     const siteTitle = get(this, 'props.data.site.siteMetadata.title')
//     const posts = get(this, 'props.data.allContentfulBlogPost.edges')
//     const [author] = get(this, 'props.data.allContentfulPerson.edges')
//
//     return (
//       <Layout location={this.props.location}>
//         <div style={{ background: '#fff' }}>
//           <Helmet title={siteTitle} />
//           <Hero data={author.node} />
//           <div className="wrapper">
//             <h2 className="section-headline">Two brothers styla</h2>
//             <h2 className="section-headline">Recent articles</h2>
//             <ul className="article-list">
//               {posts.map(({ node }) => {
//                 return (
//                   <li key={node.slug}>
//                     <ArticlePreview article={node} />
//                   </li>
//                 )
//               })}
//             </ul>
//           </div>
//         </div>
//       </Layout>
//     )
//   }
// }
//
// export default RootIndex
//
// export const pageQuery = graphql`
//   query HomeQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             fluid(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `
