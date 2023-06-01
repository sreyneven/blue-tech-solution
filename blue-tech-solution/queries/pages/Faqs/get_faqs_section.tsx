import { Get_Question_Answer } from "./get_question_and_answer"
import { Get_Featured_Image } from "../../fragments/fragment_featuere_image"
export const Get_Faqs_Section = `
faqs_page: page(id: "/faqs", idType: URI) {
    title
    uri
    Question_Answer:children(where: {orderby: {field: AUTHOR, order: ASC}}) {
      edges {
        node {
          ... on Page {
            id
            title
            content
            ${Get_Featured_Image}
            ${Get_Question_Answer}
          }
        }
      }
    }
  }
`