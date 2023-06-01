export interface HomeType {
    featuredImage: any;
    title:      string;
    uri:        string;
    slide_bar:  SlideBar;
}

export interface SlideBar {
    nodes:      NodeElement[];
}

export interface NodeElement {
    __typename:    string;
    title:         string;
    content:       string;
    featuredImage: FeaturedImage;
}

export interface FeaturedImage {
    node:       FeaturedImageNode;
}

export interface FeaturedImageNode {
    sourceUrl:  string;
}