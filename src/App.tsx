import { VFC, useReducer } from 'react';
import { ChakraProvider } from '@chakra-ui/react'

import { ImageSelector } from './components/ImageSelector';
import { ImageViewer } from './components/ImageViewer';

import { parseImage } from './OCR';
import { imageSelectedAction, ocrScannedAction } from './actions';

import type { AppState, AppAction, ImageItem } from './types';

const reducer = (state: AppState | null, action: AppAction) : AppState | null => {
  switch (action.type) {
    case 'IMAGE_SELECTED':
      return { ...state, selectedImage: action.payload };

    case 'OCR_SCANNED':
        return { ...state, bboxes: action.payload };

    default:
      return state;
  }
};

const images: ImageItem[] = [
  {
    name: 'Small receipt',
    url: 'img/small-receipt.jpg',
  },
  {
    name: 'Large receipt',
    url: 'img/large-receipt.jpg',
  },
];

export const App: VFC = () => {
  const [state, dispatch] = useReducer(reducer, {
    selectedImage: images[0],
    bboxes: [
      // {
      //   x0: 0,
      //   x1: 807,
      //   y0: 144,
      //   y1: 923,
      // }
    ],
  });

  const handleClick = (payload: ImageItem) => {
    dispatch(imageSelectedAction(payload));
  };

  const handleClickOCR = async (imageURL: string) => {
    const result = await parseImage(imageURL);

    console.log(result);

    const boxes = result.data.words.map(({ bbox }) => bbox);

    dispatch(ocrScannedAction(boxes));
  };

  return (
    <ChakraProvider>
      <ImageSelector onSelect={handleClick} images={images} />
      <ImageViewer image={state?.selectedImage} bboxes={state?.bboxes} onClickOCR={handleClickOCR} />
    </ChakraProvider>
  );
}
