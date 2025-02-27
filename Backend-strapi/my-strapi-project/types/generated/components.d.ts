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
    title: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.banner-image': SharedBannerImage;
      'shared.button': SharedButton;
      'shared.button-group': SharedButtonGroup;
      'shared.button-obj': SharedButtonObj;
      'shared.media': SharedMedia;
      'shared.menu': SharedMenu;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
