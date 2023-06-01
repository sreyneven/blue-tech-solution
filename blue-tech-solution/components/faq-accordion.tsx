import Chevron_Right from "./icons/chevron-rith";

const Accordion = ({accordionData,accordionHandler,AccordionId}:any) => {
    const handleAccordion = (id:any)=>{
        if(id===AccordionId){
            accordionHandler('')
        }
        else{
            accordionHandler(id);
        }
    }
    return ( 
    <div className='lg:w-[600px] text-start py-4 border my-1 rounded-md border-gray-200 cursor-pointer px-3' onClick={() =>handleAccordion(accordionData.node.id)} >
        <div key={accordionData.node.id}>
            <div className="flex justify-between items-center">
                <p className="px-3 text-[0.8rem] md:text-[1rem] lg:text-[1rem] font-[500] font-dm-sans">
                    {accordionData?.node?.title}
                </p>
                <div  className= {`cursor-pointer font-bold ${AccordionId===accordionData.node.id ?'rotate-90':'rotate-0' }`}>
                    <Chevron_Right />
                </div>
            </div>
            <div className={`font-dm-sans font-[400] text-[0.8rem] md:text-[0.9rem] lg:text[0.9rem] pb-2 text-[#343D48] max-h-0 overflow-hidden transition-[max-height] ease-in-out duration-500 ${ AccordionId===accordionData.node.id && ' max-h-48 md:max-h-36 lg:max-h-32 delay-150'}`}>
                <div className="p-3">
                    <article dangerouslySetInnerHTML={{__html:accordionData?.node?.content}}></article>
                </div>
            </div>
        </div>
    </div>
     );
}
export default Accordion;