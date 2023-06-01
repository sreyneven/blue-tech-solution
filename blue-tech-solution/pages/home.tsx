import Image from "next/image";
import { HomeType } from "../typescript/home_section_type";
import 'animate.css';
import Link from "next/link";
import Arrow_Down from "../components/icons/arrow-down-circle";

const Home = ({home_section }:{home_section:HomeType }) => {
    // Background Home Section
        const background = home_section?.featuredImage?.node?.sourceUrl;
    // Slidebar
        // Slidebar_title
        const  title = home_section?.slide_bar?.nodes[0]?.title;
        // Slidebar_content
        const content = home_section?.slide_bar?.nodes[0]?.content;
        // Slidebar_Image
        const Image_Slidebar = home_section?.slide_bar?.nodes[0]?.featuredImage?.node?.sourceUrl;

        const convertTitle = (title: string, phrase: string) =>{
            return title.toLowerCase().replace(phrase, `<span lang="es">${phrase}</span>`)
        }        
    return ( 
        <>
            <div id="home_section"></div>
            <div className="bg-container bg-blend-lighten h-100% bg-cover object-left-top overflow-hiddene">  
            <Image  alt={`home-bg`} src={background} width={1000} height={200} quality={100} className="absolute w-full h-full object-cover z-[-20]" />        
                <div className="lg:w-[1034px] md:w-[768px] sm:w-[640px] overflow-hidden pt-24 py-5 px-5 lg:px-0  mx-auto lg:flex justify-between lg:text-start text-center gap-10">
                    <div className="animate__animated animate__fadeInRight lg:py-16">
                        <h1 className="text-[1.5rem] md:text-[2rem] lg:text-[2.2rem] text-[#262856] capitalize TitleTransform lg:py-4 lg:leading-tight" dangerouslySetInnerHTML={{__html:convertTitle(title, 'blue tech')}}></h1>
                        <div className="lg:w-[425px] text-[0.9rem] md:text-[0.9rem] py-3 lg:py-5 font-open-san font-[400]">
                            <article dangerouslySetInnerHTML={{__html:content}}></article> 
                        </div>
                        <button  type="button">
                            <Link href="#products" className="text-[#262856] px-0 py-5 text-center inline-flex items-center my-1 md:my-2 lg:my-1 text-[0.8rem]  lg:text-[0.9rem] font-[600] font-inter vert-move">
                                Scroll down to explore
                               <Arrow_Down />
                            </Link>
                        </button>
                    </div>
                    <div className="my-5 mx-auto animate__animated animate__fadeInLeft" >
                        <Image src={Image_Slidebar} alt={'home_image'} width={1019} height={709} priority={true} />
                    </div>
                </div>
                
            </div>
        </>
     );
}
export default Home;