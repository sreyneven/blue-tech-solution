import { Get_Featured_Image } from "../../../fragments/fragment_featuere_image";

export const Get_Telegram = `
telegram: page(id: "/general_setting_page/telegram", idType: URI) {
    title
    content
    uri
    ${Get_Featured_Image}
    general_setting_cfield{
      externalLink
    }
  }
`