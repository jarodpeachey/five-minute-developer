// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import Img from 'gatsby-image';

// function withImageData (WrappedComponent) {
//   return props => (
//     <StaticQuery
//       query={graphql`
//         query {
//           skillsImageOne: file(relativePath: { eq: "skill_one.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           skillsImageTwo: file(relativePath: { eq: "skill_two.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           skillsImageThree: file(relativePath: { eq: "skill_three.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 300) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           caltrack: file(relativePath: { eq: "caltrack.PNG" }) {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           wevote_one: file(relativePath: { eq: "wevote_one.PNG" }) {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           wevote_two: file(relativePath: { eq: "wevote_two.PNG" }) {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           contact_manager: file(relativePath: { eq: "contact_manager.PNG" }) {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           landing_page: file(relativePath: { eq: "landing_page.PNG" }) {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//           pph: file(relativePath: { eq: "pph.png" }) {
//             childImageSharp {
//               fluid(maxWidth: 500) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       `}
//       render={data => <WrappedComponent {...props} imageData={data} />}
//     />
//   );
// }

// // const SkillsImageOne = withImageData(props => (
// //   <Img fluid={props.imageData.skillsImageOne.childImageSharp.fluid} />
// // ));

// // export { SkillsImageOne };
