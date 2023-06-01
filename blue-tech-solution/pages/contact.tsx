import Image from "next/image";
import { ContactInfoType } from "../typescript/contact_info_type";
import { ContactUsType } from "../typescript/contact_us_section_type";
import Form_Contact_Us from "../components/form-contact-us";
import Contact_Info from "../components/contact-info";

const Contact_us = ({contact_us_section ,contact_info}:{contact_us_section:ContactUsType , contact_info:ContactInfoType}) => {
    // Background contact us
    const background = contact_us_section?.featuredImage?.node?.sourceUrl;
    // title 
    const title = contact_us_section?.children?.nodes[0]?.title;
    // sub_title
    const sub_title = contact_us_section?.children?.nodes[0]?.sub_title_cfield?.subTitle;
    // content 
    const content = contact_us_section?.children?.nodes[0].content;
    // contact_us_image
    const contact_us_image = contact_us_section?.children?.nodes[0]?.featuredImage?.node?.sourceUrl;
    return ( 
        <>
            <div id="contact-us"></div>
            <div className="bg-container rounded-xl bg-cover object-left bg-center overflow-hidden" data-aos="fade-up">
            <Image alt={`contact-us-bg`} src={background} width={1000} height={200} quality={100} className="absolute w-full h-full object-cover z-[-20]" />
                <div className="max-w-[1024px] lg:py-10 px-5 py-10 mx-auto lg:px-0 lg:flex items-center lg:gap-x-20 lg:text-start text-center ">
                    <div className="lg:w-[442px] py-7">
                        <p className="text-[#4169E1] text-[0.7rem] md:text-[0.9rem] font-inter font-[700] uppercase tracking-widest ">
                        {title}
                        </p>
                        <h1 className="text-[1.5rem] md:text-[1.7rem] font-bold py-3 lg:leading-tight">
                        {sub_title}
                        </h1>
                        <div className="text-[0.9rem] md:text-[0.9rem] font-[400] font-inter py-1 text-[#434343]">
                        <article dangerouslySetInnerHTML={{__html:content}}></article>
                        </div>
                        {/* Contact info */}
                        <Contact_Info  contact_info={contact_info}  />
                    </div>
                    <div className="relative my-10 lg:my-20 lg:w-[400px] z-10">
                        <Form_Contact_Us />
                        <Image  alt={'contact_us_image'} src={contact_us_image} width={200} height={300} className="mx-auto my-5 lg:absolute lg:top-[310px] lg:left-[350px]" data-aos="zoom-in"
                        />
                    </div>
                </div>
            </div>
        </>
     );
}
export default Contact_us;