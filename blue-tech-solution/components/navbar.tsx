import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { HeaderType } from '../typescript/header_section_type';
import Modal_Demo from './request_demo_video';
import Menu_Icon from './icons/menu-icon';
import Close_Icon from './icons/close-icon';

// import Button from './Button'; 
const Navbar = ({header}:{header:HeaderType}) => {

  // First_Logo
  const first_logo = header?.first_logo[0]?.node?.general_setting_cfield?.firstLogo?.sourceUrl;
  // Get Main Menu
  const links = header?.main_menu[0]?.menuItems?.edges;
  // Request Demo Page
  const request_demo_image = header?.request_demo[0].node?.featuredImage?.node?.sourceUrl;
  // Request Demo title
  const request_demo_title = header?.request_demo[0].node?.title;
  // Demo Video Link
  const request_demo_video  = header?.request_demo[0].node?.request_demo_video?.requestDemoVideo;
  
  const { asPath } = useRouter();

  let [open,setOpen]=useState(false);

  // Show demo modal
  const [showModal , setShowModal] = useState(false);

  return (
    <>
      <div className='w-full fixed top-0 z-50 bg-white shadow-sm md:backdrop-blur-sm lg:bg-white/30'>
        <div className='max-w-[1070px] mx-auto flex items-center justify-between py-3 px-2 '>
          <div className='z-40'>
            <div className='cursor-pointer lg:mx-0 mx-3'>
              <Link href="https://sreyneven-blue-tech-solution.vercel.app/">
                <Image  alt={'First_Logo'} src={first_logo}  width={125} height={40} priority={true} />
              </Link>
            </div>
            <div onClick={()=>setOpen(!open)} className='lg:text-3xl sm:text-xl absolute right-8 top-2 cursor-pointer md:hidden'>
              {
                  open
                  ?
                  <Menu_Icon />
                  :
                  <Close_Icon />
              }
            </div>
          </div>
          <div className={`w-full absolute md:static left-0 top-0 z-[0] lg:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in font-sans bg-white lg:bg-opacity-0 md:bg-opacity-0  ${ open ? 'top-12':'top-[-490px]'}`}>
            <div  className={`md:flex justify-evenly items-center lg:py-0 md:py-0 py-4`}>
                <ul className={`md:flex items-center lg:py-0 md:py-0 py-2`}>
                    { 
                    links.map((link:any)=>{
                      let fullPath:string = link?.node?.path;
                      let splitPath = fullPath.split('/').join('');
                      return(
                            <li key={link?.node?.label} className='md:my-0 my-5 lg:px-5 md:px-3.5'>
                                <Link href={"#" + splitPath} 
                                className={`hover:text-[#467DFF] text-[#434343] text-[0.9rem] font-inter font-[400] ${ '/#'+splitPath == asPath ? "active":""}` }
                                onClick={()=>setOpen(!open)}
                                >
                                  {link?.node?.label}
                                </Link> 
                            </li>
                          )
                      })
                    }
                </ul>
                <button className="bg-[#4169E1] text-white duration-500 px-2 py-3 hover:bg-[#467DFF] lg:mx-10  rounded-md mb-4 lg:mb-0 md:mb-0" onClick = {()=>setShowModal(true)} >
                    <div className='flex items-center' onClick={()=>setOpen(!open)}>
                      <Image alt={'request_demo_icon'} src={request_demo_image} width={20} height={20} />
                      <p className='px-1.5 text-[0.8rem] font-manrope font-[600]'>{request_demo_title}</p>
                    </div>
                </button>
            </div>
          </div>
        </div>
      </div>
      <Modal_Demo isVisible={showModal}  onClose = {()=>{setShowModal(false)}} request_demo_video={request_demo_video}  />
    </>
    
  )
}
export default Navbar;      