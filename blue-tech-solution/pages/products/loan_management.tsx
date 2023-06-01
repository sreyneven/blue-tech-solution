import Image from "next/image";
import { Edge, ProductsType } from "../../typescript/products_section_type";
import Arrow_Right from "../../components/icons/arrow-right";

const LOAN_MANAGEMENT = ({products_section}:{products_section:ProductsType})=>{
    const background = products_section?.featuredImage?.node?.sourceUrl;
    // title 
    const title = products_section?.all_products?.nodes[0]?.title;
    // sub_title
    const  sub_title = products_section?.all_products?.nodes[0]?.sub_title_cfield?.subTitle;
    // content 
    const content = products_section?.all_products?.nodes[0].content;
    //  Image_Loan management 
    const loan_management_image = products_section?.all_products?.nodes[0]?.featuredImage?.node?.sourceUrl;
    // carts benifit_sub_page
    const carts = products_section?.all_products?.nodes[0]?.benifit_sub_pages?.edges
        
    return(
        <>
            <div id="products"></div>
            <div data-aos="fade-up"  className="bg-container bg-blend-lighten rounded-xl bg-cover object-left bg-center overflow-hidden" >
            <Image alt={`products-bg`} src={background} width={1000} height={200} quality={100} className="absolute w-full h-full object-cover z-[-20]" />
                <div  className="lg:w-[1024px] md:w-[768px] sm:w-[640px] py-10 lg:py-20 px-5  mx-auto lg:px-0  lg:flex items-center justify-between lg:text-start text-center gap-5">
                        <div className="lg:w-[625px] md:w-[625px] mx-auto py-5">
                            <p className="text-[#4169E1] text-[0.7rem] md:text-[0.9rem] font-inter font-[700] uppercase tracking-widest">
                            {title}
                            </p>
                            <h1 className="text-[1.5rem] md:text-[2rem] text-[#262856] font-bold py-3">
                            {sub_title}
                            </h1>
                            <div className="text-[0.9rem] font-[400] font-inter py-1 text-[#434343]">
                            <article dangerouslySetInnerHTML={{__html:content}}></article>
                            </div>
                            {/* Benifit Sub Page */}
                        <div className="grid items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 justify-center mx-auto w-[240px] lg:w-[512px] md:w-[512px] my-3">
                        {
                            carts.map((cart:Edge)=>(
                                <div key={cart?.node?.title} className='flex items-center py-1.5'>
                                    <Image alt={'benifit_image'} src={cart?.node?.featuredImage?.node?.sourceUrl} width={18} height={18} />
                                    <p className="px-1 text-[0.9rem] font-inter font-[600] text-[#194060] ">
                                        {cart?.node?.title}
                                    </p>
                                </div>
                            ))
                            }
                        </div>
                        {/* button explore */}
                        <button type="button" className="text-white focus:outline-none bg-[#4169E1] hover:bg-[#467DFF] rounded-[6px] text-[0.8rem] px-5 py-3 text-center inline-flex items-center mt-10 font-manrope font-[500]">
                        Explore more
                        <Arrow_Right />
                        </button>
                    </div>
                    <div className="mx-auto lg:px-0 px-5 lg:my-0 my-10 " data-aos="zoom-in">
                        <Image alt={'loan_management_image'} src={loan_management_image} width={810.1} height={478} />
                    </div>
                </div>
        </div>
        </>
    )
}
export default LOAN_MANAGEMENT;
