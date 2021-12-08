export interface ImageItem {
  name: string;
  url: string;
}

export enum AppActionType {
  SELECT_IMAGE = 'SELECT_IMAGE',
}

export interface AppState {
  selectedImage?: ImageItem;
}

export interface SelectImageAction {
  type: AppActionType.SELECT_IMAGE,
  payload: ImageItem;
}

export type AppAction = SelectImageAction;