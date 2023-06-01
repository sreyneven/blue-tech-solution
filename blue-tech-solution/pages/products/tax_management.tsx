import Image from "next/image";
import { Edge, ProductsType } from "../../typescript/products_section_type";
import Arrow_Right from "../../components/icons/arrow-right";

const TAX_MANAGEMENT = ({products_section}:{products_section:ProductsType})=>{
    
    // Background Image
    const background = products_section?.featuredImage?.node?.sourceUrl;
    // title 
    const title = products_section?.all_products?.nodes[1]?.title;
    // sub_title
    const  sub_title = products_section?.all_products?.nodes[1]?.sub_title_cfield?.subTitle;
    // content 
    const content = products_section?.all_products?.nodes[1].content;
    //  Image_Loan management 
    const tax_management_image = products_section?.all_products?.nodes[1]?.featuredImage?.node?.sourceUrl;
    // carts benifit_sub_page
    const carts = products_section?.all_products?.nodes[1]?.benifit_sub_pages?.edges
    return(
        <div className="bg-container bg-blend-lighten rounded-xl bg-cover object-right bg-center overflow-hidden" data-aos="fade-up">
            <Image alt={`products-bg`} src={background} width={1000} height={200} quality={100} className="absolute w-full h-full object-cover z-[-20]" />
            <div  className="lg:w-[1024px] md:w-[768px] sm:w-[640px] lg:py-0 lg:pb-10 px-5 py-5 mx-auto lg:px-0 lg:flex items-center justify-between lg:text-start text-center gap-5">            
                <div data-aos="zoom-in">
                    <Image  alt={'tax_management_image'} src={tax_management_image} width={810.1} height={478} data-aos="fade-up" />
                </div>
                <div className="lg:w-[620px] md:w-[620px] mx-auto">
                    <p className="text-[#4169E1] text-[0.7rem] md:text-[0.9rem] font-inter font-[700] uppercase tracking-widest">
                      {title}
                    </p>
                    <h1 className="text-[1.5rem] md:text-[2rem] text-[#262856] font-bold py-3 lg:leading-tight">
                      {sub_title}
                    </h1>
                    <div className="text-[0.8rem] md:text-[0.9rem] font-[400] font-inter py-1 text-[#434343]">
                       <article dangerouslySetInnerHTML={{__html:content}}></article>
                    </div>
                    {/* Benifit Sub Page */}
                    <div className="grid items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 justify-center mx-auto w-[240px] lg:w-[500px] md:w-[500px] my-3">
                    {
                        carts.map((cart:Edge)=>(
                            <div key={cart?.node?.title} className='flex items-center py-1.5'>
                                <Image  alt={'benifit_image'} src={cart?.node?.featuredImage?.node?.sourceUrl} width={20} height={20} />
                                <p className="px-2 text-[0.9rem]  font-inter font-[600] text-[#194060]">
                                        {cart?.node?.title}
                                </p>
                            </div>
                        ))
                    }
                    </div>
                    {/* button explore */}
                    <button type="button" className="text-white focus:outline-none bg-[#4169E1] hover:bg-[#467DFF] rounded-[6px] text-[0.8rem] px-5 py-3 text-center inline-flex items-center my-10 font-manrope font-[500]">
                       Explore more
                       <Arrow_Right />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TAX_MANAGEMENT;
