import { VFC } from 'react';
import styled from '@emotion/styled';

import { Button } from '../Button';
import { BBox } from "./BBox";

import type { BoundingBox, ImageItem } from '../../types';

export interface ImageViewerProps {
  imageRef: React.MutableRefObject<HTMLImageElement | null>
  image?: ImageItem;
  bboxes?: BoundingBox[];
  onClickOCR?: (imageURL: string) => void;
}

const ImageContainer = styled('div')({
  zoom: .5,
  position: 'relative',
});

export const ImageViewer: VFC<ImageViewerProps> = ({ imageRef, image, bboxes, onClickOCR }) => (
  <section aria-label="image viewer">
    {image?.url && (
      <>
        <ImageContainer>
          <img src={image.url} ref={imageRef} alt={image.name} />
          {bboxes?.map((coords) => <BBox coords={coords} key={coords.toString()} />)}
        </ImageContainer>
        <Button onClick={() => onClickOCR?.(image.url)}>Run OCR</Button>
      </>
    )}
  </section>
);
