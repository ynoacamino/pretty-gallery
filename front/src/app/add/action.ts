'use server';

import { addImage } from '@/lib/pb';
import { bufferToFile } from '@/lib/utils';
import {
  HeihtsFullSize, HeihtsThumbnail, ImageSizes, RatioOptions,
} from '@/types/image';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import sharp from 'sharp';

export const action = async (formData: FormData) => {
  const image = formData.get('image') as File;
  const ratio = formData.get('ratio') as RatioOptions;

  const thumbnail = await sharp(await image.arrayBuffer())
    .resize(ImageSizes.WIDTH_THUMBNAIL, HeihtsThumbnail[ratio], {
      fit: 'cover',
    })
    .webp()
    .toBuffer();

  const fullSize = await sharp(await image.arrayBuffer())
    .resize(ImageSizes.WIDTH_FULL_SIZE, HeihtsFullSize[ratio], {
      fit: 'cover',
    })
    .webp()
    .toBuffer();

  const fileThumbnail = bufferToFile({ buffer: thumbnail, fileName: 'thumbnail.webp', mimeType: 'image/webp' });
  const fileFullSize = bufferToFile({ buffer: fullSize, fileName: 'fullSize.webp', mimeType: 'image/webp' });

  await addImage({ ratio, thumbnail: fileThumbnail, fullSize: fileFullSize });

  revalidatePath('/');

  redirect('/');
};
