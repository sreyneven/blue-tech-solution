export const Get_Footer_Menu = `
footer_menu: menus(where: {location: HCMS_MENU_FOOTER}) {
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
          }
        }
      }
    }
  }
`