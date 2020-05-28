import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from "../components/Jumbo"
import { SEO } from "../components"
import { Products } from "../components/Products"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              description
              wear
              img
            }
          }
        }
      }
    }
  }
`

const indexPages = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripeSku.edges} />
    </>
  )
}

export default indexPages
