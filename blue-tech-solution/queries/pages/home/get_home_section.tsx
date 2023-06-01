    import { Get_Featured_Image } from "../../fragments/fragment_featuere_image";

    export const Get_Home_Section = `
    home_page: page(id: "/home_section", idType: URI) {
      title
      ${Get_Featured_Image}
      slide_bar: children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
            nodes {
              ... on Page {
                title
                content
                ${Get_Featured_Image}
              }
            }
        }
    }
`