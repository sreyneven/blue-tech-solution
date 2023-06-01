import Image from "next/image";
import Link from "next/link";
import { ContactInfoType } from "../typescript/contact_info_type";
import { FooterType, MenuItemsEdge } from "../typescript/footer_section_type";
import { SocialContactType } from "../typescript/social_media_contact_type";

const Footer_Section = ({footer_section , contact_info , social_contact}:{footer_section:FooterType , contact_info:ContactInfoType , social_contact:SocialContactType}) => {
    // Second Logo
    const second_logo = footer_section?.second_logo?.edges[0]?.node?.general_setting_cfield?.secondLogo?.sourceUrl;

    // Frist Descriptions
    const footer_first_description = footer_section?.footer_first_description?.footer_cfield?.firstDescription;

    // Socail Contact Information
    const faecebook = social_contact?.facebook?.featuredImage?.node?.sourceUrl;
    const facebook_url = social_contact?.facebook?.general_setting_cfield?.externalLink;

    const linkedIn = social_contact?.linkedin?.featuredImage?.node?.sourceUrl;
    const linkedIn_url = social_contact?.linkedin?.general_setting_cfield?.externalLink;

    const youtube = social_contact?.youtube?.featuredImage?.node?.sourceUrl;
    const youtube_url = social_contact?.youtube?.general_setting_cfield?.externalLink

    // Quick Links to menus
    const quick_link_menu = footer_section?.quick_link_menu?.nodes[0]?.menuItems?.edges;

    // Service Menu
    const service_menu = footer_section?.service_menu?.nodes[0]?.menuItems?.edges;

    // Contact Information
    const email_content = contact_info?.email_address?.content;
    const email_address_icon = contact_info?.email_address?.featuredImage?.node?.sourceUrl;

    const phone_number = contact_info?.phone_number?.content;
    const phone_number_icon = contact_info?.phone_number?.featuredImage?.node?.sourceUrl;

    const location_info = contact_info?.location_info?.content;
    const location_info_icon = contact_info?.location_info?.featuredImage?.node?.sourceUrl;

    // Second Descriptions
    const footer_second_description =footer_section?.footer_second_description?.footer_cfield?.secondDescription;

    // Footer Menus
    const footer_menu = footer_section?.footer_menu?.nodes[0]?.menuItems?.edges;
  
    // SOcial media contact 
    const facebook_icon = social_contact?.facebook?.social_media_contact_icon_cfield?.socialFooterIcon?.sourceUrl;
     const facebook_externallink = social_contact?.facebook?.general_setting_cfield?.externalLink;

    const youtube_icon = social_contact?.youtube?.social_media_contact_icon_cfield?.socialFooterIcon?.sourceUrl;
    const youtube_externalLink = social_contact?.youtube?.general_setting_cfield?.externalLink;

    const linkedIn_icon  =  social_contact?.linkedin?.social_media_contact_icon_cfield?.socialFooterIcon?.sourceUrl;
    const linkedIn_externallink = social_contact?.youtube?.general_setting_cfield?.externalLink;
    
    return ( 
    <div className="bg-[#4169E1]">
        <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] lg:flex lg:flex-row md:flex-row lg:justify-between lg:gap-28 items-start mx-auto lg:py-5 px-5 md:px-10 lg:px-0">
            <div  className="mx-auto  py-7 lg:mx-0">
                <Image 
                    alt={`second_logo`} 
                    src={second_logo} 
                    width={150} 
                    height={40} 
                    className="mx-auto lg:mx-0"
                />
                <p className="text-[0.7rem] font-[400] font-open-san text-[#FFFFFF] text-center lg:text-start py-3 lg:w-[250px]">
                    {footer_first_description}
                </p>
                <div className="flex items-center justify-center lg:justify-start cursor-pointer">
                     <Link href={`${facebook_externallink}`}><Image alt={`facebook_icon`} src={facebook_icon}  width={25} height={25} /></Link>
                     <Link href={`${linkedIn_externallink}`} className="px-3"><Image alt={`linkedIn_icon`} src={linkedIn_icon}  width={25} height={25} /></Link>
                     <Link href={`${youtube_externalLink}`} ><Image alt={`youtube_icon`} src={youtube_icon}  width={25} height={25} /></Link>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-3 mx-auto py-3 px-2 lg:px-10">
                <div className="py-3">
                    <div className="text-white font-manrope text-[700] text-[0.9rem] mb-2">Quick Link</div>
                    <ul>
                        {
                        quick_link_menu.map((link:MenuItemsEdge)=>{

                            let fullPath:string = link?.node?.path;
                            let splitPath = fullPath.split('/').join('');
                            return (
                                <li key={link?.node?.label} className='my-1 text-white '>
                                        <Link href={"#" + splitPath} className='hover:text-[#000000] duration-500 font-open-san font-[400] text-[0.75rem]' >
                                            {link?.node?.label}
                                        </Link> 
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
                <div className="py-3">
                    <div className="text-white font-manrope text-[700] text-[0.9rem] mb-2">Service</div>
                    <ul>
                        {
                        service_menu.map((link:MenuItemsEdge)=>{
                            let fullPath:string = link?.node?.path;
                            let splitPath = fullPath.split('/').join('');
                            return (
                                <li key={link?.node?.label} className='my-1 text-white '>
                                    <Link href={"#" + splitPath} className=' hover:text-[#000000] duration-500  font-open-san font-[400] text-[0.75rem]' >
                                        {link?.node?.label}
                                    </Link> 
                                </li>
                            )
                        })
                        }
                    </ul>
                </div>
                <div className="py-3">
                    <div className="text-white font-manrope text-[700] text-[0.9rem] mb-2">Cantact info</div>
                    <div className=" text-white font-open-san text-[0.75rem] font-[400]">
                        <div>
                            <article dangerouslySetInnerHTML={{__html:email_content}}></article>
                        </div>
                        <div className="py-4">
                            <article dangerouslySetInnerHTML={{__html:phone_number}}></article>
                        </div>
                        <div>
                            <article dangerouslySetInnerHTML={{__html:location_info}}></article>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
        <hr className="lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto px-1"/>
        <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] flex flex-col lg:flex-row lg:justify-between items-center mx-auto lg:px-0 md:px-2 px-5 py-5">
            <div className="text-white font-open-san text-[0.75rem]">
                {footer_second_description}
            </div>
            <div>
            <ul  className="lg: flex">
                    {
                    footer_menu.map((link:MenuItemsEdge)=>(
                    <li key={link?.node?.label} className='my-1 text-white'>
                        <Link href={link?.node?.url} className=' hover:text-[#000000] duration-500  font-open-san font-[400] text-[0.75rem] px-3  underline' >
                                    {link?.node?.label}
                        </Link> 
                    </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    </div>
    );
}
export default Footer_Section;