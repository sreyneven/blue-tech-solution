import { gql } from "@apollo/client";
import { Get_Header_Section} from "./header/get_header";
import { Get_Home_Section } from "./pages/home/get_home_section";
import { Get_Why_Choose_Us_Section } from "./pages/why_choose_us/get_why_choose_us_section";
import { Get_Products_Section } from "./pages/products/get_all_product";
import { Get_Contact_Us_Section } from "./pages/contact_us/get_contact_us_section";
import { Get_Contact_Info } from "./pages/general/contact_info/get_contact_info";
import { Get_Faqs_Section } from "./pages/Faqs/get_faqs_section";
import { Get_Socail_Contact } from "./pages/general/social_contact/get_socail_contact";
import { Get_Footer_Data } from "./footer/get_footer_data";

export const Get_All_Queries = gql
    `query AllQuries {
        ${Get_Header_Section}
        ${Get_Home_Section}
        ${Get_Why_Choose_Us_Section}
        ${Get_Products_Section}
        ${Get_Contact_Us_Section}
        ${Get_Faqs_Section}
        ${Get_Footer_Data}

        ${Get_Contact_Info}
        ${Get_Socail_Contact}
    }
`