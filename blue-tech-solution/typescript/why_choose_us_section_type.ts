import { Key } from "react";

export interface WhyChooseUsType {
    featuredImage: any;
    __typename:             string;
    title:                  string;
    uri:                    string;
    why_customer_choose_us: WhyCustomerChooseUs;
}

export interface WhyCustomerChooseUs {
    __typename: string;
    nodes:      WhyCustomerChooseUsNode[];
}

export interface WhyCustomerChooseUsNode {
    __typename:       string;
    title:            string;
    content:          string;
    sub_title_cfield: SubTitleCfield;
    reason_cart:      ReasonCart;
}

export interface ReasonCart {
    title: Key;
    __typename: string;
    nodes:      ReasonCartNode[];
}

export interface ReasonCartNode {
    __typename:    string;
    title:         string;
    content:       string;
    featuredImage: FeaturedImage;
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