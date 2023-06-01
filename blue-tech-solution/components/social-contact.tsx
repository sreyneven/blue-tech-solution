import Link from "next/link";
import Image from "next/image";
import { SocialContactType } from "../typescript/social_media_contact_type";

const Social_Contact = ({social_contact}:{ social_contact:SocialContactType}) => {
      // Socail  media Contact
      const facebook_icon = social_contact?.facebook?.featuredImage?.node?.sourceUrl;
      const facebook_externallink = social_contact?.facebook?.general_setting_cfield?.externalLink;

      const linkedIn_icon = social_contact?.linkedin?.featuredImage?.node?.sourceUrl;
      const linkedIn_externallink = social_contact?.linkedin?.general_setting_cfield?.externalLink;

      const telegram_icon = social_contact?.telegram?.featuredImage?.node?.sourceUrl;;
      const telegram_externallink = social_contact?.telegram?.general_setting_cfield?.externalLink;

      const youtube_icon = social_contact?.youtube?.featuredImage?.node?.sourceUrl;
      const youtube_externallink = social_contact?.youtube?.general_setting_cfield?.externalLink;
    return ( 
        <div className="flex flex-col-reverse items-center fixed left-0 top-60 z-20">
            <p className="py-10 rotate-[270deg] text-[#262856] font-[600] font-inter text-[0.7rem]">Follow Us - </p>
            <Link href={`${facebook_externallink}`}><Image  alt={`facebook_icon`} src={facebook_icon}  width={9}  height={9}  className="pt-2"/></Link>
            <Link href={`${linkedIn_externallink}`}><Image  alt={`linkedIn_icon`} src={linkedIn_icon}  width={13} height={10} className="py-2" /></Link>
            <Link href={`${youtube_externallink}`} ><Image  alt={`youtube_icon`}  src={youtube_icon}   width={13} height={13} className="py-2" /></Link>
            <Link href={`${telegram_externallink}`}><Image  alt={`telegram_icon`} src={telegram_icon}  width={13} height={13} className="py-2" /></Link>
        </div>
     );
}
 
export default Social_Contact;