export const Get_Second_Logo = `
second_logo: pages(where: {title: "General Setting Page"}) {
    edges {
      node {
        general_setting_cfield {
          secondLogo {
            sourceUrl
          }
        }
      }
    }
  }
`