export interface HeaderType {
    first_logo:   FirstLogoElement[];
    main_menu:    MainMenu[];
    request_demo: RequestDemo[];
}

export interface FirstLogoElement {
    __typename: string;
    node:       FirstLogoNode;
}

export interface FirstLogoNode {
    __typename:             string;
    general_setting_cfield: GeneralSettingCfield;
}

export interface GeneralSettingCfield {
    __typename: string;
    firstLogo:  FirstLogoClass;
}

export interface FirstLogoClass {
    __typename: string;
    sourceUrl:  string;
}

export interface MainMenu {
    __typename: string;
    id:         string;
    databaseId: number;
    slug:       string;
    menuItems:  Items;
}

export interface EdgeNode {
    __typename: string;
    label:      string;
    url:        string;
    title:      null;
    path:       string;
    order:      number;
    uri:        string;
    childItems: Items[];
}

export interface Edge {
    __typename: string;
    node:       EdgeNode[];
}

export interface Items {
    __typename: string;
    edges:      Edge[];
}

export interface RequestDemo {
    __typename: string;
    node:       RequestDemoNode;
}

export interface RequestDemoNode {
    request_demo_video: any;
    external_link_cfield: any;
    __typename:    string;
    title:         string;
    featuredImage: FeaturedImage;
}

export interface FeaturedImage {
    __typename: string;
    node:       FirstLogoClass;
}
