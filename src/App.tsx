import { VFC, useReducer } from 'react';
import { ImageSelector } from './components/ImageSelector/ImageSelector';
import { ImageViewer } from './components/ImageViewer';

import { parseImage } from './OCR';
import { AppActionType } from './types';

import type { AppState, AppAction, ImageItem } from './types';

const reducer = (state: AppState | null, action: AppAction) : AppState | null => {
  const { type, payload } = action;

  switch (type) {
    case AppActionType.SELECT_IMAGE:
      return { ...state, selectedImage: payload };

    default:
      return state;
  }
};

const images: ImageItem[] = [
  {
    name: 'Receipt 1',
    url: 'img/receipt.jpg',
  }
];

export const App: VFC = () => {
  const [state, dispatch] = useReducer(reducer, null);

  const handleClick = (payload: ImageItem) => {
    dispatch({ type: AppActionType.SELECT_IMAGE, payload });
  };

  const handleClickOCR = async (imageURL: string) => {
    const result = await parseImage(imageURL);

    console.log(result);
  };

  return (
    <>
    <ImageSelector onSelect={handleClick} images={images} />
    {state?.selectedImage && (
      <ImageViewer image={state.selectedImage} onClickOCR={handleClickOCR} />
    )}
    </>
  );
}