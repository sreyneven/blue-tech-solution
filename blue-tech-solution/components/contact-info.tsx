import Image from "next/image";
import { ContactInfoType } from "../typescript/contact_info_type";

const Contact_Info = ({contact_info}:{contact_info:ContactInfoType}) => {
     // contact information get from general setting page

    // Email Address
    const email_title  =contact_info?.email_address?.title;
    const email_content= contact_info?.email_address?.content;
    const email_image = contact_info?.email_address?.featuredImage?.node?.sourceUrl;

    // Phone number 
    const phone_title = contact_info?.phone_number?.title;
    const phone_content = contact_info?.phone_number?.content;
    const phone_image = contact_info?.phone_number?.featuredImage?.node?.sourceUrl

    // Location info
    const location_title= contact_info?.location_info?.title;
    const location_content=contact_info?.location_info?.content;
    const location_image = contact_info?.location_info?.featuredImage?.node?.sourceUrl;
    return ( 
        <div className="grid grid-cols-1 gap-2 text-start lg:mx-0 lg:w-[512px] ">
            <div className="flex items-center ">
                <div>
                    <Image  alt={'eamil_image'} src={email_image} width={30} height={40} />
                </div>
                <div className="px-3">
                    <h1 className="text-[0.8rem] font-inter font-[400] py-1  tracking-tight text-[#434343]">
                        {email_title}
                    </h1>
                    <div className="text-[0.8rem] font-inter font-[700]">
                        <article dangerouslySetInnerHTML={{__html:email_content}}></article>
                    </div>
                </div>
            </div>
            <div className="flex items-center my-3">
                <div>
                    <Image alt={'phone_image'} src={phone_image} width={30} height={40} />
                </div>
                <div className="px-3">
                    <h1 className="text-[0.9rem] font-inter font-[400] py-1  tracking-tight text-[#706d6d]">
                        {phone_title}
                    </h1>
                    <div className="text-[0.8rem] font-inter font-[700]">
                            <article dangerouslySetInnerHTML={{__html:phone_content}}></article>
                    </div>
                </div>
            </div>
            <div className="flex items-center my-3">
                <div>
                    <Image alt={'location_image'} src={location_image} width={35} height={40} />
                </div>
                <div className="px-3">
                    <h1 className="text-[0.9rem] font-inter font-[400] py-1 tracking-tight text-[#434343]">
                        {location_title}
                    </h1>
                    <div className="text-[0.8rem] font-inter font-[700]">
                        <article dangerouslySetInnerHTML={{__html:location_content}}></article>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Contact_Info;