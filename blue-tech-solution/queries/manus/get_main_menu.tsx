export const Get_Main_Menu = `
main_menu: menus(where: {location: HCMS_MENU_HEADER}) {
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
            uri
            childItems {
              edges {
                node {
                  label
                }
              }
            }
          }
        }
      }
    }
  }
`