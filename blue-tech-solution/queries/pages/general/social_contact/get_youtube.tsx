import { Get_Featured_Image } from "../../../fragments/fragment_featuere_image";

export const Get_Youtube = `
youtube: page(id: "/general_setting_page/you-tube", idType: URI) {
    title
    content
    uri
    ${Get_Featured_Image}
    general_setting_cfield{
      externalLink
    }
    social_media_contact_icon_cfield {
      socialFooterIcon {
        sourceUrl
      }
    }
  }
`