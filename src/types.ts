import { imageSelectedAction, ocrScannedAction } from './actions';

export interface ImageItem {
  name: string;
  url: string;
}

export interface AppState {
  selectedImage?: ImageItem;
  /** The areas of the view that where text is found */
  bboxes?: BoundingBox[];
}

// These match tesseracts bounding box
export interface BoundingBox {
  x0: number;
  y0: number;
  x1: number;
  y1: number;
}

export type AppAction =
  | ReturnType<typeof imageSelectedAction>
  | ReturnType<typeof ocrScannedAction>;
