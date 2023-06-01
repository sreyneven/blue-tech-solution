export interface FooterType {
    second_logo:               SecondLogo;
    footer_first_description:  FooterFirstDescription;
    quick_link_menu:           Menu;
    service_menu:              Menu;
    footer_second_description: FooterSecondDescription;
    footer_menu:               Menu;
}

export interface FooterFirstDescription {
    __typename:    string;
    title:         string;
    footer_cfield: FooterFirstDescriptionFooterCfield;
}

export interface FooterFirstDescriptionFooterCfield {
    __typename:       string;
    firstDescription: string;
}

export interface Menu {
    __typename: string;
    nodes:      NodeElement[];
}

export interface NodeElement {
    __typename: string;
    id:         string;
    databaseId: number;
    slug:       string;
    menuItems:  Items;
}

export interface PurpleNode {
    __typename:  NodeTypename;
    label:       string;
    url:         string;
    title:       null;
    path:        string;
    order:       number;
    childItems?: Items;
}

export interface MenuItemsEdge {
    __typename: EdgeTypename;
    node:       PurpleNode;
}

export interface Items {
    __typename: MenuItemsTypename;
    edges:      MenuItemsEdge[];
}

export enum NodeTypename {
    MenuItem = "MenuItem",
}

export enum EdgeTypename {
    MenuToMenuItemConnectionEdge = "MenuToMenuItemConnectionEdge",
}

export enum MenuItemsTypename {
    MenuItemToMenuItemConnection = "MenuItemToMenuItemConnection",
    MenuToMenuItemConnection = "MenuToMenuItemConnection",
}

export interface FooterSecondDescription {
    __typename:    string;
    title:         string;
    footer_cfield: FooterSecondDescriptionFooterCfield;
}

export interface FooterSecondDescriptionFooterCfield {
    __typename:        string;
    secondDescription: string;
}

export interface SecondLogo {
    __typename: string;
    edges:      SecondLogoEdge[];
}

export interface SecondLogoEdge {
    __typename: string;
    node:       FluffyNode;
}

export interface FluffyNode {
    __typename:             string;
    general_setting_cfield: GeneralSettingCfield;
}

export interface GeneralSettingCfield {
    __typename: string;
    secondLogo: SecondLogoClass;
}

export interface SecondLogoClass {
    __typename: string;
    sourceUrl:  string;
}
