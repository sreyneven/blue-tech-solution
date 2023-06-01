export interface ContactInfoType {
    email_address: EmailAddress;
    phone_number:  EmailAddress;
    location_info: EmailAddress;
}

export interface EmailAddress {
    __typename:    string;
    title:         string;
    content:       string;
    uri:           string;
    featuredImage: FeaturedImage;
}
export interface FeaturedImage {
    __typename: string;
    node:       Node;
}

export interface Node {
    __typename: string;
    sourceUrl:  string;
}

