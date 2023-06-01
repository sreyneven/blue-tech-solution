export interface SocialContactType {
    facebook: Facebook;
    telegram: Facebook;
    youtube:  Facebook;
    linkedin: Facebook;
}

export interface Facebook {
    __typename:                       string;
    title:                            string;
    content:                          null;
    uri:                              string;
    featuredImage:                    FeaturedImage;
    general_setting_cfield:           GeneralSettingCfield;
    social_media_contact_icon_cfield: SocialMediaContactIconCfield;
}

export interface FeaturedImage {
    __typename: string;
    node:       Node;
}

export interface Node {
    __typename: string;
    sourceUrl:  string;
}

export interface GeneralSettingCfield {
    __typename:   string;
    externalLink: string;
}

export interface SocialMediaContactIconCfield {
    __typename:       string;
    socialFooterIcon: Node ;
}
