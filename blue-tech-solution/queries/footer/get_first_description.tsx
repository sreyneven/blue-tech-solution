export const Get_First_Description = `
first_description: page(id: "/footer", idType: URI) {
  title
  footer_cfield{
    firstDescription
  }
}
`