export interface GiphyResponse {
  data:       GiphyGif[];
  meta:       Meta;
  pagination: Pagination;
}

export interface GiphyGif {
  type:                       string;
  id:                         string;
  url:                        string;
  slug:                       string;
  bitly_gif_url:              string;
  bitly_url:                  string;
  embed_url:                  string;
  username:                   string;
  source:                     string;
  title:                      string;
  rating:                     string;
  content_url:                string;
  source_tld:                 string;
  source_post_url:            string;
  source_caption?:            string;
  is_sticker:                 number;
  import_datetime:            Date;
  trending_datetime:          string;
  images:                     Images;
  analytics_response_payload: string;
  analytics:                  Analytics;
  alt_text:                   string;
  is_low_contrast:            boolean;
  user?:                      User;
}

export interface Analytics {
  onload:  Onclick;
  onclick: Onclick;
  onsent:  Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original:                 FixedHeight;
  fixed_height:             FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small:       FixedHeight;
  fixed_width:              FixedHeight;
  fixed_width_downsampled:  FixedHeight;
  fixed_width_small:        FixedHeight;
}

export interface FixedHeight {
  height:    string;
  width:     string;
  size:      string;
  url:       string;
  mp4_size?: string;
  mp4?:      string;
  webp_size: string;
  webp:      string;
  frames?:   string;
  hash?:     string;
}

export interface User {
  avatar_url:    string;
  banner_image:  string;
  banner_url:    string;
  profile_url:   string;
  username:      string;
  display_name:  string;
  description:   string;
  instagram_url: string;
  website_url:   string;
  is_verified:   boolean;
}

export interface Meta {
  status:      number;
  msg:         string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count:       number;
  offset:      number;
}
