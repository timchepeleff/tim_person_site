/* global graphql */

import React from 'react';
import Splash from '../components/splash';

const IndexPage = props =>
  (<main>
    <Splash data={props.data.allDataJson.edges[0].node.howTo} />
  </main>);

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
