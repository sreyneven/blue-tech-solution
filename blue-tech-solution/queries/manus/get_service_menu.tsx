export const Get_Service_Menu = `
service_menu: menus(where: {location: SECONDARY_MENU}) {
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
            order
            path
            childItems {
              edges {
                node {
                  id
                  label
                  path
                  url
                }
              }
            }
          }
        }
      }
    }
  }
`