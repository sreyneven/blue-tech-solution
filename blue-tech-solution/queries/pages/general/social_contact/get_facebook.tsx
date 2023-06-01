import { Get_Featured_Image } from "../../../fragments/fragment_featuere_image";

export const  Get_Facebook = `
facebook: page(id: "/general_setting_page/facebook", idType: URI) {
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