import dynamic from "next/dynamic";
import { ContactInfoType } from "../typescript/contact_info_type";
import Social_Contact from "./social-contact";
import { FooterType } from "../typescript/footer_section_type";
import { ScrollToTop } from "./scroll_to_top";
import { HeaderType } from "../typescript/header_section_type";
import { SocialContactType } from "../typescript/social_media_contact_type";

const Navbar = dynamic(()=>import('./navbar'))
const Footer = dynamic(()=>import('./footer'))

const Layout  = ({children , nav , footer_section , contact_info , social_contact ,}:{children:any  , nav:HeaderType , footer_section:FooterType , contact_info:ContactInfoType , social_contact:SocialContactType}) => {
    return (
        <>
            <main >
                <Navbar header ={nav} />
                <Social_Contact  social_contact={social_contact}/>
                {children}
                <ScrollToTop />
                <Footer footer_section={footer_section} contact_info={contact_info} social_contact={social_contact}  />
            </main>
        </>
    )
};

export default Layout;