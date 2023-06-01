export interface ProductsType {
    all_products: any;
    featuredImage: any;
    __typename: string;
    nodes:      NodeElement[];
}

export interface NodeElement {
    __typename:        PurpleTypename;
    title:             string;
    sub_title_cfield:  SubTitleCfield;
    content:           string;
    featuredImage:     FeaturedImage;
    benifit_sub_pages: BenifitSubPages;
}

export enum PurpleTypename {
    Page = "Page",
}

export interface BenifitSubPages {
    __typename: string;
    edges:      Edge[];
}

export interface Edge {
    __typename: EdgeTypename;
    node:       EdgeNode;
}

export enum EdgeTypename {
    HierarchicalContentNodeToContentNodeChildrenConnectionEdge = "HierarchicalContentNodeToContentNodeChildrenConnectionEdge",
}

export interface EdgeNode {
    __typename:    PurpleTypename;
    uri:           string;
    id:            string;
    title:         string;
    featuredImage: FeaturedImage;
}

export interface FeaturedImage {
    __typename: FeaturedImageTypename;
    node:       FeaturedImageNode;
}

export enum FeaturedImageTypename {
    NodeWithFeaturedImageToMediaItemConnectionEdge = "NodeWithFeaturedImageToMediaItemConnectionEdge",
}

export interface FeaturedImageNode {
    __typename: FluffyTypename;
    sourceUrl:  string;
}

export enum FluffyTypename {
    MediaItem = "MediaItem",
}

export interface SubTitleCfield {
    __typename: string;
    subTitle:   string;
}