import { Get_Featured_Image } from "../../../fragments/fragment_featuere_image";

export const Get_Location = `
location_info: page(id: "/general_setting_page/address/", idType: URI) {
    title
    content
    uri
    ${Get_Featured_Image}
  }
`