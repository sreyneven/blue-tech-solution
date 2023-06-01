import { Get_Featured_Image } from "../../../fragments/fragment_featuere_image";

export const Get_Email = `
email_address: page(id: "/general_setting_page/email-address/", idType: URI) {
    title
    content
    uri
    ${Get_Featured_Image}
  }
`