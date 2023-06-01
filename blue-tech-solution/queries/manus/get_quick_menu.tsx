export const Get_Quick_Link_Menu = `
quick_link_menu: menus(where: {location: PRIMARY}) {
    nodes {
      id
      databaseId
      slug
      menuItems {
        edges {
          node {
            label
            url
            title
            path
            order
            childItems {
              edges {
                node {
                  label
                  order
                }
              }
            }
          }
        }
      }
    }
  }
`