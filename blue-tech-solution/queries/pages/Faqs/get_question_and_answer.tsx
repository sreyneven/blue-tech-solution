export const  Get_Question_Answer = `
all_q_and_a:children(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        ... on Page {
          id
          title
          content
          menuOrder
        }
      }
    }
  }
`