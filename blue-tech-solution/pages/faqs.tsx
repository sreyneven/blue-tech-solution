import Image from "next/image";
import React , {useState} from "react";
import { AllQAndAEdge, FAQsType } from "../typescript/faqs_section_type";
import Accordion from "../components/faq-accordion";

const FAQs = ({faqs_section}:{faqs_section:FAQsType})=>{
    // title 
    const title = faqs_section?.edges[0]?.node?.title;
    // content 
    const content = faqs_section?.edges[0]?.node?.content;
    // Image FAQs section
    const faqs_image = faqs_section?.edges[0]?.node?.featuredImage?.node?.sourceUrl
    // All question and answer
    const all_qas = faqs_section?.edges[0]?.node?.all_q_and_a?.edges;
    const [open, setOpen] = useState(false);
    const [currentAccordionId, setCurrentAccordionId] =useState('');
    const handleAccordion = (id:any)=>{
        setCurrentAccordionId(id);    
    }
    const toggle = (i:any) =>{
        if(open === i) {
            return setOpen(true);
        }
        setOpen(i)
    }
    const convertTitle = (title: string, phrase: string) =>{
        return title.toLowerCase().replace(phrase, `<span>${phrase}</span>`)
    }
    return (
        <>
            <div id="faqs" ></div>
            <div className="lg:w-[1024px] md:w-[768px] sm:w-[640px] lg:py-20 px-5 py-10 mx-auto lg:px-0 lg:flex items-center justify-between lg:text-start text-center gap-7" data-aos="fade-up">
                <div className="flex flex-col justify-center w-[100%] lg:px-0 px-10">
                    <div className="lg:w-[439px]">
                        <p className="text-[#4169E1] text-[0.7rem] md:text-[0.9rem] font-inter font-[700] uppercase tracking-widest py-5" >
                        {title}
                        </p>
                        <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-[#262856] font-bold capitalize contentTransform" dangerouslySetInnerHTML={{__html:convertTitle(content, 'asked')}}>
                    </h1>
                    </div>
                    <div className="my-3 mx-auto lg:mx-0" data-aos="zoom-in">
                        <Image alt={'faqs_image'} src={faqs_image} width={320} height={428.02} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center rounded-xl py-5 md:mx-2 lg:mx-0">                
                    {
                        all_qas.map((qa:AllQAndAEdge)=>(
                            <Accordion accordionData={qa} accordionHandler={handleAccordion} AccordionId={currentAccordionId}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default FAQs;