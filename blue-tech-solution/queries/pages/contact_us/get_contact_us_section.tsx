import { Get_Featured_Image } from "../../fragments/fragment_featuere_image"
export const Get_Contact_Us_Section = `
contact_us: page(id: "/contact-us", idType: URI) {
    title
    uri
    ${Get_Featured_Image}
    children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
      nodes {
        ... on Page {
          title
          content
          sub_title_cfield {
            subTitle
          }
          ${Get_Featured_Image}
        }
      }
    }
  }
`