import client from "../apollo/client";
import { Get_All_Queries } from "../queries/get_all_queries";
import Layout from "../components/layout";
import Head from "next/head";
import Home from "./home";
import Why_Choose_Us_Page from "./why_choose_us";
import LOAN_MANAGEMENT from "./products/loan_management";
import TAX_MANAGEMENT from "./products/tax_management";
import Contact_us from "./contact";
import FAQs from "./faqs";
import { HomeType } from "../typescript/home_section_type";
import { HeaderType } from "../typescript/header_section_type";
import { WhyChooseUsType } from "../typescript/why_choose_us_section_type";
import { ProductsType } from "../typescript/products_section_type";
import { ContactUsType } from "../typescript/contact_us_section_type";
import { ContactInfoType } from "../typescript/contact_info_type";
import { FAQsType } from "../typescript/faqs_section_type";
import { FooterType } from "../typescript/footer_section_type";
import { SocialContactType } from "../typescript/social_media_contact_type";

type dataType = {
  header: HeaderType,
  home_section: HomeType , 
  why_choose_us_section: WhyChooseUsType , 
  products_section: ProductsType , 
  contact_us_section: ContactUsType , 
  contact_info: ContactInfoType , 
  faqs_section: FAQsType , 
  footer_section: FooterType,
  social_contact: SocialContactType,
}
const blueTech =({data}:{data:dataType} )=> {  
  return (
    <Layout nav={data.header} footer_section={data.footer_section} contact_info={data.contact_info} social_contact={data.social_contact}  >
        <div className="w-full min-h-screen">
        <Head>
          <title>Blue Tech Solution</title>
          <meta name="description" content="blue tech solution" />
          <link rel="shortcut icon" href="favicon/logo.ico" type="image/x-icon" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <main>
          {/*Home Section*/}
          <Home home_section={data.home_section}   />
          <Why_Choose_Us_Page why_choose_us_section = {data.why_choose_us_section}/>
          <LOAN_MANAGEMENT products_section={data.products_section}/>
          <TAX_MANAGEMENT products_section={data.products_section}/>
          <Contact_us  contact_us_section={data.contact_us_section} contact_info={data.contact_info}/>
          <FAQs faqs_section={data.faqs_section}/> 
        </main>
        </div>
      </Layout>
  )
};
export default blueTech;

export async function getStaticProps( ) {
    const { data } = await client.query( {
    query: Get_All_Queries,
	} );
  return {
    props: {
      data:{

        // Header
        header : {
          first_logo: data?.first_logo?.edges,
          main_menu: data?.main_menu?.nodes,
          request_demo:data?.request_demo?.edges,
        },
        // ----------------Home Section-----------------
        home_section:data?.home_page,
        // ----------------Why choose us Section--------
        why_choose_us_section : data?.why_choose_us,
        //-----------------Get Product Section----------
        products_section:data?.products_page,
        //-----------------Contact_us_Section------------
        contact_us_section:data?.contact_us,
        // ----------------FAQs Section------------------
        faqs_section:data?.faqs_page?.Question_Answer,
        // ----------------Footer Section----------------
        footer_section:{
                second_logo : data?.second_logo,
                footer_first_description : data?.first_description,
                quick_link_menu:data?.quick_link_menu,
                service_menu:data?.service_menu,
                footer_second_description:data?.second_description,
                footer_menu:data?.footer_menu,
        },
        all_data:data,
        // ================ General Information=================
        // ---------------Contact Info-------------------
        contact_info:{
          email_address:data?.email_address,
          phone_number:data?.phone_number,
          location_info:data?.location_info,

        },        
        // --------------Socail Contact-------------------
        social_contact:{
              facebook : data?.facebook,
              telegram:data?.telegram,
              youtube:data?.youtube,
              linkedin:data?.linkedIn,
        }
      },
    } // will be passed to the page component as props
  }  

}
