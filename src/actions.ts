import type { BoundingBox, ImageItem } from './types';

export const imageSelectedAction = (payload: ImageItem) => ({
  type: 'IMAGE_SELECTED',
  payload
} as const);

export const ocrScannedAction = (payload: BoundingBox[]) => ({
  type: 'OCR_SCANNED',
  payload
} as const);
