export interface FAQsType {
    __typename: string;
    edges:      FAQsTypeEdge[];
}

export interface FAQsTypeEdge {
    __typename: string;
    node:       PurpleNode;
}

export interface PurpleNode {
    __typename:    string;
    id:            string;
    title:         string;
    content:       string;
    featuredImage: FeaturedImage;
    all_q_and_a:   AllQAndA;
}

export interface AllQAndA {
    __typename: string;
    edges:      AllQAndAEdge[];
}

export interface AllQAndAEdge {
    __typename: string;
    node:       FluffyNode;
}

export interface FluffyNode {
    __typename: string;
    id:         string;
    title:      string;
    content:    string;
    menuOrder:  number;
}

export interface FeaturedImage {
    __typename: string;
    node:       FeaturedImageNode;
}

export interface FeaturedImageNode {
    __typename: string;
    sourceUrl:  string;
}

