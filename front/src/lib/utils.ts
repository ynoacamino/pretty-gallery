import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { BACKEND_URL } from '@/config/global';
import { Image, ImageFields, RatioOptions } from '@/types/image';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function random({ min, max }: { min: number; max: number }): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getImageUrl = ({
  url,
  collectionId,
  id,
}: {
  url: string;
  collectionId: string;
  id: string;
}) => `${BACKEND_URL}/api/files/${collectionId}/${id}/${url}`;

export function getColumns({ elements }: { elements: Image[] }): Image[][] {
  const squareElements = elements.filter((e) => e[ImageFields.RATIO] === RatioOptions.SQUARE);
  const landscapeElements = elements.filter((e) => e[ImageFields.RATIO] === RatioOptions.LANDSCAPE);
  const portraitElements = elements.filter((e) => e[ImageFields.RATIO] === RatioOptions.PORTRAIT);

  const NUM_COLUMNS = 6;
  const NUM_ROWS = 5;

  const columns: Image[][] = Array.from({ length: NUM_COLUMNS }, () => []);

  const squema = [
    squareElements,
    landscapeElements,
    portraitElements,
  ];

  for (let i = 0; i < NUM_COLUMNS; i += 1) {
    for (let j = 0; j < NUM_ROWS; j += 1) {
      columns[i].push(squema[j % 3][random({ min: 0, max: squema[j % 3].length - 1 })]);
    }
  }

  for (let i = 0; i < NUM_COLUMNS; i += 1) {
    columns[i] = columns[i].sort(() => (Math.random() > 0.5 ? 1 : -1));
    columns[i] = columns[i].concat(columns[i]);
  }

  return columns;
}

export const bufferToFile = ({ buffer, fileName, mimeType }: { buffer: Buffer, fileName: string, mimeType: string }) => new File([buffer], fileName, { type: mimeType });
