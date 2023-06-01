import { Get_Featured_Image } from "../../fragments/fragment_featuere_image";

export const Get_Request_Demo = `
request_demo: pages(where: {title: "Request demo"}) {
    edges {
      node {
        title
        ${Get_Featured_Image}
        external_link_cfield {
          externalLink
        }
        request_demo_video {
          requestDemoVideo
        }
      }
    }
  }
`