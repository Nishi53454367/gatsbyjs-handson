import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const ItemsPage = ({ data }) => {
  return (
    <Layout pageTitle="米蔵商品">
      {
        data.allMicrocmsItems.edges.map((edge) => {
          return (
            <div key={edge.node.itemsId}>
              <h2>{edge.node.name}</h2>
              <img
                alt={edge.node.name}
                src={edge.node.image1.url}
                width={edge.node.image1.width / 2}
                height={edge.node.image1.height / 2}
              />
            </div>
          )
        })
      }
    </Layout>
  )
}

export const query = graphql`
query {
  allMicrocmsItems {
    edges {
      node {
        itemsId
        kg
        name
        price
        image1 {
          height
          url
          width
        }
        image2 {
          height
          url
          width
        }
        image3 {
          height
          url
          width
        }
      }
    }
  }
}
`

export default ItemsPage;
