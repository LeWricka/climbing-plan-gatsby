// import React from 'react'
// import { graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'
// import get from 'lodash/get'
// import Img from 'gatsby-image'
// import NavBar from '../modules/sections/NavBar'
// import blogPostStyles from '../templates/blog-post.module.css'
// import Container from '@material-ui/core/Container'
//
// class BlogPostTemplate extends React.Component {
//   render() {
//     const post = get(this.props, 'data.contentfulBlogPost')
//     const siteTitle = get(this.props, 'data.site.siteMetadata.title')
//
//     return (
//       <div className={blogPostStyles.root}>
//         <Container disableGutters={true} className={blogPostStyles.container}>
//           <Helmet title={`${post.title} | ${siteTitle}`} />
//           <NavBar forceSolid={}/>
//           <div className={''}>
//             <div className={blogPostStyles.hero}>
//               <Img
//                 className={blogPostStyles.heroImage}
//                 alt={post.title}
//                 fluid={post.heroImage.fluid}
//               />
//             </div>
//             <div className={blogPostStyles.contentWrapper}>
//               <h1 className="section-headline">{post.title}</h1>
//               <p
//                 style={{
//                   display: 'block',
//                 }}
//               >
//                 {post.publishDate}
//               </p>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html: post.body.childMarkdownRemark.html,
//                 }}
//               />
//             </div>
//           </div>
//         </Container>
//       </div>
//     )
//   }
// }
//
// export default BlogPostTemplate
//
// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       heroImage {
//         fluid(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulFluid_tracedSVG
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `