import { Get_Featured_Image } from "../../fragments/fragment_featuere_image";

export const Get_Why_Choose_Us_Section = `
    why_choose_us: page(id: "/why-choose-us", idType: URI) {
        title
        uri
        ${Get_Featured_Image}
        why_customer_choose_us: children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
        nodes {
            ... on Page {
            title
            content
            sub_title_cfield{
                subTitle
            }
            reason_cart:children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
                nodes {
                ... on Page {
                    title
                    content
                    ${Get_Featured_Image}
                }
                }
            }
            }
        }
        }
    }
`