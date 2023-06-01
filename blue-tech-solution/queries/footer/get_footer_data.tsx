import { Get_First_Description } from "./get_first_description";
import { Get_Second_Description } from "./get_second_description";
import { Get_Second_Logo } from "../pages/general/get_second.logo";
import { Get_Quick_Link_Menu } from "../manus/get_quick_menu";
import { Get_Service_Menu } from "../manus/get_service_menu";
import { Get_Footer_Menu } from "../manus/get_footer_menu";

export const Get_Footer_Data  = `
    ${Get_Second_Logo}
    ${Get_Quick_Link_Menu}
    ${Get_Service_Menu}
    ${Get_First_Description}
    ${Get_Second_Description}
    ${Get_Footer_Menu}
`