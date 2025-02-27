import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBannerImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_banner_images';
  info: {
    description: '';
    displayName: 'bannerImage';
    icon: 'code';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'button';
    icon: 'apps';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean;
    title: Schema.Attribute.String;
  };
}

export interface SharedButtonGroup extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_groups';
  info: {
    description: '';
    displayName: 'buttonGroup';
    icon: 'book';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SharedButtonObj extends Struct.ComponentSchema {
  collectionName: 'components_shared_button_objs';
  info: {
    description: '';
    displayName: 'buttonObj';
    icon: 'bell';
  };
  attributes: {
    isVisible: Schema.Attribute.Boolean;
    parag: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'contact';
    icon: 'connector';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedDesign extends Struct.ComponentSchema {
  collectionName: 'components_shared_designs';
  info: {
    displayName: 'design';
    icon: 'bulletList';
  };
  attributes: {
    companyName: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    name: Schema.Attribute.String;
  };
}

export interface SharedLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'links';
    icon: 'connector';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedMenu extends Struct.ComponentSchema {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'menu';
    icon: 'connector';
  };
  attributes: {};
}

export interface SharedQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_quick_links';
  info: {
    description: '';
    displayName: 'quickLinks';
    icon: 'clock';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.links', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedRights extends Struct.ComponentSchema {
  collectionName: 'components_shared_rights';
  info: {
    displayName: 'rights';
    icon: 'briefcase';
  };
  attributes: {
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSocialLinks extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'socialLinks';
    icon: 'calendar';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner-image': SharedBannerImage;
      'shared.button': SharedButton;
      'shared.button-group': SharedButtonGroup;
      'shared.button-obj': SharedButtonObj;
      'shared.contact': SharedContact;
      'shared.design': SharedDesign;
      'shared.links': SharedLinks;
      'shared.media': SharedMedia;
      'shared.menu': SharedMenu;
      'shared.quick-links': SharedQuickLinks;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.rights': SharedRights;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.social-links': SharedSocialLinks;
    }
  }
}
