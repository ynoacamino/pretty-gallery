import { Collections } from '@/types/collections';
import { Image, ImageFields } from '@/types/image';
import PocketBase from 'pocketbase';
import { BACKEND_URL } from '@/config/global';

export const pb = new PocketBase(BACKEND_URL);

export const getImages = async () => await pb.collection(Collections.IMAGES).getFullList() as Image[];

export const addImage = async ({
  ratio, thumbnail, fullSize,
}: {
  ratio: string;
  thumbnail: File;
  fullSize: File;
}) => {
  const formData = new FormData();
  formData.append(ImageFields.RATIO, ratio);
  formData.append(ImageFields.THUMBNAIL, thumbnail);
  formData.append(ImageFields.FULL_SIZE, fullSize);

  await pb.collection(Collections.IMAGES).create(formData);
};
