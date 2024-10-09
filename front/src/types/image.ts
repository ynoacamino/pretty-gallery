import { RecordModel } from 'pocketbase';

export enum ImageFields {
  RATIO = 'ratio',
  THUMBNAIL = 'thumbnail',
  FULL_SIZE = 'full_size',

  CREATED = 'CREATED',
  UPDATED = 'UPDATED',
}

export enum RatioOptions {
  SQUARE = 'SQUARE',
  LANDSCAPE = 'LANDSCAPE',
  PORTRAIT = 'PORTRAIT',
}

export enum ImageRatios {
  SQUARE = 'aspect-[1/1]',
  LANDSCAPE = 'aspect-[4/3]',
  PORTRAIT = 'aspect-[3/4]',
}

export enum ImageSizes {
  WIDTH_THUMBNAIL = 420,
  WIDTH_FULL_SIZE = 1080,
}

export enum HeihtsThumbnail {
  SQUARE = 420,
  LANDSCAPE = 315,
  PORTRAIT = 560,
}

export enum HeihtsFullSize {
  SQUARE = 1080,
  LANDSCAPE = 810,
  PORTRAIT = 1440,
}

export interface Image extends RecordModel {
  [ImageFields.RATIO]: RatioOptions;
  [ImageFields.THUMBNAIL]: string;
  [ImageFields.FULL_SIZE]: string;

  [ImageFields.CREATED]: string;
  [ImageFields.UPDATED]: string;
}
