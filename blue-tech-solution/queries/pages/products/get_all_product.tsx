import { Get_Featured_Image } from "../../fragments/fragment_featuere_image";

export const Get_Products_Section  = `
  products_page: page(id: "/products/", idType: URI) {
    title
    uri
    featuredImage{
      node{
        sourceUrl
      }
    }
    all_products: children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
      nodes {
        ... on Page {
          title
          sub_title_cfield {
            subTitle
          }
          content
          featuredImage{
            node{
              sourceUrl
            }
          }
          benifit_sub_pages: children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
            edges {
              node {
                uri
                ... on Page {
                  id
                  title
                  featuredImage{
                        node{
                          sourceUrl
                        }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`