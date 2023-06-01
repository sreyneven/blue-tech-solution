export interface ContactUsType {
    featuredImage: any;
    __typename: string;
    title:      string;
    uri:        string;
    children:   Children;
}

export interface Children {
    __typename: string;
    nodes:      NodeElement[];
}

export interface NodeElement {
    __typename:       string;
    title:            string;
    content:          string;
    sub_title_cfield: SubTitleCfield;
    featuredImage:    FeaturedImage;
}

export interface FeaturedImage {
    __typename: string;
    node:       FeaturedImageNode;
}

export interface FeaturedImageNode {
    __typename: string;
    sourceUrl:  string;
}

export interface SubTitleCfield {
    __typename: string;
    subTitle:   string;
}

