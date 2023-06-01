import { Get_Featured_Image } from "../../../fragments/fragment_featuere_image";

export const Get_Phone_Number = `
phone_number: page(id: "/general_setting_page/phone-number/", idType: URI) {
    title
    content
    uri
    ${Get_Featured_Image}
  }
`