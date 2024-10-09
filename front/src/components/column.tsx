'use client';

import { useGallery } from '@/lib/hooks';
import { cn, getImageUrl } from '@/lib/utils';
import {
  HeihtsFullSize, Image, ImageRatios, ImageSizes,
} from '@/types/image';
import { motion } from 'framer-motion';

export default function Column({ elements }: { elements: Image[] }) {
  const galleryId = 'gallery';

  useGallery({ id: galleryId });

  return (
    <motion.div
      className="flex flex-col"
      animate={{ y: '-50%' }}
      transition={{
        repeat: Infinity,
        duration: 18 + Math.round(Math.random() * 15),
        ease: 'linear',
      }}
      id={galleryId}
    >
      {
        elements.map(({
          full_size, thumbnail, id, ratio, collectionId,
        }) => (
          <a
            href={getImageUrl({
              collectionId,
              id,
              url: full_size,
            })}
            data-pswp-width={ImageSizes.WIDTH_FULL_SIZE}
            data-pswp-height={HeihtsFullSize[ratio]}
            key={crypto.randomUUID()}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <img
              key={crypto.randomUUID()}
              className={cn('bg-gray-200 rounded-md mb-4', ImageRatios[ratio])}
              src={getImageUrl({
                collectionId,
                id,
                url: thumbnail,
              })}
              alt={id}
            />
          </a>
        ))
      }
    </motion.div>
  );
}
