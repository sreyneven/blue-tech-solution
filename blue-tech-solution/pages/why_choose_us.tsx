import Image from "next/image";
import { ReasonCartNode, WhyChooseUsType } from "../typescript/why_choose_us_section_type";

const Why_Choose_Us_Page = ({why_choose_us_section}:{why_choose_us_section:WhyChooseUsType}) => {
    // Background Image 
    const background = why_choose_us_section?.featuredImage?.node?.sourceUrl;
    
    why_choose_us_section?.featuredImage?.node?.sourceUrl
    // Title 
    const title = why_choose_us_section?.why_customer_choose_us?.nodes[0]?.title;
    // Sub Title
    const sub_title = why_choose_us_section?.why_customer_choose_us?.nodes[0]?.sub_title_cfield?.subTitle;
    // Content 
    const content = why_choose_us_section?.why_customer_choose_us?.nodes[0]?.content;
    // ALl carts reason
    const carts = why_choose_us_section?.why_customer_choose_us?.nodes[0]?.reason_cart?.nodes;
    
    return ( 
        <>
            <div id="why-choose-us" ></div>
            <div className="bg-container bg-blend-lighten rounded-xl bg-cover object-left bg-center overflow-hidden" data-aos="fade-up"   > 
            <Image alt={`why-choose-us-bg`} src={background} width={1000} height={200} quality={100} className="absolute w-full h-full object-cover z-[-20]" />
                <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] mx-auto py-10 px-5 lg:px-0 md:py-20 lg:py-20">
                    <div className="md:w-[650px] lg:w-[400px] mx-auto text-center py-7 m-auto ">
                        <p className="text-[#4169E1] text-[0.7rem] md:text-[0.9rem] font-inter font-[700] uppercase tracking-widest">
                            {title}
                        </p>
                        <h1 className="text-[1.5rem] md:text-[2rem] text-[#262856] font-bold py-2 lg:leading-tight">
                            {sub_title}
                        </h1>
                        <div className="text-[0.8rem] md:text-[0.9rem] font-[400] font-inter py-2 md:py-2 lg:my-2 text-[#434343]">
                            <article dangerouslySetInnerHTML={{__html:content}}></article>
                        </div>
                    </div>
                    <div className="w-[200px] md:w-[600px] lg:w-[1024px] mx-auto grid grid-col-1 lg:grid-cols-4 md:grid-cols-2 gap-12 my-3 md:my-10 ">
                    {
                    carts.map((card:ReasonCartNode)=>(
                        <div key={card?.title}>
                            <div className="relative bg-white w-[60px] h-[60px] rounded-full shadow-xl" data-aos="zoom-in-down">
                                    <Image alt={'benifit_image'} src={card?.featuredImage?.node?.sourceUrl} width={30} height={30} className="absolute left-[25%] top-[23%]" />
                            </div>
                            <p className="font-[700] text-[0.8rem] lg:text-[0.9rem] py-3 font-manrope mt-7">
                                    {card.title}
                            </p>
                            <div  className="text-[0.8rem] font-[400] font-inter">
                                <article dangerouslySetInnerHTML={{__html:card.content}}></article>   
                            </div>
                        </div>
                    ))
                        }
                    </div>
                </div>
            </div>
        </>
     );
}
export default Why_Choose_Us_Page; 