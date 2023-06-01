export const  Get_First_Logo = `
first_logo: pages(where: {title: "General Setting Page"}) {
  edges {
    node {
      general_setting_cfield {
        firstLogo {
          sourceUrl
        }
      }
    }
  }
}
`